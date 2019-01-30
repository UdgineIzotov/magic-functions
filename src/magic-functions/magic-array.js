import { map, reverse, compact } from 'lodash';

export const magicArrayFunction = (array, doRealMagic) => {
  const magicArray = compact(reverse(array))

  return doRealMagic ? 
    map(magicArray, item => ({ 'it\'s a kinda magic': item})) : 
    magicArray;
};
