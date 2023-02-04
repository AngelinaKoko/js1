const limit = 1000;
const assertValue1 = 40590;
const assertValue2 = 148200;
const assertValue3 = 25709;

countSum = (array) => {
  let sum = 0;
  for (let value of array) {
    if (value > limit) sum += value;
  }
  return sum;
};

testSum = (sum, aValue) => {
  return sum == aValue
    ? console.log(
        `Значение суммы ${sum} совпадает с тестовым значением ${aValue}`
      )
    : console.log(
        `Значение суммы ${sum} не совпадает с тестовым значением ${aValue}`
      );
};

let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

expencesExamples.forEach((value, index) => {
  let s = countSum(value.yearlyExpences);
  console.log(`сумма по массиву ${index + 1}: ${s}`);
  testSum(s, assertValue1);
  testSum(s, assertValue2);
  testSum(s, assertValue3);
});
