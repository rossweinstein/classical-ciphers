export function correctPlaceholder(selectedOption: string, textInput: HTMLInputElement) {
  selectedOption == "Caesar" ? caesarPlaceholder(textInput) : keywordPlaceholder(textInput);
}

function caesarPlaceholder(textInput: HTMLInputElement) {
  placeholderReset(textInput, "Enter A Number", 3);
}

function keywordPlaceholder(textInput: HTMLInputElement) {
  placeholderReset(textInput, "Enter A Keyword", 10);
}

function placeholderReset(textInput: HTMLInputElement, text: string, maxSize: number) {
  textInput.value = "";
  textInput.placeholder = text;
  textInput.maxLength = maxSize;
}
