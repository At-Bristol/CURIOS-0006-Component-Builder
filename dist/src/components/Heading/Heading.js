'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-family: ', ';\n  font-weight: ', ';\n  margin: 0;\n  padding: 0;\n  text-transform: ', ';\n  text-overflow: ', ';\n'], ['\n  color: ', ';\n  font-family: ', ';\n  font-weight: ', ';\n  margin: 0;\n  padding: 0;\n  text-transform: ', ';\n  text-overflow: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 5.0em;\n'], ['\n  font-size: 5.0em;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 4.0em;\n'], ['\n  font-size: 4.0em;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 3.0em;\n'], ['\n  font-size: 3.0em;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 2.0em;\n'], ['\n  font-size: 2.0em;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 1.3em;\n'], ['\n  font-size: 1.3em;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  font-size: 0.9em;\n'], ['\n  font-size: 0.9em;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeading = _styledComponents2.default.div(_templateObject, function (props) {
  if (props.isInverse) return props.theme.color.inverseTextColor;
  if (props.color) return props.color;
  return props.theme.color.textColor;
}, function (props) {
  return props.isStrong ? props.theme.font.family.heavy : props.theme.font.family.regular;
}, function (props) {
  return props.isStrong ? props.theme.font.weight.heavy : props.theme.font.weight.regular;
}, function (props) {
  return props.isUppercase ? 'isUppercase' : null;
}, function (props) {
  return props.isTruncated ? 'ellipsis' : null;
});

var H1 = StyledHeading.extend(_templateObject2);

var H2 = StyledHeading.extend(_templateObject3);

var H3 = StyledHeading.extend(_templateObject4);

var H4 = StyledHeading.extend(_templateObject5);

var H5 = StyledHeading.extend(_templateObject6);

var H6 = StyledHeading.extend(_templateObject7);

var getTag = function getTag(tag) {
  if (tag === 'h1') return H1;
  if (tag === 'h2') return H2;
  if (tag === 'h3') return H3;
  if (tag === 'h4') return H4;
  if (tag === 'h5') return H5;
  if (tag === 'h6') return H6;
  return 'h1';
};

/**
 * Heading component
 * @name Heading
 * @param {string} color - Text Color
 * @param {bool} isStrong - Render strong title (default true)
 * @param {bool} isInverse - Use theme inverseTheme color
 * @param {bool} isTruncated - truncate overflow to ellipsis
 * @param {bool} isUppercase - force text to upper case
 * @param {string} tag - tag between h1 - h6
*/

var Heading = function Heading(props) {
  var tag = props.tag,
      children = props.children;


  var Tag = getTag(tag);

  return _react2.default.createElement(
    Tag,
    props,
    children
  );
};

Heading.propTypes = {
  isStrong: _propTypes2.default.bool,
  tag: _propTypes2.default.string,
  isTruncated: _propTypes2.default.bool,
  isUppercase: _propTypes2.default.bool,
  isInverse: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  color: _propTypes2.default.color
};

Heading.defaultProps = {
  isInverse: false,
  isStrong: true
};

exports.default = Heading;

//# sourceMappingURL=Heading.js.map