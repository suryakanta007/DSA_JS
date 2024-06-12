//todo remove all space and tabs from a given String.

//*itarative approch:-
const removeTAS = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === " " || char === "\t") {
      continue;
    }
    result += char;
  }
  return result;
};
// console.log(removeTAS("He     llo"));

//* recursive approch:-
const recursiveRemoveTAS = (string) => {
  if (string.length == 0) {
    return "";
  }
  let firstChar = string[0];
  remaingString = string.slice(1);
  if (firstChar == " " || firstChar == "\t") {
    return recursiveRemoveTAS(remaingString);
  }
  return firstChar + recursiveRemoveTAS(remaingString);
};
console.log(recursiveRemoveTAS("He     llo"));
