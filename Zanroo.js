// Back-End Test 01

// - Please write one function to receive 2 arguments. In the example Input1 is array of words
// and Input2 is a conversation. When the words of input1 has founded in Input2. We like you to
// find the output result by inserting HTML in the tags highlighted as 7 examples below.

// - Unit test is required.

// Example 1
// Input1: ["simply"]
// Input2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// output: "Lorem Ipsum is <strong>simply</strong> dummy text of the printing and typesetting industry"

// Example 2
// Input1: ["Ipsum", "printing"]
// Input2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// Output: "Lorem <strong>Ipsum</strong> is simply dummy text of the <strong>printing</strong> and typesetting industry"

// Example 3
// Input1: ["simply dummy text", "text of the printing"]
// Input2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// Output: "Lorem Ipsum is <strong>simply dummy <strong>text</strong> of the printing</strong> and typesetting industry"

// Example 4
// Input1: ["dummy text of the printing", "text of the"]
// Input2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// Output: "Lorem Ipsum is simply <strong>dummy <strong>text of the</strong> printing</strong> and typesetting industry"

// Example 5
// Input1: ["dummy text of the printing", "ting and typesetting"]
// Input2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// Output: "Lorem Ipsum is simply <strong>dummy text of the prin<strong>ting</strong> and typesetting</strong> industry"

// Example 6
// Input1: ["dummy", "taxi"]
// Input2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// Output: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" // not matched

// Example 7
// Input1: ["simpy", "dummu"]
// Input2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// Output: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" // not matched


/***********************************************************************
 *  Solution
 **********************************************************************/


// Passed 7 original test cases
const insertHTMLTags = (input1, input2) => {
  let openTagIndices = [];
  let closeTagIndices = [];

  for (let i = 0; i < input1.length; i++) {
    input2 = input2.split(input1[i]);

    if (input2.length === 1) return input2.join(input1[i]);
    if (input2.length === 2) {
      openTagIndices.push(input2[0].length);
      closeTagIndices.push(input2[0].length + input1[i].length - 1);
    }

    input2 = input2.join(input1[i]);
  }

  input2 = input2.split("");
  
  for (let k = 0; k < openTagIndices.length; k++) {
    input2[openTagIndices[k]] = "<strong>" + input2[openTagIndices[k]];
    input2[closeTagIndices[k]] += "</strong>";
  }

  return input2.join("");
}


// Passed originals and my test cases
const insertHTMLTags2 = (input1, input2) => {
  let openTagIndices = [];
  let closeTagIndices = [];

  for (let i = 0; i < input1.length; i++) {
    input2 = input2.split(input1[i]);

    if (input2.length === 1) return input2.join(input1[i]);
    if (input2.length >= 2) {
      let totalLength = 0;
      for (let j = 0; j < input2.length - 1; j++) {
        openTagIndices.push(totalLength + input2[j].length);
        closeTagIndices.push(totalLength + input2[j].length + input1[i].length - 1);
        totalLength += input2[j].length + input1[i].length;
      }
    }

    input2 = input2.join(input1[i]);
  }

  input2 = input2.split("");
  
  for (let k = 0; k < openTagIndices.length; k++) {
    input2[openTagIndices[k]] = "<strong>" + input2[openTagIndices[k]];
    input2[closeTagIndices[k]] += "</strong>";
  }

  return input2.join("");
}

// Original test cases
// ["simply"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["Ipsum", "printing"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["simply dummy text", "text of the printing"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["dummy text of the printing", "text of the"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["dummy text of the printing", "ting and typesetting"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["dummy", "taxi"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["simpy", "dummu"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"

// My test cases
// [], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["Lorem", "Ipsum", "printing"], ""
// ["Lorem", "Ipsum", "printing"], "abc"
// ["m"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["in"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["m i", "y t", "g i"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// [" "], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["i", "s"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// ["Lorem", "Hello"], "Lorem Ipsum Lorem Lorem IpsumLorem Ipsum Lorem Ipsum"
// ["xt", "x"], "Textxxxxxxxt"

module.exports = insertHTMLTags;