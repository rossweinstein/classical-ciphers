import { CaesarCipherEncoder } from './../../../../../site/ts/ciphers/theCiphers/caesar/CaesarCipherEncoder';
import { expect } from 'chai';

describe('CaesarCipherDecryption', () => {
    it('should turn "abc" to "bcd"', () => {
        const unencryptedString: string = 'abc';
        const encrypter = new CaesarCipherEncoder();
        const encryptedString = encrypter.performCipher(unencryptedString, "1");
        expect(encryptedString).to.equal('bcd'); 
    });

    it('should turn "Caesar Cipher Encryption" into "m,0>,=Jm4;30=Jo9.=D;?4:9" with key of 42', () => {
        const unencryptedString: string = 'Caesar Cipher Encryption';
        const encrypter = new CaesarCipherEncoder();
        const encryptedString = encrypter.performCipher(unencryptedString, "42");
        expect(encryptedString).to.equal('m,0>,=Jm4;30=Jo9.=D;?4:9'); 
    });

    it('should return "Invalid Key: Key Must Be Numeric" with key of a1', () => {
       const unencryptedString: string = 'abc';
        const encrypter = new CaesarCipherEncoder();
        const encryptedString = encrypter.performCipher(unencryptedString, "a1");
        expect(encryptedString).to.equal('Invalid Key: Key Must Be Numeric'); 
    });

      it('should return "Invalid Key: Key Must Be Numeric" with key of 1a', () => {
        const unencryptedString: string = 'abc';
        const encrypter = new CaesarCipherEncoder();
        const encryptedString = encrypter.performCipher(unencryptedString, "1a");
        expect(encryptedString).to.equal('Invalid Key: Key Must Be Numeric'); 
    });
});