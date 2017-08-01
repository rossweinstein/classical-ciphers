import { modifyPlaceholderText } from './../model/correctPlaceholder';
import { formValidation } from './../model/formValidation';

export class cipherForm {

    private form: formValidation;
    private modifyText: modifyPlaceholderText;

    public constructor() {
        this.form = new formValidation();
        this.modifyText = new modifyPlaceholderText();
    }

    public validateForm (formElement: HTMLInputElement, keyElement: HTMLInputElement, submitButton: HTMLButtonElement) {
        keyElement.addEventListener('blur', () => {
            submitButton.disabled = this.form.disableButton(formElement.value, keyElement.value);
        });
    }

    public ensureCorrectPlaceholder(formElement: HTMLInputElement, keyInputElement: HTMLInputElement) {
        formElement.addEventListener('change', () => {
            this.modifyText.correctPlaceholder(formElement.value, keyInputElement);
        });
    }
}