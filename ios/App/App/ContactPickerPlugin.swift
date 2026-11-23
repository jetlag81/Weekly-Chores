import Foundation
import UIKit
import ContactsUI
import Capacitor

@objc(ContactPickerPlugin)
public class ContactPickerPlugin: CAPPlugin, CAPBridgedPlugin, CNContactPickerDelegate {
    public let identifier = "ContactPickerPlugin"
    public let jsName = "ContactPicker"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "pickContact", returnType: CAPPluginReturnPromise)
    ]

    private var savedCall: CAPPluginCall?

    @objc func pickContact(_ call: CAPPluginCall) {
        self.savedCall = call
        DispatchQueue.main.async {
            let picker = CNContactPickerViewController()
            picker.delegate = self
            picker.displayedPropertyKeys = [
                CNContactGivenNameKey,
                CNContactFamilyNameKey,
                CNContactPhoneNumbersKey,
                CNContactEmailAddressesKey
            ]
            guard let vc = self.bridge?.viewController else {
                call.reject("No active view controller")
                self.savedCall = nil
                return
            }
            vc.present(picker, animated: true, completion: nil)
        }
    }

    public func contactPicker(_ picker: CNContactPickerViewController, didSelect contact: CNContact) {
        guard let call = self.savedCall else { return }
        let fullName = [contact.givenName, contact.familyName]
            .map { $0.trimmingCharacters(in: .whitespacesAndNewlines) }
            .filter { !$0.isEmpty }
            .joined(separator: " ")

        let phone = contact.phoneNumbers.first?.value.stringValue ?? ""
        let email = (contact.emailAddresses.first?.value as String?) ?? ""

        call.resolve([
            "name": fullName,
            "phone": phone,
            "email": email
        ])
        self.savedCall = nil
    }

    public func contactPickerDidCancel(_ picker: CNContactPickerViewController) {
        self.savedCall?.reject("cancelled")
        self.savedCall = nil
    }
}
