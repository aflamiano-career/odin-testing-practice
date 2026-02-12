export function reverseString(word) {
  if (!word) {
    return "";
  }
  return word.split("").reverse().join("");
}

// reverseString("amazing");
