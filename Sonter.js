// อยากได้ function ที่รับ input เป็น array in array เช่น [[1,2], [1,3], [2], [4], [3]]
// แล้ว return แบบนี้ [[1,1,2,4,3], [1,3,2,4,3], [2,1,2,4,3], [2,3,2,4,3]]

// [[1,2], [1], [2], [4,1], [3,2]]
// must return
// [[1, 1, 2, 4, 3],
// [1, 1, 2, 4, 2],
// [1, 1, 2, 1, 3],
// [1, 1, 2, 1, 2],
// [2, 1, 2, 4, 3],
// [2, 1, 2, 4, 2],
// [2, 1, 2, 1, 3],
// [2, 1, 2, 1, 2]]

// Test cases
// [[1,2,3,4], [1], [2], [4,1,2,3], [3,2,1]]
// [[1], [1,5,7], [2], [4,2,3], [3,2,1]]

const sonter = (a) => {
  let output = [], length = [], toMatch = [];

  a.map(arr => {
    length = [...length, arr.length - 1];
    toMatch = [...toMatch, 0];
  });

  while (true) {
    output = [...output, a.map((item, i) => item[toMatch[i]])];

    let index = toMatch.length - 1;
    
    for (index; index >= -1; index--) {
      if (index === -1) {
        return output;
      } else if (length[index] === toMatch[index]) {
        toMatch[index] = 0;
      } else {
        break;
      }
    }

    toMatch[index] += 1

    for (j = index + 1; j < toMatch.length; j++) {
      toMatch[j] = 0
    }
  }
};