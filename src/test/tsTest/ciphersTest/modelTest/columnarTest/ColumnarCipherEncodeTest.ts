import { ColumnarCipherEncoder } from './../../../../../site/ts/ciphers/model/columnar/ColumnarCipherEncoder';
import { expect } from 'chai';

describe('ColumnarCipherEncoder', () => {
    it('should encrypt the text "this message here" into "hmaht s esseriege" with key of "newt"', () => {
        const columnarCipher = new ColumnarCipherEncoder();
        const encryptedText = columnarCipher.performCipher('This message here', 'newt'); 
        expect(encryptedText).to.equal('hmahT s esseriege');
    });

    it('should return "Invalid Key: Must Be Alphabetic" when given the key "13dfv44"', () => {
        const columnarCipher = new ColumnarCipherEncoder();
        const encryptedText = columnarCipher.performCipher('This message here', '13dfv44'); 
        expect(encryptedText).to.equal('Invalid Key: Must Be Alphabetic');
    });
});