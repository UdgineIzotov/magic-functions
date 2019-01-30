"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = require("./index");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _assert.default)((0, _lodash.isEqual)((0, _index.magicArrayFunction)([1, 2, 3]), [3, 2, 1]), 'should do simple array magic');
(0, _assert.default)((0, _index.magicArrayFunction)([1, 2, 3], true).every(function (item) {
  return item['it\'s a kinda magic'];
}), 'should do real array magic');
(0, _assert.default)((0, _lodash.isEqual)((0, _index.magicArrayFunction)([1, 2, 3, 4, 5]).length, 5), 'should have the same length');
(0, _assert.default)((0, _lodash.isEqual)((0, _index.magicStringFunction)('Show me the rabbit'), 'ShOw Me ThE RaBbIt'), 'should do simple string magic');
(0, _assert.default)((0, _lodash.isEqual)((0, _index.magicStringFunction)('Blow all around', true), 'BlOw abracadabra AlL abracadabra ArOuNd'), 'should do real string magic');
console.log(/\.|\?|\!|\,/.test((0, _index.magicStringFunction)('Blow. All! Around?')));
(0, _assert.default)(!/\.|\?|\!|\,/.test((0, _index.magicStringFunction)('Blow. All! Around?')), 'punctuation marks should dissapear');
console.log('Tests finished.');