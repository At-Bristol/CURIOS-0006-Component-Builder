'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0 0 0.4em 0;\n\n  width:', '\n\n  @media only screen and (max-width: 1030px){\n    width:', '\n  }\n\n  @media only screen and (max-width: 760px){\n    width:', '\n  }\n'], ['\n  margin: 0 0 0.4em 0;\n\n  width:', '\n\n  @media only screen and (max-width: 1030px){\n    width:', '\n  }\n\n  @media only screen and (max-width: 760px){\n    width:', '\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents2.default.div(_templateObject, function (props) {
  if (props.size === 'small') return '19.5%';
  if (props.size === 'medium') return '33%';
  if (props.size === 'large') return '49%';
  if (props.size === 'full') return '100%';
  return '100%';
}, function (props) {
  if (props.size === 'small') return '33%';
  if (props.size === 'medium') return '49%';
  if (props.size === 'large') return '100%';
  if (props.size === 'full') return '100%';
  return '100%';
}, function (props) {
  if (props.size === 'small') return '49%';
  if (props.size === 'medium') return '100%';
  if (props.size === 'large') return '100%';
  if (props.size === 'full') return '100%';
  return '100%';
});

exports.default = Item;

//# sourceMappingURL=Item.js.map