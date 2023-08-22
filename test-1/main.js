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

// Answer for number 2
function numberTwo(arr = [], length = 1) {
  let result = 0;
  if (length <= 0 || length > arr.length) return result;

  for (let i = 0; i < arr.length - 1; i++) {
    let sum = 0;
    for (let x = i; x < i + length; x++) {
      sum += arr[x];
    }
    if (sum > result) result = sum
  }

  return result;
}

module.exports = { numberOne, numberTwo }