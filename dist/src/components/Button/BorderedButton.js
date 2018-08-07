'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  font-family: ', ';\n  font-size: 1.0em;\n  color: ', '; \n  margin: ', ';\n  padding: 0.5em 1.0em;\n  border-style: solid;\n  border-color: ', ';\n  border-width: 0.15em;\n  border-radius: ', ';\n  cursor: pointer;\n  transition: transform 50ms;\n  width:', ';\n  &:active {\n    transform: translate(0%, 3%)\n  }\n'], ['\n  background-color: ', ';\n  font-family: ', ';\n  font-size: 1.0em;\n  color: ', '; \n  margin: ', ';\n  padding: 0.5em 1.0em;\n  border-style: solid;\n  border-color: ', ';\n  border-width: 0.15em;\n  border-radius: ', ';\n  cursor: pointer;\n  transition: transform 50ms;\n  width:', ';\n  &:active {\n    transform: translate(0%, 3%)\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getColorFromStatus = _utils.color.getColorFromStatus;


var BorderedButton = _styledComponents2.default.button(_templateObject, function (props) {
  if (props.secondary) return 'transparent';
  if (props.status) return getColorFromStatus(props.status, props.theme.color);
  return props.theme.color.accentColorPrimary;
}, function (props) {
  return props.theme.font.family.regular;
}, function (props) {
  if (props.mono && props.inverse) return props.theme.color.inverseTextColor;
  if (props.mono) return props.theme.color.textColor;
  if (props.status && props.secondary) return getColorFromStatus(props.status, props.theme.color);
  if (props.secondary) return props.theme.color.accentColorPrimary;
  return props.theme.color.inverseTextColor;
}, function (props) {
  return props.fill ? '0% 0.5%' : null;
}, function (props) {
  if (props.mono && props.inverse) return props.theme.color.inverseTextColor;
  if (props.mono) return props.theme.color.textColor;
  if (props.status) return getColorFromStatus(props.status, props.theme.color);
  return props.theme.color.accentColorPrimary;
}, function (props) {
  return props.theme.radius.topRight;
}, function (props) {
  return props.fill ? '99%' : null;
});

exports.default = BorderedButton;

//# sourceMappingURL=BorderedButton.js.map