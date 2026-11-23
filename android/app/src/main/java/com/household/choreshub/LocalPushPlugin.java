package com.household.choreshub;

import android.Manifest;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

@CapacitorPlugin(
    name = "LocalPush",
    permissions = {
        @Permission(
            alias = "notifications",
            strings = { Manifest.permission.POST_NOTIFICATIONS }
        )
    }
)
public class LocalPushPlugin extends Plugin {
    private static final String CHANNEL_ID = "household_hub_alerts";
    private static final String CHANNEL_NAME = "Household Hub Alerts";
    private static final String CHANNEL_DESC = "Chore reminders, nudges, praises, and photo proof alerts";

    @Override
    public void load() {
        createNotificationChannel();
    }

    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(
                CHANNEL_ID,
                CHANNEL_NAME,
                NotificationManager.IMPORTANCE_HIGH
            );
            channel.setDescription(CHANNEL_DESC);
            channel.enableVibration(true);
            NotificationManager manager = getContext().getSystemService(NotificationManager.class);
            if (manager != null) {
                manager.createNotificationChannel(channel);
            }
        }
    }

    @PluginMethod
    public void checkPermission(PluginCall call) {
        JSObject ret = new JSObject();
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) {
            ret.put("status", NotificationManagerCompat.from(getContext()).areNotificationsEnabled() ? "granted" : "denied");
            call.resolve(ret);
            return;
        }
        PermissionState state = getPermissionState("notifications");
        if (state == PermissionState.GRANTED) {
            ret.put("status", "granted");
        } else if (state == PermissionState.DENIED) {
            ret.put("status", "denied");
        } else {
            ret.put("status", "prompt");
        }
        call.resolve(ret);
    }

    @PluginMethod
    public void requestPermission(PluginCall call) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) {
            JSObject ret = new JSObject();
            ret.put("status", NotificationManagerCompat.from(getContext()).areNotificationsEnabled() ? "granted" : "denied");
            call.resolve(ret);
            return;
        }
        if (getPermissionState("notifications") == PermissionState.GRANTED) {
            JSObject ret = new JSObject();
            ret.put("status", "granted");
            call.resolve(ret);
            return;
        }
        requestPermissionForAlias("notifications", call, "notifPermsCallback");
    }

    @PermissionCallback
    private void notifPermsCallback(PluginCall call) {
        JSObject ret = new JSObject();
        PermissionState state = getPermissionState("notifications");
        ret.put("status", state == PermissionState.GRANTED ? "granted" : "denied");
        call.resolve(ret);
    }

    @PluginMethod
    public void notify(PluginCall call) {
        String title = call.getString("title", "Household Hub");
        String body = call.getString("body", "");
        String tag = call.getString("tag", "household_alert");

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
            getPermissionState("notifications") != PermissionState.GRANTED) {
            JSObject ret = new JSObject();
            ret.put("sent", false);
            call.resolve(ret);
            return;
        }

        createNotificationChannel();

        Context ctx = getContext();
        Intent launchIntent = new Intent(ctx, MainActivity.class);
        launchIntent.setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        int flags = PendingIntent.FLAG_UPDATE_CURRENT;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            flags |= PendingIntent.FLAG_IMMUTABLE;
        }
        PendingIntent pendingIntent = PendingIntent.getActivity(ctx, 0, launchIntent, flags);

        int iconRes = ctx.getApplicationInfo().icon;
        if (iconRes == 0) {
            iconRes = android.R.drawable.ic_dialog_info;
        }

        NotificationCompat.Builder builder = new NotificationCompat.Builder(ctx, CHANNEL_ID)
            .setSmallIcon(iconRes)
            .setContentTitle(title)
            .setContentText(body)
            .setStyle(new NotificationCompat.BigTextStyle().bigText(body))
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .setContentIntent(pendingIntent);

        int notifId = Math.abs((tag + System.currentTimeMillis()).hashCode());
        NotificationManager manager = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (manager != null) {
            manager.notify(notifId, builder.build());
        }

        JSObject ret = new JSObject();
        ret.put("sent", true);
        call.resolve(ret);
    }
}
