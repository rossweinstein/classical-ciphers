export class ModifyKeyInputElement {

  /*
    Ensures that the placeholder text for the key input is correct based on the type of
    key that is requested.  If we are going to use a Caesar cipher, the text must be numeric
    and so the plaeholder will ask for a number.  If we are using a transposition or Vigenere
    cipher, the key must be [A-Za-z] and so the placeholder will ask for a keyword.
  */
  public correctPlaceholder(selectedOption: string, textInput: HTMLInputElement) {
    selectedOption == "Caesar"
      ? this.caesarPlaceholder(textInput)
      : this.keywordPlaceholder(textInput);
  }

  private caesarPlaceholder(textInput: HTMLInputElement) {
    this.placeholderReset(textInput, "Enter A Number", 3);
  }

  private keywordPlaceholder(textInput: HTMLInputElement) {
    this.placeholderReset(textInput, "Enter A Keyword", 10);
  }

  private placeholderReset(textInput: HTMLInputElement, text: string, maxSize: number) {
    textInput.value = "";
    textInput.placeholder = text;
    textInput.maxLength = maxSize;
  }
}
