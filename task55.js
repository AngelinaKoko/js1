const value1 = 10;
const maxValue = 100;
let value2 = Math.random();
const getMaxValue = (max) => Math.floor(value2 * max);
console.log(`max random number is ${getMaxValue(maxValue)}`);
/*
я решила имплементировать с функцией. Понятно, что и без нее сначало будет сгенерировано случайное дробное число от 0 до 1,
потом будет перемножено с максимумом, потом будет округлено.
*/
