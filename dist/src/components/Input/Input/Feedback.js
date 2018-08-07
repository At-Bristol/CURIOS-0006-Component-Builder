'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-left: 0;\n  font-size: ', ';\n  padding-top: ', ';\n  color: ', ';\n'], ['\n  padding-left: 0;\n  font-size: ', ';\n  padding-top: ', ';\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../../Box');

var _Box2 = _interopRequireDefault(_Box);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

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
  if (size === 'xxl') oSize = 6;

  return oSize * oScale + 'rem';
};

var StyledFeedback = _styledComponents2.default.div(_templateObject, function (props) {
  return getSizing(props.size, 0.475);
}, function (props) {
  return getSizing(props.size, 0.10);
}, function (props) {
  return props.color ? props.color : props.theme.color.textColor;
});

var Feedback = function Feedback(props) {
  var color = props.color,
      feedback = props.feedback,
      icon = props.icon,
      isRequired = props.isRequired,
      content = props.content;


  var oFeedback = isRequired && !content ? 'Required' : feedback;

  return _react2.default.createElement(
    StyledFeedback,
    props,
    _react2.default.createElement(
      _Box2.default,
      { alignItems: 'center' },
      _react2.default.createElement(_Icon2.default, { icon: icon, size: 'xxs', color: color }),
      _react2.default.createElement(_Box2.default, { fill: false, padding: { horizontal: 'xxs' } }),
      oFeedback
    )
  );
};

Feedback.defaultProps = {
  color: null,
  size: null,
  feedback: null,
  isRequired: false,
  content: null
};

Feedback.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.string,
  feedback: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  isRequired: _propTypes2.default.bool,
  content: _propTypes2.default.string
};

exports.default = Feedback;

//# sourceMappingURL=Feedback.js.map