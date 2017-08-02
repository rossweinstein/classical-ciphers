import { ModifyKeyInputElement } from './../model/ModifyKeyInputElement';
import { FormValidation } from './../model/FormValidation';

export class cipherForm {

    private form: FormValidation;
    private modifyText: ModifyKeyInputElement;

    public constructor() {
        this.form = new FormValidation();
        this.modifyText = new ModifyKeyInputElement();
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