import {
  getIndexInAlphabet,
  getShiftedAlphabetReference,
  getSpecialCharactersAndTheirIndices,
  getUpperCaseIndices,
  getCipher,
} from "./04-caesarCipher_util.js";

export function caesarCipher(string, key) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

  const stringIndices = getIndexInAlphabet(
    string.toLowerCase().split(""),
    ALPHABET,
  );
  //console.log(stringIndices);

  const specialCharacters = getSpecialCharactersAndTheirIndices(
    string.split(""),
  );
  //console.log(specialCharacters);

  const upperCaseIndices = getUpperCaseIndices(string.split(""));
  //console.log(upperCaseIndices);

  const shiftedAlphabetReference = getShiftedAlphabetReference(ALPHABET, key);
  //console.log(shiftedAlphabetReference);

  const cipheredArray = getCipher(stringIndices, shiftedAlphabetReference);
  //console.log(cipheredArray);

  function setSpecialCharacters(cipheredArray, specialCharacters) {
    for (const [key, value] of Object.entries(specialCharacters)) {
      cipheredArray[key] = value;
    }
    return cipheredArray;
  }
  const cipheredWithSpecialCharacters = setSpecialCharacters(
    cipheredArray,
    specialCharacters,
  );
  //console.log(cipheredWithSpecialCharacters);

  function setUpperCase(cipheredWithSpecialCharacters, upperCaseIndices) {
    upperCaseIndices.forEach((i) => {
      cipheredWithSpecialCharacters[i] =
        cipheredWithSpecialCharacters[i].toUpperCase();
    });
    return cipheredWithSpecialCharacters;
  }
  const completeCipher = setUpperCase(
    cipheredWithSpecialCharacters,
    upperCaseIndices,
  );
  //console.log(completeCipher);

  return completeCipher.join("");
}
// caesarCipher("ABC", -3);
