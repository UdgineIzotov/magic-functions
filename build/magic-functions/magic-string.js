"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.magicStringFunction = void 0;

var _lodash = require("lodash");

var magifyWord = function magifyWord(word) {
  return (0, _lodash.map)((0, _lodash.lowerCase)(word), function (char, index) {
    return !(index % 2) ? (0, _lodash.upperCase)(char) : char;
  }).join('');
};

var simpleMagic = function simpleMagic(str) {
  return (0, _lodash.map)((0, _lodash.words)(str), magifyWord);
};

'abracadabra';

var magicStringFunction = function magicStringFunction(str, doRealMagic) {
  return simpleMagic(str).join(doRealMagic ? ' abracadabra ' : ' ');
};

exports.magicStringFunction = magicStringFunction;