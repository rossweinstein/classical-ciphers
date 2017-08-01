import { ICipher } from '../ICipher';
import { CaesarCipher } from "./CaesarCipher";

export class CaesarCipherDecoder extends CaesarCipher implements ICipher {

    constructor() {
        super();
    }

    public performCipher(text: string, key: string): string {
        return super.isValidNumericKey(key) ? this.decodeText(text, Number(key)) : "Invalid Key: Key Must Be Numeric";
    }

    private decodeText(text: string, key: number): string {
        const asciiArray = super.converStringToNumberArray(text);
        const decodedArray = super.shiftNumberArray(asciiArray, -key);
        return super.convertNumberArrayToString(decodedArray);
    }
}