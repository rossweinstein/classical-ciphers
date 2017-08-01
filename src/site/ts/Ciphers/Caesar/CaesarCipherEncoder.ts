import { ICipher } from '../ICipher';
import { CaesarCipher } from "./CaesarCipher";

export class CaesarCipherEncoder extends CaesarCipher implements ICipher {

    constructor() {
        super();
    }

    public performCipher(text: string, key: string): string {
        return super.isValidNumericKey(key) ? this.encodeText(text, Number(key)) : "Invalid Key: Key Must Be Numeric";
    }

    private encodeText(text: string, key: number): string {
        const asciiArray = super.converStringToNumberArray(text);
        const encodedArray = super.shiftNumberArray(asciiArray, key);
        return super.convertNumberArrayToString(encodedArray);
    }
}