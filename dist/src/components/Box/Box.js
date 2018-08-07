'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['\n  height: ', ';\n  width: ', ';\n  box-sizing: ', ';\n  display: flex;\n  position: ', ';\n  overflow-y: scroll;\n  padding: ', ';\n  margin: ', ';\n  flex-direction: ', ';\n  flex-basis: ', ';\n  flex-wrap: ', ';\n  align-items: ', ';\n  justify-content: ', ';\n  align-content: ', ';\n'], ['\n  height: ', ';\n  width: ', ';\n  box-sizing: ', ';\n  display: flex;\n  position: ', ';\n  overflow-y: scroll;\n  padding: ', ';\n  margin: ', ';\n  flex-direction: ', ';\n  flex-basis: ', ';\n  flex-wrap: ', ';\n  align-items: ', ';\n  justify-content: ', ';\n  align-content: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getSpacing = _utils.spacing.getSpacing,
    getSpacings = _utils.spacing.getSpacings;


var StyledBox = _styledComponents2.default.div(_templateObject, function (props) {
  return props.isFullscreen ? '100vh' : '100%';
}, function (props) {
  return props.fill ? '100%' : null;
}, function (props) {
  return props.fill ? 'border-box' : null;
}, function (props) {
  return props.position;
}, function (props) {
  if (_typeof(props.padding) === 'object') return getSpacings(props.padding, props);
  return getSpacing(props.padding, props) || 0;
}, function (props) {
  if (_typeof(props.margin) === 'object') return getSpacings(props.margin, props);
  return getSpacing(props.margin, props);
}, function (props) {
  if (!props.reverse && !props.column) return 'row';
  if (props.reverse && !props.column) return 'rowReverse';
  if (!props.reverse && props.column) return 'column';
  if (props.reverse && props.column) return 'columnReverse';
  return 'row';
}, function (props) {
  if (props.basis === 'content') return 'content';
  if (props.basis) return props.basis;
  return 'auto';
}, function (props) {
  return props.wrap ? 'wrap' : 'nowrap';
}, function (props) {
  if (props.alignItems === 'start') return 'flex-start';
  if (props.alignItems === 'end') return 'flex-end';
  if (props.alignItems === 'center') return 'center';
  if (props.alignItems === 'baseline') return 'baseline';
  if (props.alignItems === 'stretch') return 'stretch';
  return 'flex-start';
}, function (props) {
  if (props.justify === 'start') return 'flex-start';
  if (props.justify === 'end') return 'flex-end';
  if (props.justify === 'center') return 'center';
  if (props.justify === 'between') return 'space-between';
  if (props.justify === 'around') return 'space-around';
  if (props.justify === 'evenly') return 'space-evenly';
  return 'flex-start';
}, function (props) {
  if (props.alignContent === 'start') return 'flex-start';
  if (props.alignContent === 'end') return 'flex-end';
  if (props.alignContent === 'center') return 'center';
  if (props.alignContent === 'between') return 'space-between';
  if (props.alignContent === 'around') return 'space-around';
  if (props.alignContent === 'stretch') return 'stretch';
  return 'stretch';
});

var Box = function Box(props) {
  var children = props.children,
      style = props.style;


  return _react2.default.createElement(
    StyledBox,
    Object.assign({}, props, { style: style }),
    _react.Children.map(children, function (e) {
      return e;
    })
  );
};

Box.propTypes = {
  justify: _propTypes2.default.oneOf(['start', 'end', 'center', 'around', 'between', 'evenly']),
  size: _propTypes2.default.oneOf(['full', 'large', 'medium', 'small']),
  alignItems: _propTypes2.default.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignContent: _propTypes2.default.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  wrap: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  align: _propTypes2.default.oneOf(['center', 'start', 'end']),
  style: _propTypes2.default.object,
  isFullscreen: _propTypes2.default.bool,
  fill: _propTypes2.default.bool
};

Box.defaultProps = {
  size: 'medium',
  style: {},
  isFullscreen: false,
  padding: 0,
  wrap: false,
  fill: true
};

exports.default = Box;

//# sourceMappingURL=Box.js.map