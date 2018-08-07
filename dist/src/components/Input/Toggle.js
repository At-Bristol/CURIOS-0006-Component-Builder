'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: ', ';\n  border-radius: ', ';\n  background-color: ', ';\n  transition: .4s;\n'], ['\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: ', ';\n  border-radius: ', ';\n  background-color: ', ';\n  transition: .4s;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 50%;\n  border-radius: 50%;\n  background-color: ', ';\n  transition: .4s;\n  transform: translateX(', ');\n'], ['\n  height: 100%;\n  width: 50%;\n  border-radius: 50%;\n  background-color: ', ';\n  transition: .4s;\n  transform: translateX(', ');\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n'], ['\n  width: ', ';\n  height: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getSizing = function getSizing(size, scale) {
  var oScale = scale;
  var oSize = void 0;

  if (!oScale) oScale = 1;
  if (size === 'xxs') oSize = 1.0;
  if (size === 'xs') oSize = 1.5;
  if (size === 's') oSize = 2;
  if (size === 'ms') oSize = 2.25;
  if (size === 'm') oSize = 2.5;
  if (size === 'ml') oSize = 2.75;
  if (size === 'l') oSize = 3;
  if (size === 'xl') oSize = 4;
  if (size === 'xxl') oSize = 5;

  return oSize * oScale + 'em';
};

var StyledSlider = _styledComponents2.default.div(_templateObject, function (props) {
  return getSizing(props.size, 0.1);
}, function (props) {
  return getSizing(props.size, 0.6);
}, function (props) {
  return props.isOn ? props.theme.color.brandColor : props.theme.color.greyColorTertiary;
});
var StyledControl = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.color.inverseTextColor;
}, function (props) {
  return props.isOn ? '100%' : '0%';
});

var StyledToggle = _styledComponents2.default.div(_templateObject3, function (props) {
  return getSizing(props.size, 2);
}, function (props) {
  return getSizing(props.size, 1.1);
});

var Toggle = function Toggle(props) {
  var isOn = props.isOn,
      size = props.size;


  return _react2.default.createElement(
    StyledToggle,
    { size: size },
    _react2.default.createElement(
      StyledSlider,
      { size: size, isOn: isOn },
      _react2.default.createElement(StyledControl, { size: size, isOn: isOn })
    )
  );
};

Toggle.defaultProps = {
  isOn: true,
  size: 's'
};

Toggle.propTypes = {
  isOn: _propTypes2.default.bool,
  size: _propTypes2.default.string
};

exports.default = Toggle;

//# sourceMappingURL=Toggle.js.map