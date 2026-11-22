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
        // Launch picker even if READ_CONTACTS was denied (name & phone still work via ACTION_PICK grant)
        launchContactPicker(call);
    }

    private void launchContactPicker(PluginCall call) {
        Intent intent = new Intent(Intent.ACTION_PICK, ContactsContract.CommonDataKinds.Phone.CONTENT_URI);
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
        String[] projection = new String[] {
            ContactsContract.CommonDataKinds.Phone.CONTACT_ID,
            ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME,
            ContactsContract.CommonDataKinds.Phone.NUMBER
        };

        try (Cursor cursor = getContext().getContentResolver().query(contactUri, projection, null, null, null)) {
            if (cursor != null && cursor.moveToFirst()) {
                int idIdx = cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.CONTACT_ID);
                int nameIdx = cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME);
                int numIdx = cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER);

                String contactId = idIdx >= 0 ? cursor.getString(idIdx) : null;
                String name = nameIdx >= 0 ? cursor.getString(nameIdx) : "";
                String phone = numIdx >= 0 ? cursor.getString(numIdx) : "";
                String email = "";

                if (
                    contactId != null &&
                    ContextCompat.checkSelfPermission(getContext(), Manifest.permission.READ_CONTACTS)
                        == PackageManager.PERMISSION_GRANTED
                ) {
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
                            if (emailIdx >= 0) {
                                String found = emailCursor.getString(emailIdx);
                                if (found != null) {
                                    email = found.trim();
                                }
                            }
                        }
                    } catch (Exception ignored) {
                        // Gracefully omit email if unavailable
                    }
                }

                JSObject ret = new JSObject();
                ret.put("name", name != null ? name.trim() : "");
                ret.put("phoneNumber", phone != null ? phone.trim() : "");
                ret.put("email", email);
                call.resolve(ret);
                return;
            }
        } catch (Exception e) {
            call.reject("Failed to read selected contact: " + e.getMessage());
            return;
        }

        call.reject("No contact data returned");
    }
}
