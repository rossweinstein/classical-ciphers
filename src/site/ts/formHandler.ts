// what needs to be done
// if not a number when caesar selected, gray out button
// likewise if not all alpha characters, grat out button with other options
// give the currect placeholder for the key dependign on selection

export class cipherForm {

    public correctPlaceholder(selectedOption: string, textInput: HTMLInputElement): HTMLInputElement {
        return selectedOption == 'Caesar' ? this.caesarPlaceholder(textInput) : this.keywordPlaceholder(textInput);
    }

    private caesarPlaceholder(textInput: HTMLInputElement): HTMLInputElement {
        return this.placeholderReset(textInput, "Enter A Number", 3);
    }

    private keywordPlaceholder(textInput: HTMLInputElement): HTMLInputElement {
        return this.placeholderReset(textInput, "Enter A Keyword", 10);
    }

    private placeholderReset(textInput: HTMLInputElement, text: string, maxSize: number): HTMLInputElement {
        const resetElement: HTMLInputElement = Object.create(textInput);
        resetElement.value = '';
        resetElement.placeholder = text;
        resetElement.maxLength = maxSize;
        return resetElement;
    }

    public canFormBeSubmitted (selectedOption: string, key: string): boolean {
        return selectedOption == 'Caesar' ? this.isValidNumberKey(key) : this.isValidKeyword(key);
    }

     private isValidNumberKey(key: string): boolean {
        const possibleNumber = parseInt(key, 10);
        return !isNaN(possibleNumber);
    }

    private isValidKeyword(key: string): boolean {
        return true;
    }
}