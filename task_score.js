let introductionScore = 15;
let gitScore = 15;
let jsScore = 20;
let averageScore = Math.round((introductionScore + gitScore + jsScore) / 3);
let userName = "Max Mustermann";
let reducedUserName =
  userName.slice(0, 1) + "." + userName.slice(3, userName.length);
console.log(
  `Среднее количество баллов: ${averageScore}. И это cтудент "${reducedUserName}"`
);
