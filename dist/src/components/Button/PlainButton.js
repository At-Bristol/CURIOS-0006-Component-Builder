'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 1.0em;\n  text-align: center;\n  font-family: ', ';\n  font-weight: ', ';\n  color: ', ';\n  cursor: ', ';\n'], ['\n  font-size: 1.0em;\n  text-align: center;\n  font-family: ', ';\n  font-weight: ', ';\n  color: ', ';\n  cursor: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PlainButton = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.font.family.bold;
}, function (props) {
  return props.theme.font.weight.bold;
}, function (props) {
  return props.theme.color.textColor;
}, function (props) {
  return props.disabled ? null : 'pointer';
});

exports.default = PlainButton;

//# sourceMappingURL=PlainButton.js.map