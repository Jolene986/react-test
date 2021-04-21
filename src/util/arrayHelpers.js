//Create the array of letters
const alpha = Array.from(Array(26)).map((item, idx) => idx + 65);
export const alphabet = alpha.map((item) => String.fromCharCode(item));

//create array of numbers

export const numbers = Array.from({ length: 26 }, (_, i) => i + 1);

//Merge to object map or merge into array of objects

export const letterNumberMap = alphabet.map((item, i) => ({
  letter: item,
  number: numbers[i],
}));
