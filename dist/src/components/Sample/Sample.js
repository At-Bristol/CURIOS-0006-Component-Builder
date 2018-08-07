'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-family: ', ';\n  background-color: ', ';\n  margin: 0;\n  padding: 20px; \n  text-align: center\n'], ['\n  color: ', ';\n  font-family: ', ';\n  background-color: ', ';\n  margin: 0;\n  padding: 20px; \n  text-align: center\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents2.default.h2(_templateObject, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.elColor;
});

var Sample = function Sample() {
  return _react2.default.createElement(
    H1,
    null,
    'Sample Component'
  );
};

exports.default = Sample;

//# sourceMappingURL=Sample.js.map