export class ValidateKeyword {
  public isValidKeyword(key: string): boolean {
    return (
      this.converStringToNumberArray(key).filter(ascii => {
        return this.isValidLetter(ascii);
      }).length == key.length
    );
  }

  private converStringToNumberArray(word: string): number[] {
    return word.split("").map(letter => {
      return letter.charCodeAt(0);
    });
  }

  private isValidLetter(ascii: number): boolean {
    return (
      this.isValidUpperCaseLetter(ascii) || this.isValidLowerCaseLetter(ascii)
    );
  }

  private isValidUpperCaseLetter(ascii: number): boolean {
    return ascii >= 65 && ascii <= 90;
  }

  private isValidLowerCaseLetter(ascii: number): boolean {
    return ascii >= 97 && ascii <= 122;
  }
}
