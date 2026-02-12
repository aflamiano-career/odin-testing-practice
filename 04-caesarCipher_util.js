export function getIndexInAlphabet(lowerCasestringArray, alphabetArray) {
  const indices = lowerCasestringArray.reduce((acc, current) => {
    const found = alphabetArray.findIndex((ref) => {
      return ref === current;
    });
    acc.push(found);
    return acc;
  }, []);
  return indices;
}

export function getSpecialCharactersAndTheirIndices(lowerCasestringArray) {
  return lowerCasestringArray.reduce((acc, current, index) => {
    if (current.match(/[^a-zA-Z0-9]/g)) {
      acc[index] = current;
    }
    return acc;
  }, {});
}

export function getUpperCaseIndices(stringArray) {
  const indices = stringArray.reduce((acc, current, index) => {
    if (current.toUpperCase() === current && !current.match(/[^a-zA-Z0-9]/g)) {
      acc.push(index);
    }
    return acc;
  }, []);

  return indices;
}

export function getShiftedAlphabetReference(alphabetArray, key) {
  console.log(key);
  const tempArray = Array.from(alphabetArray);
  if (key > 0) {
    for (let i = 0; i < key; i++) {
      let shifted = tempArray.shift();
      tempArray.push(shifted);
    }
  } else {
    for (let i = 0; i > key; i--) {
      let popped = tempArray.pop();
      tempArray.unshift(popped);
    }
  }
  return tempArray;
}

export function getCipher(indexArray, shiftedArray) {
  const ciphered = indexArray.reduce((acc, current) => {
    if (current === -1) {
      acc.push(current);
    } else {
      acc.push(shiftedArray.at(current));
    }
    return acc;
  }, []);
  return ciphered;
}
