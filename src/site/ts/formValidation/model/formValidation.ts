export function canFormBeSubmitted(
  selectedOption: string,
  key: string
): boolean {
  return selectedOption == "Caesar"
    ? isValidNumberKey(key)
    : isValidKeyword(key);
}

function isValidNumberKey(key: string): boolean {
  const possibleNumber = parseInt(key, 10);
  return !isNaN(possibleNumber);
}

function isValidKeyword(key: string): boolean {
  return true;
}
