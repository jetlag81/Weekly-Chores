package com.household.choreshub;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.provider.ContactsContract;
import androidx.activity.result.ActivityResult;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ContactPicker")
public class ContactPickerPlugin extends Plugin {

    @PluginMethod
    public void pickContact(PluginCall call) {
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
            ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME,
            ContactsContract.CommonDataKinds.Phone.NUMBER
        };

        try (Cursor cursor = getContext().getContentResolver().query(contactUri, projection, null, null, null)) {
            if (cursor != null && cursor.moveToFirst()) {
                int nameIdx = cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME);
                int numIdx = cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER);
                String name = nameIdx >= 0 ? cursor.getString(nameIdx) : "";
                String phone = numIdx >= 0 ? cursor.getString(numIdx) : "";

                JSObject ret = new JSObject();
                ret.put("name", name != null ? name.trim() : "");
                ret.put("phoneNumber", phone != null ? phone.trim() : "");
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
