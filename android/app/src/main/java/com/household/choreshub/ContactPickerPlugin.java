package com.household.choreshub;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.net.Uri;
import android.provider.ContactsContract;
import androidx.activity.result.ActivityResult;
import androidx.core.content.ContextCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

@CapacitorPlugin(
    name = "ContactPicker",
    permissions = {
        @Permission(
            alias = "contacts",
            strings = { Manifest.permission.READ_CONTACTS }
        )
    }
)
public class ContactPickerPlugin extends Plugin {

    @PluginMethod
    public void pickContact(PluginCall call) {
        if (getPermissionState("contacts") != PermissionState.GRANTED) {
            requestPermissionForAlias("contacts", call, "contactsPermsCallback");
            return;
        }
        launchContactPicker(call);
    }

    @PermissionCallback
    private void contactsPermsCallback(PluginCall call) {
        launchContactPicker(call);
    }

    private void launchContactPicker(PluginCall call) {
        boolean hasContactsPerm =
            ContextCompat.checkSelfPermission(getContext(), Manifest.permission.READ_CONTACTS)
                == PackageManager.PERMISSION_GRANTED;

        // Use Contacts.CONTENT_URI for a clean 1-row-per-person list when READ_CONTACTS is granted;
        // fallback to Phone.CONTENT_URI only if permission was denied.
        Uri pickerUri = hasContactsPerm
            ? ContactsContract.Contacts.CONTENT_URI
            : ContactsContract.CommonDataKinds.Phone.CONTENT_URI;

        Intent intent = new Intent(Intent.ACTION_PICK, pickerUri);
        startActivityForResult(call, intent, "handleContactResult");
    }

    @ActivityCallback
    private void handleContactResult(PluginCall call, ActivityResult result) {
        if (call == null) {
            return;
        }
        if (result.getResultCode() != Activity.RESULT_OK || result.getData() == null || result.getData().getData() == null) {
            call.reject("cancelled");
            return;
        }

        Uri contactUri = result.getData().getData();
        boolean hasContactsPerm =
            ContextCompat.checkSelfPermission(getContext(), Manifest.permission.READ_CONTACTS)
                == PackageManager.PERMISSION_GRANTED;

        String contactId = null;
        String name = "";
        String phone = "";
        String email = "";

        if (hasContactsPerm && contactUri.toString().contains("/contacts/")) {
            String[] contactProj = new String[] {
                ContactsContract.Contacts._ID,
                ContactsContract.Contacts.DISPLAY_NAME
            };
            try (Cursor cursor = getContext().getContentResolver().query(contactUri, contactProj, null, null, null)) {
                if (cursor != null && cursor.moveToFirst()) {
                    int idIdx = cursor.getColumnIndex(ContactsContract.Contacts._ID);
                    int nameIdx = cursor.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME);
                    contactId = idIdx >= 0 ? cursor.getString(idIdx) : null;
                    name = nameIdx >= 0 && cursor.getString(nameIdx) != null ? cursor.getString(nameIdx).trim() : "";
                }
            } catch (Exception e) {
                call.reject("Failed to read contact: " + e.getMessage());
                return;
            }

            if (contactId != null) {
                // Query phone numbers and prefer Mobile over Home/Work/Other
                String bestPhone = "";
                int bestPriority = Integer.MAX_VALUE;
                try (
                    Cursor phoneCursor = getContext().getContentResolver().query(
                        ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
                        new String[] {
                            ContactsContract.CommonDataKinds.Phone.NUMBER,
                            ContactsContract.CommonDataKinds.Phone.TYPE
                        },
                        ContactsContract.CommonDataKinds.Phone.CONTACT_ID + " = ?",
                        new String[] { contactId },
                        null
                    )
                ) {
                    if (phoneCursor != null) {
                        int numIdx = phoneCursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER);
                        int typeIdx = phoneCursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.TYPE);
                        while (phoneCursor.moveToNext()) {
                            String candidate = numIdx >= 0 ? phoneCursor.getString(numIdx) : null;
                            if (candidate == null || candidate.trim().isEmpty()) continue;
                            int type = typeIdx >= 0 ? phoneCursor.getInt(typeIdx) : ContactsContract.CommonDataKinds.Phone.TYPE_OTHER;
                            int priority = (type == ContactsContract.CommonDataKinds.Phone.TYPE_MOBILE) ? 0
                                : (type == ContactsContract.CommonDataKinds.Phone.TYPE_MAIN) ? 1
                                : (type == ContactsContract.CommonDataKinds.Phone.TYPE_HOME) ? 2
                                : 3;
                            if (priority < bestPriority) {
                                bestPriority = priority;
                                bestPhone = candidate.trim();
                                if (priority == 0) break;
                            }
                        }
                    }
                } catch (Exception ignored) {
                }
                phone = bestPhone;

                // Query primary email
                try (
                    Cursor emailCursor = getContext().getContentResolver().query(
                        ContactsContract.CommonDataKinds.Email.CONTENT_URI,
                        new String[] { ContactsContract.CommonDataKinds.Email.ADDRESS },
                        ContactsContract.CommonDataKinds.Email.CONTACT_ID + " = ?",
                        new String[] { contactId },
                        null
                    )
                ) {
                    if (emailCursor != null && emailCursor.moveToFirst()) {
                        int emailIdx = emailCursor.getColumnIndex(ContactsContract.CommonDataKinds.Email.ADDRESS);
                        if (emailIdx >= 0 && emailCursor.getString(emailIdx) != null) {
                            email = emailCursor.getString(emailIdx).trim();
                        }
                    }
                } catch (Exception ignored) {
                }
            }
        } else {
            // Fallback path when READ_CONTACTS was denied (Phone.CONTENT_URI picker)
            String[] projection = new String[] {
                ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME,
                ContactsContract.CommonDataKinds.Phone.NUMBER
            };
            try (Cursor cursor = getContext().getContentResolver().query(contactUri, projection, null, null, null)) {
                if (cursor != null && cursor.moveToFirst()) {
                    int nameIdx = cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME);
                    int numIdx = cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER);
                    name = nameIdx >= 0 && cursor.getString(nameIdx) != null ? cursor.getString(nameIdx).trim() : "";
                    phone = numIdx >= 0 && cursor.getString(numIdx) != null ? cursor.getString(numIdx).trim() : "";
                }
            } catch (Exception e) {
                call.reject("Failed to read selected contact: " + e.getMessage());
                return;
            }
        }

        JSObject ret = new JSObject();
        ret.put("name", name);
        ret.put("phoneNumber", phone);
        ret.put("email", email);
        call.resolve(ret);
    }
}
