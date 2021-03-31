let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
console.log(secretMessage.length);
//2 array method to remove the last string of the array secretMessage
secretMessage.pop();
console.log(secretMessage.length);

//3 array method to add the words to and Program as separate strings to the end of the secretMessage array
secretMessage.push("to", "Program");
//console.log(secretMessage);
//4 array method to add the words to and Program as separate strings to the end of the secretMessage array
const indOf = secretMessage.indexOf("easily");
secretMessage[indOf] = "right";
//console.log(secretMessage);
// 5 array method to remove the first string of the array.
secretMessage.shift();
//console.log(secretMessage);
//6 array method to add the string Programming to the beginning of the arraysecretMessage.shift();
secretMessage.unshift("Programming");
//console.log(secretMessage);
// 7 an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
const indOf2 = secretMessage.indexOf("get");
secretMessage.splice(indOf2, 5, "know");
console.log(secretMessage);
// 8 one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(" "));
// 9 What is the secret message?   Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program
