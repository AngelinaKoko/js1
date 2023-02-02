const yearlyExpences = [
  2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
];

console.log(`Месяцы, в которых было расстрачено 1000 или больше`);

yearlyExpences.forEach((value, index) => {
  if (value <= 1000) {
    date = new Date();
    date.setMonth(index);

    console.log(date.toLocaleString("ru", { month: "long" }));
  }
});
