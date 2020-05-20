"use strict";


function wordsInCommon(words1, words2) {
  // Replace this with your code
  
  const result = []

  let words1Set = new Set(words1);
  let words2Set = new Set(words2);

  for (let item of words1Set) {
    if (words2Set.has(item)) {
      result.push(item);
    }
  }
  return result;
}


function kidsGame(names) {
  // Replace this with your code
}
