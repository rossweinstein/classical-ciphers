import { ValidateKeyword } from './../../../ValidateKeyword';
export abstract class ColumnarCipher {
 
  protected keyValidator: ValidateKeyword;

  public constructor() {
    this.keyValidator = new ValidateKeyword();
  }

  protected separateCharacters(text: string, keyLength: number) {
    var columns = [];
    for (let i = 0; i < text.length; i++) {
      var col = columns[i % keyLength];
      columns[i % keyLength] = col == null ? text.charAt(i) : col + text.charAt(i);
    }
    return columns;
  }

  protected findTheOrder(key: number[], sortedKey: number[]) {
    var order: number[] = [];
    for (let i = 0; i < key.length; i++) {
      order.push(sortedKey.indexOf(key[i]));
    }
    return order;
  }

  protected columnOrder(key: string) {
    const keyAsNumberArray = this.getKeyAsNumberArray(key);
    const sortedKey = this.sortKeyInAscendingOrder(keyAsNumberArray);
    return this.findTheOrder(keyAsNumberArray, sortedKey);
  }

  private getKeyAsNumberArray(key: string): number[] {
      return key.toLowerCase().split('').map(letter => letter.charCodeAt(0));
  }

  private sortKeyInAscendingOrder(numberKey: number[]): number[] {
      return numberKey.slice().sort((n1, n2) => n1 - n2);
  }
}
