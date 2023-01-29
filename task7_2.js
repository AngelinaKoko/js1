const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let scorePoints = [];
for (let score of players) {
  scorePoints.push(score.scorePoints);
}

let max = Math.max(...scorePoints);

for (let value of players) {
  if (value.scorePoints == max) playerWithMaxScore = value;
}
console.log(
  `Игрок с максимальным количеством очков ${playerWithMaxScore.scorePoints}: ${playerWithMaxScore.name}`
);
