export abstract class ColumnarCipher {
  // take a string and break it into as many different groups as there are letters in the key
  protected separateCharacters(text: string, keyLength: number) {
    var stringAray = [];
    for (let i = 0; i < text.length; i++) {
      var currentLetters = stringAray[i % keyLength];

      if (currentLetters == null) {
        stringAray[i % keyLength] = text.charAt(i).toLowerCase();
      } else {
        stringAray[i % keyLength] = currentLetters + text.charAt(i).toLowerCase();
      }
    }
    return stringAray;
  }

  protected findTheOrder(key: number[], sortedKey: number[]) {
    var order: number[] = [];
    for (let i = 0; i < key.length; i++) {
      for (let x = 0; x < sortedKey.length; x++) {
        if (sortedKey[i] == key[x]) {
          order.push(x);
        }
      }
    }
    return order;
  }

  protected columnOrder(key: string) {
    const keyAsNumberArray = this.getKeyAsNumberArray(key);
    const unSortedKey = keyAsNumberArray.slice();
    const sortedKey = this.sortKeyInAscendingOrder(keyAsNumberArray);
    return this.findTheOrder(unSortedKey, sortedKey);
  }

  private getKeyAsNumberArray(key: string): number[] {
      return key.toLowerCase().split('').map(letter => letter.charCodeAt(0));
  }

  private sortKeyInAscendingOrder(numberKey: number[]): number[] {
      return numberKey.sort((n1, n2) => n1 - n2);
  }

}
