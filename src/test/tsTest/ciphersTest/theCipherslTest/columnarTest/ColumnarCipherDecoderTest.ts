import { ColumnarCipherDecoder } from './../../../../../site/ts/ciphers/theCiphers/columnar/ColumnarCipherDecoder';
import { expect } from 'chai';

describe('ColumnarCipherEncoder', () => {
    it('should decrypt the text "hmaht s esseriege" into "this message here" with key of "newt"', () => {
        const columnarCipher = new ColumnarCipherDecoder;
        const encryptedText = columnarCipher.performCipher('hmaht s esseriege', 'newt'); 
        expect(encryptedText).to.equal('this message here');
    });

    it('should return "Invalid Key: Must Be Alphabetic" when given the key "13dfv44"', () => {
        const columnarCipher = new ColumnarCipherDecoder();
        const decryptedText = columnarCipher.performCipher('hmaht s esseriege', '13dfv44'); 
        expect(decryptedText).to.equal('Invalid Key: Must Be Alphabetic');
    });
});