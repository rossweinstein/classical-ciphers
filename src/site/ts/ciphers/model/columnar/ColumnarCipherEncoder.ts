import { ICipher } from "./../ICipher";
import { ColumnarCipher } from "./ColumnarCipher";

export class ColumnarCipherEncoder extends ColumnarCipher implements ICipher {
  public constructor() {
    super();
  }

  public performCipher(text: string, key: string): string {
    const dividedLetters = this.separateCharacters(text, key.length);
    const orderOfCipher = this.columnOrder(key);
    return this.formCipher(dividedLetters, orderOfCipher);
  }

  protected formCipher(textArray: string[], order: number[]): string {
    
    var cipherString = "";

    for (let i = 0; i < order.length; i++) {
        cipherString += textArray[order[i]];
    }
    return cipherString;
  }
}
