// Code your solutions in this file


function writeCards(names, event) {
  let tyCards = [];
  for (let i = 0; i < names.length; i++) {
    tyCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return tyCards;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}