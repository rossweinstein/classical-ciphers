import { correctPlaceholder } from './../model/correctPlaceholder';
import { canFormBeSubmitted } from './../model/formValidation';

export class cipherForm {

    public validateForm (formElement: HTMLInputElement, keyElement: HTMLInputElement, submitButton: HTMLButtonElement) {
        formElement.addEventListener('onkeypress', () => {
            console.log("HERE");
            submitButton.disabled = canFormBeSubmitted(formElement.value, keyElement.value);
        });
    }

    public ensureCorrectPlaceholder(formElement: HTMLInputElement, keyInputElement: HTMLInputElement) {
        formElement.addEventListener('change', () => {
            correctPlaceholder(formElement.value, keyInputElement);
        });
    }
}