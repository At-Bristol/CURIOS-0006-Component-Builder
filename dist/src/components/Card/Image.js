'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-image: ', ';\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-top: 100%;\n  background-position: ', '; \n'], ['\n  background-image: ', ';\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-top: 100%;\n  background-position: ', '; \n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = _styledComponents2.default.div(_templateObject, function (props) {
  return 'url(' + props.image + ')';
}, function (props) {
  return props.imagePos;
});

exports.default = Image;

//# sourceMappingURL=Image.js.map