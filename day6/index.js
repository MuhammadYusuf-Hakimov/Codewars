// function points(games) {
//   let total = 0;

//   for (let game of games) {
//     let [x, y] = game.split(":").map(Number);

//     if (x > y) {
//       total += 3;
//     } else if (x === y) {
//       total += 1;
//     }
//   }

//   return total;
// }

// function multiTable(number) {
//   return Array.from({length: 10}, (_, i) =>
//     `${i + 1} * ${number} = ${(i + 1) * number}`
//   ).join('\n');
// }