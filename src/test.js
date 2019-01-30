import assert from 'assert';
import { magicArrayFunction, magicStringFunction} from './index';
import { isEqual } from 'lodash'

assert(isEqual(magicArrayFunction([1, 2, 3]), [3, 2, 1]), 'should do simple array magic');
assert(  
  magicArrayFunction([1, 2, 3], true).every( item => item['it\'s a kinda magic']) , 
  'should do real array magic'
);
assert(isEqual(magicArrayFunction([1, 2, 3, 4, 5]).length, 5), 'should have the same length');

assert(
  isEqual(magicStringFunction('Show me the rabbit'), 'ShOw Me ThE RaBbIt'),
  'should do simple string magic'
);

assert(
  isEqual(magicStringFunction('Blow all around', true), 'BlOw abracadabra AlL abracadabra ArOuNd'),
  'should do real string magic'
);

assert(
  !(/\.|\?|\!|\,/.test(magicStringFunction('Blow. All! Around?'))),
  'punctuation marks should dissapear'
)

console.log('Tests finished.');
