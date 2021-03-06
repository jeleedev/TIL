// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join()); //apple,banana,orange
  console.log(fruits.join('|')); // apple|banana|orange
}

// Q2. make an array out of a string
{
  const fruits = '๐, ๐ฅ, ๐, ๐';
  console.log(fruits.split(','));
  console.log(fruits.split(',', 2)); // ๋ฆฌํด ๋ฐ์ ๋ฐฐ์ด ์
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse()); //๋ณธ ๋ฐฐ์ด๋ ์ ๋ ฌ๋จ.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(2, 5)); // ๋ฐฐ์ด์์ ์ํ๋ ๋ถ๋ถ๋ง return
  //array.splice(0, 2); // ๋ณธ ๋ฐฐ์ด์์ 1,2๋ฅผ ์ญ์ 
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.log(students.find((student) => student.score === 90));
}

// Q6. make an array of enrolled students
{
  console.log(students.filter((student) => student.enrolled === true));
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map()
  //:๋ฐฐ์ด์์ ๋ค์ด์๋ ๋ชจ๋  ์์๋ค์ ์ ๋ฌํด์ค callbackํจ์๋ก ํธ์ถํ๋ฉด์ callbackํจ์์์ return๋์ด์ง ๊ฐ๋ค๋ก ๋์ฒดํจ.
  console.log(students.map((student) => student.score));
}

// Q8. check if there is a student with the score lower than 50
{
  // some()
  // :๋ฐฐ์ด์ ์์์ค์์ callbackํจ์๊ฐ return์ด turn์ธ๊ฒ ์๋์ง ์๋์ง ture/false๋ก ๋ฐํ
  const result = students.some((student) => student.score < 50);

  // every()
  // :๋ฐฐ์ด์ ๋ค์ด์๋ ๋ชจ๋  ์์๋ค์ด ์กฐ๊ฑด์ ์ถฉ์กฑํ๋ฉด true, ์๋๋ฉด false
  // ๋ชจ๋  ๋ฐฐ์ด์ ์กฐ๊ฑด์ด ๋ง์กฑ๋์ผํ  ๋ ์ธ ๊ฒ
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result);
}

// Q9. compute students' average score
{
  let temp = 0;
  students.forEach((student) => (temp += student.score));
  console.log(temp / students.length);

  // answer
  const result = students.reduce(function (prev, curr) {
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // ํจ์ํ ํ๋ก๊ทธ๋๋ฐ
  const result = students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  console.log(
    students
      .map((student) => student.score)
      .sort((a, b) => b - a) // desc
      .sort((a, b) => a - b) // asc
      .join()
  );
}
