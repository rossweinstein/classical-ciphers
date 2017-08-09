import { ColumnarCipherDecoder } from './../theCiphers/columnar/ColumnarCipherDecoder';
import { ColumnarCipherEncoder } from './../theCiphers/columnar/ColumnarCipherEncoder';
import { CaesarCipherEncoder } from './../theCiphers/caesar/CaesarCipherEncoder';
import { CaesarCipherDecoder } from './../theCiphers/caesar/CaesarCipherDecoder';
import { ICipher } from './../theCiphers/ICipher';

export class CipherController {

    public encrypt(text: string, key: string, cipherType: string): string {
        const type = this.getCipherType(cipherType);
        return type != CipherType.EMPTY ? this.encryptTheText(text, key, type) : "ERROR: Invalid Cipher Type";
    }

    private encryptTheText(text: string, key: string, type: CipherType) {
        const cipher: ICipher = CipherFactory.createCipher(type, CipherMethod.Encrypt);
        return cipher.performCipher(text, key);
    }

    public decrypt(text: string, key: string, cipherType: string): string {
        const type = this.getCipherType(cipherType);
        return type != CipherType.EMPTY ? this.decryptTheText(text, key, type) : "ERROR: Invalid Cipher Type";
    }

    private decryptTheText(text: string, key: string, type: CipherType) {
        const cipher: ICipher = CipherFactory.createCipher(type, CipherMethod.Decrypt);
        return cipher.performCipher(text, key);
    }

    private getCipherType(cipher: string): CipherType {
        if (cipher == "Caesar") {
            return CipherType.Caesar;
        } else if (cipher == 'Columnar') {
            return CipherType.Columnar;
        } else {
            return CipherType.EMPTY;
        }
    }
}

enum CipherType {
    Caesar, Columnar, EMPTY
}

enum CipherMethod {
    Encrypt, Decrypt
}

class CipherFactory {
    public static createCipher(type: CipherType, method: CipherMethod): ICipher {
        if (type == CipherType.Caesar) {
            return CipherFactory.createCeasarCipher(method);
        } else {
            return CipherFactory.createColumnarCipher(method);
        } 
    }

    private static createCeasarCipher(method: CipherMethod): ICipher {
        return method == CipherMethod.Encrypt ? new CaesarCipherEncoder : new CaesarCipherDecoder;
    }

    private static createColumnarCipher(method: CipherMethod): ICipher {
      return method == CipherMethod.Encrypt ? new ColumnarCipherEncoder : new ColumnarCipherDecoder;
    }
}