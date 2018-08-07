'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: ', ';\n  border-radius: ', ';\n  background-color: ', ';\n  transition: .4s;\n'], ['\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: ', ';\n  border-radius: ', ';\n  background-color: ', ';\n  transition: .4s;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  height: 100%;\n  width: ', ';\n  border-radius: 50%;\n  background-color: ', ';\n  transition: .4s;\n  float: right;\n'], ['\n  cursor: pointer;\n  height: 100%;\n  width: ', ';\n  border-radius: 50%;\n  background-color: ', ';\n  transition: .4s;\n  float: right;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: calc(\n    ', ' \n    + ', '  \n  ); \n  height: 100%;\n  max-width: 100%;\n'], ['\n  width: calc(\n    ', ' \n    + ', '  \n  ); \n  height: 100%;\n  max-width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 100%;\n  background-color: ', ';\n  height: ', ';\n  border-radius: ', ';\n'], ['\n  width: 100%;\n  background-color: ', ';\n  height: ', ';\n  border-radius: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-align: center;\n  margin-left: calc(\n    ', ' \n    + ', '  \n  );\n'], ['\n  text-align: center;\n  margin-left: calc(\n    ', ' \n    + ', '  \n  );\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

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

var StyledCompleteRail = _styledComponents2.default.div(_templateObject, function (props) {
  return getSizing(props.size, 0.1);
}, function (props) {
  return getSizing(props.size, 0.6);
}, function (props) {
  return props.theme.color.brandColor;
});
var StyledControl = _styledComponents2.default.div(_templateObject2, function (props) {
  return getSizing(props.size, 0.9);
}, function (props) {
  return props.theme.color.greyColorPrimary;
});

var StyledSlider = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.progress + '%';
}, function (props) {
  return '' + getSizing(props.size, 1.1 * (1 - props.progress / 100));
});

var StyledRail = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.color.greyColorQuaternary;
}, function (props) {
  return getSizing(props.size, 1.1);
}, function (props) {
  return getSizing(props.size, 0.6);
});

var Indicator = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.progress + '%';
}, function (props) {
  return '' + getSizing(props.size, 0.4 * (1 - props.progress / 1000));
});

var Label = function Label(props) {
  var label = props.label;


  return _react2.default.createElement(
    _Box2.default,
    { alignItem: 'center', fill: false },
    label,
    _react2.default.createElement(_Box2.default, { padding: { horizontal: 'xs' }, fill: false })
  );
};

var SliderBody = function SliderBody(props) {
  var size = props.size,
      progress = props.progress;


  return _react2.default.createElement(
    StyledRail,
    { size: size },
    _react2.default.createElement(
      StyledSlider,
      { size: size, progress: progress },
      _react2.default.createElement(
        StyledCompleteRail,
        { size: size },
        _react2.default.createElement(StyledControl, { size: size })
      )
    )
  );
};

var Slider = function Slider(props) {
  var label = props.label,
      progress = props.progress,
      size = props.size;


  return _react2.default.createElement(
    _Box2.default,
    { alignItems: 'center' },
    label ? _react2.default.createElement(Label, { label: label }) : null,
    _react2.default.createElement(SliderBody, props)
  );
};

Slider.defaultProps = {
  progress: 50,
  size: 's',
  label: false
};

Slider.propTypes = {
  label: _propTypes2.default.string,
  progress: _propTypes2.default.number
};

exports.default = Slider;

//# sourceMappingURL=Slider.js.map