// Given a string that contains only the characters (), find the position of the first invalid character (parentheses not closed). The first character position is 0.

// Examples:

// ()))) => 2, because the second ) does not have a corresponding (

// (() => 3, because the string is missing a final ) at char 3

// Find the first invalid character position in the following string.:

// (((())()))(())()((((()(()))()))))(()(())(()(())(())()))

const findInvalid = (input) => {
  let countOpen = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") countOpen++;
    else countOpen--;
    if (countOpen < 0) return i;
  };
  if (countOpen !== 0) return input.length;
};