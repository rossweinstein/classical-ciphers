import { CipherController } from './../../../../site/ts/ciphers/controllers/CipherController';
import { expect } from 'chai';

describe('CipherController', () => {
    it('should encrypt "caesar" to "mko}k|" using the caesar cipher with key of 10', () => {
        const unencryptedString = "caesar";
        const cipher = new CipherController();
        const encryptedString = cipher.encrypt(unencryptedString, "10", "Caesar");
        expect(encryptedString).to.equal('mko}k|');
    });

    it('should decrypt "mko}k|" to "caesar" using the caesar cipher with key of 10', () => {
        const encryptedString = "mko}k|";
        const cipher = new CipherController();
        const decryptedString = cipher.decrypt(encryptedString, "10", "Caesar");
        expect(decryptedString).to.equal('caesar');
    });

    it('should return "Invalid Key: Key Must Be Numeric" when given key of 1a', () => {
        const cipher = new CipherController();
        const invalidKey = cipher.encrypt("text", "1a", "Caesar");
        expect(invalidKey).to.equal('Invalid Key: Key Must Be Numeric');
    });

    it('should return "Invalid Key: Key Must Be Numeric" when given key of a1', () => {
        const cipher = new CipherController();
        const invalidKey = cipher.decrypt("text", "a1", "Caesar");
        expect(invalidKey).to.equal('Invalid Key: Key Must Be Numeric');
    });

    it('should return "ERROR: Invalid Cipher Type" when given invalid cipher type', () => {
        const cipher = new CipherController();
        const invalidCipher = cipher.decrypt("text", "10", "Cipher");
        expect(invalidCipher).to.equal('ERROR: Invalid Cipher Type');
    });
});