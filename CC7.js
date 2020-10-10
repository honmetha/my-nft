// 1. หา Prime Number
// ให้เขียนโปรแกรมที่หาจำนวนเฉพาะตั้งแต่ 1 ถึง 100

// 2. หา Prime Number 2
// ให้เขียนโปรแกรมที่รับ input เป็นตัวแปรชื่อ n โดยเมื่อรับมาแล้วให้คืนค่าออกมาเป็น List ของจำนวนเฉพาะที่มีค่าไม่มากกว่า n
// input 9
// output [2, 3, 5, 7]

const findPrimeNumbers = (num) => {
  if (num < 2) return [];

  const allNumbers = Array.from({length: num + 1}, (_, i) => i);
  
  for (let i = 2; i < allNumbers.length; i++) {
    if (!allNumbers[i]) continue;
    for (let j = 2; allNumbers[i] * j < allNumbers.length; j++) {
      allNumbers[allNumbers[i] * j] = false;
    }
  }

  return allNumbers.splice(2).filter(Boolean);
};


// 3. หา Prime Number 3
// ให้เขียนโปรแกรมที่รับ input n และแสดง Array ของจำนวนเฉพาะ n ตัวแรก
// input 4
// output [2, 3, 5, 7]

const findPrimeNumbers3 = (n) => {
  if (!n) return [];

  let primeNumbers = [2];

  for (let i = 3; primeNumbers.length < n; i++) {
    let isPrime = true;

    for (let j = 0; j < primeNumbers.length; j++) {
      if (primeNumbers[j] > i / 2) break;
      if (i % primeNumbers[j] === 0) {
        isPrime = false;
        break;
      };
    }

    if (isPrime) primeNumbers.push(i);
    if (primeNumbers.length === n) return primeNumbers;
  }
};


// 4. หา Prime Number 4
// ให้เขียนโปรแกรมที่หาผลบวกจำนวนเฉพาะ n ตัวแรก

const findPrimeNumbers3 = (n) => {
  if (!n) return [];

  let primeNumbers = [2];

  for (let i = 3; primeNumbers.length < n; i++) {
    let isPrime = true;

    for (let j = 0; j < primeNumbers.length; j++) {
      if (primeNumbers[j] > i / 2) break;
      if (i % primeNumbers[j] === 0) {
        isPrime = false;
        break;
      };
    }

    if (isPrime) primeNumbers.push(i);
    if (primeNumbers.length === n) return primeNumbers.reduce((acc, num) => acc += num, 0);
  }
};

// 5. ลำดับ
// ให้เขียนโปรแกรมที่รับค่า n เข้ามาและให้บวกค่าของลำดับต่อไปนี้
// 1 + 2 + 2 + 3 + 3 + 3 + ... + n + ... + n (n ตัว)

const plusNNumber = n => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += (i * i);
  }

  return result;
};


// 6. Prime Number - 101
// ให้เขียนโปรแกรมหาผลบวกลำดับต่อไปนี้
// 1 - 2 - 3 + 4 - 5 + 6 - 7 + 8 + 9 + 10 - 11 + ... (จำนวนที่เป็นจำนวนเฉพาะให้ติดลบ)

const primeNumber101 = (n) => {
  if (!n) return 0;

  const allNumbers = Array.from({length: n + 1}, (_, i) => i * -1);
  
  allNumbers[1] = -allNumbers[1];
  for (let i = 2; i < allNumbers.length; i++) {
    if (allNumbers[i] > 0) continue;

    for (let j = 2; -allNumbers[i] * j < allNumbers.length; j++) {
      allNumbers[-allNumbers[i] * j] = Math.abs(allNumbers[-allNumbers[i] * j]);
    }
  }

  return allNumbers.reduce((acc, num) => acc += num, 0);
};

// 7. ห.ร.ม.
// ให้เขียนโปรแกรมหา ห.ร.ม ของ List ของตัวเลข
// Input: [ 6, 8, 16 ]
// Output: 2


// 8. ค.ร.ม
// ให้เขียนโปรแกรมหา ค.ร.น. ของ List ของตัวเลข
// Input: [ 24, 48, 96 ]
// Output: 96


// 9. n!
// ให้เขียนโปรแกรมหา factorial n ( n! = 1×2×3×4×...×n )

const findFactorialN = (n) => {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};


// 10. 2 Types sort
// ให้เขียน function ที่รับ List ของ ตัวเลข และ รับค่า boolean
// ถ้า boolean มีค่าเป็น true เรียงลำดับตัวเลขจากน้อยไปหามาก
// ถ้า boolean เป็น false เรียงลำดับตัวเลขจากมากไปน้อย

const sortNumbers = (numArr = [], bool) => bool ? numArr.sort((a, b) => a - b) : numArr.sort((a, b) => b - a);


// 11. 2 types sort by codecamp
// ทำเหมือนข้อ 10 แต่ห้ามใช้ฟังก์ชัน sort() และ reverse()
// Test cases
// [5,3,8,5,4,3,7,1]
// []
// [0]
// [12,11,14,15,10,9,13,12,11]
// [12,11,14,15,10,9,13,12,11,7]
// [5,5,5,5,5,5,5]

const sortWithoutSortMethod = (num = [], isTrue) => {
  for (let i = 0; i < num.length - 1; i++) {
    let min = Infinity, minIndex;

    for (let j = i + 1; j < num.length; j++) {
      if (num[i] > num[j] && num[j] < min) {
        min = num[j];
        minIndex = j;
      }
    }

    if (min !== Infinity) {
      num[minIndex] = num[i];
      num[i] = min;
    }
  }

  if (isTrue) return num

  let start = 0;
  let end = num.length - 1

  while (start < end) {
    [num[start], num[end]] = [num[end], num[start]];
    start++;
    end--;
  }

  return num;
}


// 12. พหุคูณ
// ถ้าจำนวนนับที่น้อยกว่า 16 ที่เป็นพหุคูณของ 3 หรือ 5 เท่ากับ 3, 5, 6, 9, 10, 12 และ 15 โดยมีผลรวมเท่ากับ 60 แล้ว (3 + 5 + 6 + 9 + 10 + 12 + 15 = 60)
// จงหาผลรวมของจำนวนนับ ที่เป็นพหุคูณของ 3 หรือ 5 ที่มีค่าน้อยกว่า 1000


// 13. ผลรวมของเลขโดด
// หาผลรวมของเลขที่ใส่เข้ามา
// เช่น 130,120
// จะได้ 1+3+0+1+2+0 = 7

const findTotalNumber = (num1 = "", num2 = "") => {
  const allNumbers = (num1 + "" + num2).split("");
  return allNumbers.reduce((acc, num) => acc += +num, 0);
}


// 14. ผลรวมของเลขโดดของ n!
// ผลรวมของเลขโดดของ n!
// เช่น 6! = 120
// 1 + 2 + 0 = 3


// 15. ผลรวมของเลขโดดหลายจำนวน
// จงหาจำนวนเลขโดดตั้งแต่ 1 ถึง 4,129,980

