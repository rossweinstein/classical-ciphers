export class formValidation {
  /*
    Determines if we have valid input, disabiling the submit button if there is something wrong.
    To have a valid input the key must be numeric for the Caesar cipher and only [A-Za-z] for
    transposition and Vigenere ciphers
  */
  public disableButton(selectedOption: string, key: string): boolean {
    return selectedOption == "Caesar"
      ? this.isInvalidNumberKey(key)
      : this.isInvalidKeyword(key);
  }

  //////////////// VALIDATING NUMERIC KEYS ///////////////////////////
  private isInvalidNumberKey(key: string): boolean {
    return isNaN(Number(key));
  }

  //////////////// VALIDATING KEYWORDS ///////////////////////////////

  private isInvalidKeyword(key: string): boolean {
    return (
      this.converStringToNumberArray(key).filter(ascii => {
        return this.isValidLetter(ascii);
      }).length != key.length
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
