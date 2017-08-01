export function correctPlaceholder(
  selectedOption: string,
  textInput: HTMLInputElement
): HTMLInputElement {
  return selectedOption == "Caesar"
    ? this.caesarPlaceholder(textInput)
    : this.keywordPlaceholder(textInput);
}

function caesarPlaceholder(textInput: HTMLInputElement): HTMLInputElement {
  return this.placeholderReset(textInput, "Enter A Number", 3);
}

function keywordPlaceholder(textInput: HTMLInputElement): HTMLInputElement {
  return this.placeholderReset(textInput, "Enter A Keyword", 10);
}

function placeholderReset(
  textInput: HTMLInputElement,
  text: string,
  maxSize: number
): HTMLInputElement {
  const resetElement: HTMLInputElement = Object.create(textInput);
  resetElement.value = "";
  resetElement.placeholder = text;
  resetElement.maxLength = maxSize;
  return resetElement;
}
