let sentence = "Hello smiley face!"

function addSmileyFace(sentence) {
  let words = sentence.split(" ");
  // console.log(words)
  for (const i in words) {
    words[i] = `${words[i]} 😃 `
  }
  return words.join(' ');
}

console.log(addSmileyFace(sentence));