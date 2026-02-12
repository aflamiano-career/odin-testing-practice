import { caesarCipher } from "./04-caesarCipher.js";

test("Cipher WHATAMIDOING by 3", () => {
  expect(caesarCipher("WHATAMIDOING", 3)).toBe("ZKDWDPLGRLQJ");
});

test("Cipher THISISNOTDIFFICULT by 3", () => {
  expect(caesarCipher("THISISNOTDIFFICULT", 3)).toBe("WKLVLVQRWGLIILFXOW");
});

test("Cipher WHATAMIDOING by 5", () => {
  expect(caesarCipher("WHATAMIDOING", 5)).toBe("BMFYFRNITNSL");
});

test("Cipher WHATAMIDOING by -5", () => {
  expect(caesarCipher("WHATAMIDOING", -5)).toBe("RCVOVHDYJDIB");
});

test("Cipher IhaveDifferentCaseS by 4", () => {
  expect(caesarCipher("IhaveDifferentCaseS", 4)).toBe("MleziHmjjivirxGewiW");
});

test("Cipher IhaveDifferentCaseS by -5", () => {
  expect(caesarCipher("IhaveDifferentCaseS", -5)).toBe("DcvqzYdaazmzioXvnzN");
});

test("Cipher I have speci@l characters! by 3", () => {
  expect(caesarCipher("I have speci@l characters!", 3)).toBe(
    "L kdyh vshfl@o fkdudfwhuv!",
  );
});

test("Cipher I have speci@l characters! by -5", () => {
  expect(caesarCipher("I have speci@l characters!", -5)).toBe(
    "D cvqz nkzxd@g xcvmvxozmn!",
  );
});
