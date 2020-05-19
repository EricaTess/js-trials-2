"use strict";


// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  let wordCount = {}

  let word = phrase.split(' ')

  for (let el of word) {
    if (wordCount[el] === undefined) {
      wordCount[el] = 1;
    } else {
      wordCount[el] += 1;
    }
  }

  return wordCount;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
