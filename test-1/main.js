// Answer for number 1
function numberOne(arr = []) {
  const result = [...arr];
  let iterationIndex = 1;

  while (iterationIndex < result.length) {
    const number = result[iterationIndex];
    let prevIndex = iterationIndex - 1;
    while (prevIndex >= 0 && result[prevIndex] < number) {
      result[prevIndex + 1] = result[prevIndex];
      prevIndex -= 1;
    }
    result[prevIndex + 1] = number
    iterationIndex += 1;
  }

  return result;
}

module.exports = { numberOne }