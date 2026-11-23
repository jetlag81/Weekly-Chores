import Foundation
import UserNotifications
import Capacitor

@objc(LocalPushPlugin)
public class LocalPushPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "LocalPushPlugin"
    public let jsName = "LocalPush"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "checkPermission", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "requestPermission", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "notify", returnType: CAPPluginReturnPromise)
    ]

    @objc func checkPermission(_ call: CAPPluginCall) {
        UNUserNotificationCenter.current().getNotificationSettings { settings in
            let status: String
            switch settings.authorizationStatus {
            case .authorized, .provisional, .ephemeral:
                status = "granted"
            case .denied:
                status = "denied"
            case .notDetermined:
                status = "prompt"
            @unknown default:
                status = "prompt"
            }
            call.resolve(["status": status])
        }
    }

    @objc func requestPermission(_ call: CAPPluginCall) {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, _ in
            call.resolve(["status": granted ? "granted" : "denied"])
        }
    }

    @objc func notify(_ call: CAPPluginCall) {
        let title = call.getString("title") ?? "Household Hub"
        let body = call.getString("body") ?? ""
        let tag = call.getString("tag") ?? "household_alert"

        UNUserNotificationCenter.current().getNotificationSettings { settings in
            guard settings.authorizationStatus == .authorized || settings.authorizationStatus == .provisional else {
                call.resolve(["sent": false])
                return
            }

            let content = UNMutableNotificationContent()
            content.title = title
            content.body = body
            content.sound = .default

            let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 0.2, repeats: false)
            let identifier = "\(tag)_\(Int(Date().timeIntervalSince1970 * 1000))"
            let request = UNNotificationRequest(identifier: identifier, content: content, trigger: trigger)

            UNUserNotificationCenter.current().add(request) { error in
                call.resolve(["sent": error == nil])
            }
        }
    }
}
