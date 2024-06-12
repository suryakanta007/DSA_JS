//iterative approch:-
const reverseString = (string) => {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse + string[i];
  }
  return reverse;
};

// console.log(reverseString("Hello"));

const recursiveReverse = (string) => {
  if (string.length === 0) {
    return string;
  }
  let reverseValue = recursiveReverse(string.substring(0, string.length - 1));
  let lastValue = string[string.length - 1];
  string = lastValue + reverseValue;
  return string;
};
console.log(recursiveReverse("hello"));