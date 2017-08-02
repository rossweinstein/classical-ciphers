import { FormValidation } from './../../../../site/ts/formValidation/model/FormValidation';
import { expect } from 'chai';

describe('FormValidation', () => {
    it('should return true to disable submit button when given a non numeric key for a caesar cipher', () => {
        const form = new FormValidation();
        const badKey = form.disableButton("Caesar", "1a");
        expect(badKey).to.equal(true);
    });

    it('should return false to not disable submit button when given a valid numeric key for a caesar cipher', () => {
        const form = new FormValidation();
        const validKey = form.disableButton("Caesar", "13");
        expect(validKey).to.equal(false);
    });

    it('should return true to disable submit button when given a key that contains characters other than [A-Za-z] for a transposition cipher', () => {
        const form = new FormValidation();
        const badKey = form.disableButton("Transpotiion", "b@d_K3y");
        expect(badKey).to.equal(true);
    });

     it('should return false to not disable submit button when given a valid key that only contains characters [A-Za-z] for a transposition cipher', () => {
        const form = new FormValidation();
        const validKey = form.disableButton("Transpotiion", "validKey");
        expect(validKey).to.equal(false);
    });

    it('should return true to disable submit button when given a key that contains characters other than [A-Za-z] for a Vigenere cipher', () => {
        const form = new FormValidation();
        const badKey = form.disableButton("Vigenere", "b@d_K3y");
        expect(badKey).to.equal(true);
    });

     it('should return false to not disable submit button when given a valid key that only contains characters [A-Za-z] for a Vigenere cipher', () => {
        const form = new FormValidation();
        const validKey = form.disableButton("Vigenere", "validKey");
        expect(validKey).to.equal(false);
    });
});