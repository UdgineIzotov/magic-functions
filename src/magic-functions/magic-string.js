import { upperCase, map, words, lowerCase } from 'lodash';

const magifyWord = word => map(
  lowerCase(word), 
  (char, index) => !(index % 2) ? upperCase(char) : char
)
.join('');

const simpleMagic = str => map(words(str), magifyWord)

'abracadabra'
export const magicStringFunction = (str, doRealMagic) => simpleMagic(str).join(doRealMagic ? ' abracadabra ' : ' ');
