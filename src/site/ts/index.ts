import { TranspositionCipherEncoder } from './ciphers/model/transposition/TranspositionCipherEncoder';
import { CipherController } from "./ciphers/controllers/CipherController";
import { cipherForm } from "./formValidation/controller/cipherFormController";
require("../css/application.css");

const keyInputElement = <HTMLInputElement>document.getElementById("key");
const cipherType = <HTMLInputElement>document.getElementById("selectCipher");
const submitButton = <HTMLButtonElement>document.getElementById("button");
const cipherTextArea = <HTMLTextAreaElement>document.getElementsByClassName(
  "cipherTextArea"
)[0];

const output = <HTMLParagraphElement>document.getElementById('cipherOutput');

const cipherFormController = new cipherForm();
cipherFormController.validateForm(cipherType, keyInputElement, submitButton);
cipherFormController.ensureCorrectPlaceholder(cipherType, keyInputElement);

const cipher = new CipherController();

submitButton.addEventListener("click", () => {

  if (submitButton.disabled == false) {

    const cipherText: string = cipherTextArea.value;
    const encryptionSetting = <HTMLInputElement>document.getElementById('encryptDecrypt');
    const encrypt: boolean = encryptionSetting.value == "Encrypt";
    
    if (encrypt) {
        output.innerHTML = cipher.encrypt(cipherText, keyInputElement.value, cipherType.value);
    } else {
        output.innerHTML = cipher.decrypt(cipherText, keyInputElement.value, cipherType.value);
    }

    
  }
});

const transCipher = new TranspositionCipherEncoder();
const encryptedText = transCipher.performCipher("This message here", "Newt");
console.log(encryptedText);

if (module.hot) {
  module.hot.accept();
}
