import { correctPlaceholder } from './../model/correctPlaceholder';
import { disableButton } from './../model/formValidation';

export class cipherForm {

    public validateForm (formElement: HTMLInputElement, keyElement: HTMLInputElement, submitButton: HTMLButtonElement) {
        keyElement.addEventListener('blur', () => {
            submitButton.disabled = disableButton(formElement.value, keyElement.value);
            console.log("IS BUTTON DISABLED: " + submitButton.disabled);
        });
    }

    public ensureCorrectPlaceholder(formElement: HTMLInputElement, keyInputElement: HTMLInputElement) {
        formElement.addEventListener('change', () => {
            correctPlaceholder(formElement.value, keyInputElement);
        });
    }
}