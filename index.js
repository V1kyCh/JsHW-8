const arrayTestText = ['Hello', 'Hi', 'Hey', 'Greeting']
let string = '';
// for (let i = 0; i < arrayTestText.length; i ++) {
//     string += arrayTestText[i]
//     if (i < arrayTestText.length - 1) {
//         string += ', ' 
//     }
// }
string = arrayTestText.join(', ')
console.log(string);

const cards = ['Карточка - 1', 'Карточка - 2', 'Карточка - 3', 'Карточка - 4', 'Карточка - 5']
const cardToRemove = cards.indexOf('Карточка - 3');
const cardToUpdate = cards.indexOf('Карточка - 4') - 1;
const cardToInspect = 'Карточка - 6';

const updatedCard = 'Карточка - оновлена';

cards.splice(cardToRemove, 1)
cards.splice(cards.length, 0, cardToInspect)
cards.splice(cardToUpdate, 1, updatedCard)

console.log(cards);