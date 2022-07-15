function marcsCakewalk(calorie) {
  const small = [...calorie].sort((a, b) => a - b)
  const big = [...calorie].sort((a, b) => b - a)
  let bigResult = 0;
  let smallResult = 0;

  for (let i = 0; i < calorie.length; i++) {
    bigResult += Math.pow(2, i) * big[i];
    smallResult += Math.pow(2, i) * small[i];
  }
  return bigResult < smallResult ? bigResult : smallResult;
}

console.log(marcsCakewalk([7, 4, 9, 6]))
