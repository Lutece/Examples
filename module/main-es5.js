'use strict';

var _sub = require('./sub1-es5.js');

var _sub2 = _interopRequireDefault(_sub);

var _sub3 = require('./sub2-es5.js');

var _sub4 = _interopRequireDefault(_sub3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _sub2.default)(2));
console.log((0, _sub4.default)(3, 5));
