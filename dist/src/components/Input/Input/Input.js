'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative; \n  margin-top: ', ';;\n'], ['\n  position: relative; \n  margin-top: ', ';;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position:relative;\n  box-sizing:border-box; \n  display:block; \n  width:100%;\n\n  &:before, \n  &:after {\n    content:\'\';\n    height:', '; \n    width:0;\n    bottom:0; \n    position:absolute;\n    background-color:', '; \n    transition:0.3s cubic-bezier(0.8,0.1,0.8,0.3); \n  }\n\n'], ['\n  position:relative;\n  box-sizing:border-box; \n  display:block; \n  width:100%;\n\n  &:before, \n  &:after {\n    content:\'\';\n    height:', '; \n    width:0;\n    bottom:0; \n    position:absolute;\n    background-color:', '; \n    transition:0.3s cubic-bezier(0.8,0.1,0.8,0.3); \n  }\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: ', '; \n  box-sizing:border-box;\n  font-size: ', ';\n  position:absolute;\n  pointer-events:none;\n  top: ', ';\n  transition:0.2s cubic-bezier(0.8,0.1,0.8,0.3); \n'], ['\n  color: ', '; \n  box-sizing:border-box;\n  font-size: ', ';\n  position:absolute;\n  pointer-events:none;\n  top: ', ';\n  transition:0.2s cubic-bezier(0.8,0.1,0.8,0.3); \n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: ', ';;\n  padding-right: 0;\n  padding-left: 0;\n  display:block;\n  width:100%;\n  border:none;\n  border-bottom:', ';  \n  box-sizing:border-box;\n  outline: none;\n  box-shadow: none;\n  color: ', ';\n  top: ', ';\n  font-size: ', ';\n\n  &:focus ~ ', ' {\n    top: ', ';\n    font-size: ', ';\n    color:', ';\n  }\n\n  &:focus ~ ', ':before,\n  &:focus ~ ', ':after {\n    width:100%;\n  } \n'], ['\n  padding: ', ';;\n  padding-right: 0;\n  padding-left: 0;\n  display:block;\n  width:100%;\n  border:none;\n  border-bottom:', ';  \n  box-sizing:border-box;\n  outline: none;\n  box-shadow: none;\n  color: ', ';\n  top: ', ';\n  font-size: ', ';\n\n  &:focus ~ ', ' {\n    top: ', ';\n    font-size: ', ';\n    color:', ';\n  }\n\n  &:focus ~ ', ':before,\n  &:focus ~ ', ':after {\n    width:100%;\n  } \n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Feedback = require('./Feedback');

var _Feedback2 = _interopRequireDefault(_Feedback);

var _utils = require('../../../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hasContent = function hasContent(content) {
  var getLength = function getLength(string) {
    return string.length;
  };

  if (!content) return false;
  if (typeof content !== 'string') {
    try {
      if (getLength(content.toString()) < 1) return false;
      return true;
    } catch (e) {
      console.warn('Is input content able to be converted to string?');
      return false;
    }
  }
  if (getLength(content) < 1) return false;
  return true;
};

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
  if (size === 'xxl') oSize = 6;

  return oSize * oScale + 'rem';
};

var StyledContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return getSizing(props.size, 0.5);
});

var StyledBar = _styledComponents2.default.span(_templateObject2, function (props) {
  return getSizing(props.size, 0.05);
}, function (props) {
  return props.color ? props.color : props.theme.color.brandColor;
});

var StyledLabel = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.isDisabled ? props.color : props.theme.color.textColor;
}, function (props) {
  return getSizing(props.size, 0.55);
}, function (props) {
  return getSizing(props.size, 0.25);
});

var StyledInput = _styledComponents2.default.input(_templateObject4, function (props) {
  return getSizing(props.size, 0.3);
}, function (props) {
  return getSizing(props.size, 0.02) + ' solid ' + (props.isDisabled ? props.color : props.theme.color.textColor);
}, function (props) {
  return props.isDisabled ? props.color : null;
}, function (props) {
  return hasContent(props.content) ? getSizing(props.size, -0.5) : null;
}, function (props) {
  return getSizing(props.size, 0.55);
}, StyledLabel, function (props) {
  return getSizing(props.size, -0.50);
}, function (props) {
  return getSizing(props.size, 0.475);
}, function (props) {
  return props.color ? props.color : props.theme.color.brandColor;
}, StyledBar, StyledBar);

var Input = function Input(props) {
  var isDisabled = props.isDisabled,
      isRequired = props.isRequired,
      isValid = props.isValid,
      feedback = props.feedback,
      label = props.label,
      size = props.size,
      content = props.content;


  var getStatusFromProps = function getStatusFromProps() {
    if (isDisabled) return 'disabled';
    if (isRequired && !content) return 'warning';
    if (isValid) return 'ok';
    return 'critical';
  };

  var getIconFromProps = function getIconFromProps() {
    if (isRequired && !content) return 'warning';
    if (isValid) return 'ok';
    return 'critical';
  };

  var statusIcon = _utils.icon.getIcon(getIconFromProps());

  var statusColor = _utils.color.getColorFromStatus(getStatusFromProps(), props.theme.color,
  // eslint-disable-next-line
  props.theme.brandColor);

  return _react2.default.createElement(
    StyledContainer,
    { size: size },
    isDisabled ? _react2.default.createElement(StyledInput, Object.assign({}, props, { color: statusColor, style: { backgroundColor: 'transparent' }, disabled: true })) : _react2.default.createElement(StyledInput, Object.assign({}, props, { color: statusColor })),
    _react2.default.createElement(
      StyledLabel,
      Object.assign({ size: size, color: statusColor }, props),
      label
    ),
    _react2.default.createElement(StyledBar, { size: size, color: statusColor }),
    feedback ? _react2.default.createElement(_Feedback2.default, Object.assign({}, props, {
      color: statusColor,
      icon: statusIcon
    })) : null
  );
};

Input.defaultProps = {
  isValid: true,
  isRequired: false,
  isDisabled: false,
  content: null,
  label: 'Input',
  size: 's',
  feedback: false
};

Input.propTypes = {
  isValid: _propTypes2.default.bool,
  isRequired: _propTypes2.default.bool,
  isDisabled: _propTypes2.default.bool,
  content: _propTypes2.default.string,
  label: _propTypes2.default.string,
  size: _propTypes2.default.string,
  feedback: _propTypes2.default.string,
  theme: _propTypes2.default.object
};

exports.default = (0, _styledComponents.withTheme)(Input);

//# sourceMappingURL=Input.js.map