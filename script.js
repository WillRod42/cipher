const sentence = prompt("Enter a sentence: ");
console.log(sentence);

function getSentenceCaps(sentence) {
  sentence = sentence.trim();
  const firstLetter = sentence.slice(0, 1).toUpperCase();
  const lastLetter = sentence.slice(sentence.length - 1, sentence.length).toUpperCase();

  return firstLetter + lastLetter;
}

function reverseLetters(letters) {
  const firstLetter = letters.slice(0, 1);
  const secondLetter = letters.slice(1, 2);

  return secondLetter + firstLetter;
}

function getMiddleLetter(sentence) {
  const letterIndex = sentence.length / 2;
  const middleLetter = sentence.charAt(letterIndex);
  return middleLetter;
}

function encode(sentence) {
  let letters = getSentenceCaps(sentence);
  letters = reverseLetters(letters);
  const middleLetter = getMiddleLetter(sentence);

  return middleLetter + sentence + letters;
}

console.log(encode(sentence));