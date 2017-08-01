import { cipherForm } from './formValidation/controller/cipherFormController';
require('../css/application.css');

const keyInputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('key');
const cipherType: HTMLInputElement = <HTMLInputElement>document.getElementById('selectCipher');
const submitButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('button');

const cipherFormController = new cipherForm();
cipherFormController.validateForm(cipherType, keyInputElement, submitButton);
cipherFormController.ensureCorrectPlaceholder(cipherType, keyInputElement);



if (module.hot) {
    module.hot.accept();
}
