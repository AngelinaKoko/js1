const limit = 1000;
const assertValue = 40590;

countSum = (array) => {
  let sum = 0;
  for (let value of array) {
    if (value > limit) sum += value;
  }
  return sum;
};

testSum = (sum, aValue) => {
  return sum == aValue
    ? console.log("Значение суммы совпадает с отчетным")
    : console.log("Значение суммы не совпадает с отчетным");
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

expencesExamples.forEach((value) => {
  let s = countSum(value.yearlyExpences);
  testSum(s, assertValue);
});
