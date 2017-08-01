export function disableButton(selectedOption: string, key: string): boolean {
  return selectedOption == "Caesar" ? isInvalidNumberKey(key) : isInvalidKeyword(key);
}

function isInvalidNumberKey(key: string): boolean {
  return isNaN(Number(key));
}

function isInvalidKeyword(key: string): boolean {
  return converStringToNumberArray(key).filter((ascii) => {
    return isValidLetter(ascii);
  }).length != key.length;
}

function converStringToNumberArray(word: string): number[] {
  return word.split('').map((letter) => {
      return letter.charCodeAt(0);
  })
}

function isValidLetter(ascii: number): boolean {
  return isValidUpperCaseLetter(ascii) || isValidLowerCaseLetter(ascii);
}

function isValidUpperCaseLetter(ascii: number): boolean {
  return ascii >= 65 && ascii <= 90;
}

function isValidLowerCaseLetter(ascii: number): boolean {
  return ascii >= 97 && ascii <= 122;
}
