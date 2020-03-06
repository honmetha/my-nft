// We call a password secure if it contains no space characters and consists of
// at least six characters, including at least one digit, one lowercase letter,
// one uppercase letter and one special character. For the purpose of this task,
// we will consider just the following characters to be special :!@#$%^&*()_

// write a function:
// function solution(S);

// that, given a string S of length N, returns true if S is secure (as described
// above), and returns false if it is not secure.visible

// Examples:
// 1. Given string S = "FooBar123!", the function should return true.
// 2. Given string S = "foobar123!", the function should return false, because
// there is no uppercase letter.
// 3. Given string S = "FooBar!", the function should return false, because
// there is no digit.
// 4. Given string S = "   foobar123!", the function should return false, because
// there are spaces in front of it.
// 5. Given string S = "FooBar123", the function should return false, because
// there is no special character.

// Assume that:
//    - the length of S is within the range [0...100];
//    - S consists only of English lowercase or uppercase letters, digits,
//      spaces and special characters as indicated above;
//    - spaces won't appear as the first or last character of any password.

// In your solution, focus on correctness. The performance of your solution
// will not be the focus of assessment.


/***********************************************************************
 *  Answer
 *********************************************************************j*/


function checkPassword(S) {
  let specialCharacter = [":", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];
  for (arrItem of specialCharacter) {
    for (SItem of S) {
      if (arrItem === SItem &&
        S.length >= 6 &&
        !(/\s/.test(S)) &&
        /[a-z]/.test(S) &&
        /[A-Z]/.test(S) &&
        /\d/.test(S))
      {
        return true;
      }
    }
  }
  return false;
}