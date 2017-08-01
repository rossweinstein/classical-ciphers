import { correctPlaceholder } from './../../FormValidation/model/correctPlaceholder';
import { correctPlaceholder } from './../model/correctPlaceholder';
import { canFormBeSubmitted } from './../model/formValidation';

export class cipherForm {

    public validateForm (formElement: HTMLInputElement, keyElement: HTMLInputElement, submitButton: HTMLButtonElement) {
        formElement.addEventListener('click', () => {
            submitButton.disabled = canFormBeSubmitted(formElement.value, keyElement.value);
        });
    }

    public ensureCorrectPlaceholder(formElement: HTMLInputElement, keyInputElement: HTMLInputElement) {
        formElement.addEventListener('click', () => {
            keyInputElement = correctPlaceholder(formElement.value, keyInputElement);
        });
    }
}