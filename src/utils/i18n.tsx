import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
      translation: {
        registrationNumberTitle: "Registration Number",
        registrationNumberFormFiller: "Please enter your registration number",
        registrationNumberValidationError: "Registration number is required",
        phoneNumberTitle: "Phone Number",
        phoneNumberFormFiller: "Please enter your phone number",
        phoneNumberValidationError: "Phone number is required",
        membershipPageTitle: "Membership Services",
        membershipSubtitle: "Access exclusive benefits and features",
        memberRegistrationTitle: "New Member Registration",
        memeberRegistrationSubtitle: "Please fill in the details to register as a new member",
        firstNameTitle: "First Name",
        firstNameFormFiller: "First name",
        firstNameValidationError: "First Name is required",
        passwordTitle: "Password",
        passwordFormFiller: "Please entrer a password",
        passwordValidationError: "Password is required",
        confirmPasswordTitle: "Confirm Password",
        confirmPasswordFormFiller: "Please enter the password",
        confirmPasswordValidationError: "Password confirmation is required",
        passwordMismatchMessage: "Passwords do not match",
        lastNameTitle: "Last Name",
        lastNameFormFiller: "Last name",
        lastNameValidationError: "Last Name is required",
        emailTitle: "Email",
        emailFormFiller: "Please enter your email address",
        emailValidationError:"Email is required",
        transactionReferenceTitle: "Transaction Reference",
        transactionReferenceValidationError: "Transaction Reference is required",
        transactionFormFiller: "Please enter your transaction reference",
        transactionTitle: "Transaction Reference",
        transactionInfo: 'Please transfer the membership fee and type the same transaction reference here.',
        renewMembershipTitle: "Renew Membership",
        renewMembershipSubtitle: "Please provide the following data to renew your membership",
        transactionDateTitle: "Transaction Date",
        transactionDateValidationError: "Transaction Date is required",
        renewBrn: 'Renew Membership',
        qrCodeTitle: 'Reissue QR Code',
        qrCodeSubtitle: 'Enter your email address to request a new QR code',
        qrCodeBtn: "Reissue Membership QR Code",
        membershipBtn: "Become a Member",
        registrationBtn: "Register New Member",
        copyRight: "2024 Manchester Islamic Centre. All rights reserved."
      }
    },
    fr: {
      translation: {
        "Welcome to React": "Bienvenue à React et react-i18next"
      }
    }
  };
  
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option
  
      interpolation: {
        escapeValue: false // react already safes from xss
      }
    });
  
export default i18n;