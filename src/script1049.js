// Beecrowd 1049 - Animal

const input = require('./scriptMain');
const linesWord = input.split('\n');

const animalType = (linesWord) => {
  const [word1, word2, word3] = linesWord;
  let result;

  if (word1 === 'vertebrado') {
    if (word2 === 'ave') {
      if (word3 === 'carnivoro') {
        result = 'aguia';
      } else {
        if (word3 === 'onivoro') {
          result = 'pomba';
        }
      }
    } else {
      if (word2 === 'mamifero') {
        if (word3 === 'onivoro') {
          result = 'homem';
        } else {
          if (word3 === 'herbivoro') {
            result = 'vaca';
          }
        }
      }
    }
  }

  if (word1 === 'invertebrado') {
    if (word2 === 'inseto') {
      if (word3 === 'hematofago') {
       result = 'pulga';
      } else {
        if (word3 === 'herbivoro') {
          result = 'lagarta';
        }
      }
    } else {
      if (word2 === 'anelideo') {
        if (word3 === 'hematofago') {
          result = 'sanguessuga';
        } else {
          if (word3 === 'onivoro') {
            result = 'minhoca';
          }
        }
      }
    }
  }

  return result;
};

console.log(animalType(linesWord));
