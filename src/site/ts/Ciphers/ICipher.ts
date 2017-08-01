export interface ICipher {
    performCipher(text: string, key: string): string;
}