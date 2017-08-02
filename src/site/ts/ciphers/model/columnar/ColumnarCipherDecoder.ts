import { ICipher } from "./../ICipher";
import { ColumnarCipher } from "./../columnar/ColumnarCipher";

export class ColumnarCipherDecoder extends ColumnarCipher implements ICipher {
  public constructor() {
    super();
  }

  public performCipher(text: string, key: string): string {
    return this.keyValidator.isValidKeyword(key) ? this.decodeText(text, key) : "Invalid Key: Must Be Alphabetic";
  }

  private decodeText(text: string, key: string): string {
    const cipherColumns: number[] = this.getColumnLengths(text, key);
    const getColumnOrder: number[] = super.columnOrder(key);
    const reubiltColumns: string[] = this.rebuildCipherColumns(
      text,
      cipherColumns,
      getColumnOrder
    );
    return this.decryption(reubiltColumns, key.length);
  }

  private rebuildCipherColumns(text: string, cipherColumns: number[], order: number[]): string[] {
    const rebuiltColumns: string[] = [];
    var textyText = text;

    for (let i = 0; i < cipherColumns.length; i++) {
      const currentColumn = order[i];
      const numOfLetters = cipherColumns[currentColumn];
      rebuiltColumns[i] = textyText.substr(0, numOfLetters);
      textyText = textyText.substr(numOfLetters);
    }
    const orderedColumns = [];

    for (let i = 0; i < cipherColumns.length; i++) {
      orderedColumns.push(rebuiltColumns[order[i]]);
    }
    return orderedColumns;
  }

  private getColumnLengths(text: string, key: string): number[] {
    const columns = super.separateCharacters(text, key.length);
    const columnSize = [];
    for (let i = 0; i < columns.length; i++) {
      columnSize.push(columns[i].length);
    }
    return columnSize;
  }

  private decryption(rebuiltColumns: string[], keyLength: number): string {
    var decrptedText = "";
    const textLength = rebuiltColumns
      .map(col => col.length)
      .reduce((a, b) => a + b);
    var position = 0;
    for (let i = 0; i < textLength; i++) {
      decrptedText += rebuiltColumns[i % keyLength].charAt(position);
      if (i % keyLength == keyLength - 1) {
        position++;
      }
    }
    return decrptedText;
  }
}
