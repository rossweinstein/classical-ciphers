export abstract class CaesarCipher {

    protected converStringToNumberArray(word: string): number[] {
        return word.split('').map((letter) => {
            return letter.charCodeAt(0) - 32;
        })
    }

    protected convertNumberArrayToString(asciiArray: number[]): string {
        return asciiArray.map((asciiCode) => {
            return String.fromCharCode(asciiCode + 32);
        }).join('');
    }

    protected isValidNumericKey(key: string): boolean {
        const possibleNumber = parseInt(key, 10);
        return !isNaN(possibleNumber);
    }

    protected shiftNumberArray(asciiArray: number[], key: number): number[] {
        return asciiArray.map((asciiCode) => {
            return this.shiftAsciiValue(asciiCode, key);
        })
    }

    private shiftAsciiValue(asciiValue: number, key: number): number {
        return asciiValue + key >= 0 ? this.positiveAsciiShift(asciiValue, key) : this.negativeAsciiShift(asciiValue, key);
    }

    private positiveAsciiShift(asciiValue: number, key: number): number {
        return (asciiValue + key) % 95;
    }

    private negativeAsciiShift(asciiValue: number, key: number): number {
        return (asciiValue + key) % 95 == 0 ? 0 : 95 - (-(asciiValue + key) % 95);
    }
}