"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.magicArrayFunction = void 0;

var _lodash = require("lodash");

var magicArrayFunction = function magicArrayFunction(array, doRealMagic) {
  var magicArray = (0, _lodash.compact)((0, _lodash.reverse)(array));
  return doRealMagic ? (0, _lodash.map)(magicArray, function (item) {
    return {
      'it\'s a kinda magic': item
    };
  }) : magicArray;
};

exports.magicArrayFunction = magicArrayFunction;