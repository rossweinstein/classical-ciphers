import { CaesarCipherDecoder } from './../../../../../site/ts/ciphers/model/caesar/CaesarCipherDecoder';
import { expect } from 'chai';

describe('CaesarCipherDecryption', () => {
    it('should turn "bcd" to "abc" with key of 1', () => {
        const encryptedString: string = 'bcd';
        const decrypter = new CaesarCipherDecoder();
        const decryptedString = decrypter.performCipher(encryptedString, "1");
        expect(decryptedString).to.equal('abc'); 
    });

    it('should turn "m,0>,=Jm4;30=Jn0.=D;?4:9" into "Caesar Cipher Decryption" with key of 42', () => {
        const encryptedString: string = 'm,0>,=Jm4;30=Jn0.=D;?4:9';
        const decrypter = new CaesarCipherDecoder();
        const decryptedString = decrypter.performCipher(encryptedString, "42");
        expect(decryptedString).to.equal('Caesar Cipher Decryption'); 
    });

    it('should return "Invalid Key: Key Must Be Numeric" with key of a1', () => {
        const encryptedString: string = 'bcd';
        const decrypter = new CaesarCipherDecoder();
        const decryptedString = decrypter.performCipher(encryptedString, "a1");
        expect(decryptedString).to.equal('Invalid Key: Key Must Be Numeric'); 
    });

      it('should return "Invalid Key: Key Must Be Numeric" with key of 1a', () => {
        const encryptedString: string = 'bcd';
        const decrypter = new CaesarCipherDecoder();
        const decryptedString = decrypter.performCipher(encryptedString, "1a");
        expect(decryptedString).to.equal('Invalid Key: Key Must Be Numeric'); 
    });
});

