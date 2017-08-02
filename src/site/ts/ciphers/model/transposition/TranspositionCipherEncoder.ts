import { ICipher } from "./../ICipher";
import { TranspositionCipher } from "./TranspositionCipher";

export class TranspositionCipherEncoder extends TranspositionCipher implements ICipher {
  public constructor() {
    super();
  }

  public performCipher(text: string, key: string): string {
    const dividedLetters = this.separateCharacters(text, key.length);
    const orderOfCipher = this.doSomething(key);
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
