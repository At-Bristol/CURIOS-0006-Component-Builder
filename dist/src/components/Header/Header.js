'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: ', ';\n  z-index: -1;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: ', ';\n  z-index: -1;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  background-color: ', ';\n  border-bottom:', ';\n  height: 60px;\n  z-index: 100;\n  position: ', ';\n'], ['\n  width: 100%;\n  background-color: ', ';\n  border-bottom:', ';\n  height: 60px;\n  z-index: 100;\n  position: ', ';\n']);

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

var GradientOverlay = _styledComponents2.default.div(_templateObject, function (props) {
  return 'linear-gradient(' + props.theme.color.imageOverlayGradient + ', rgba(0,0,0,0.0))';
});

var StyledHeader = _styledComponents2.default.div(_templateObject2, function (props) {
  if (props.isTransparent) return 'rgba(0,0,0,0)';
  if (props.inverted) return 'black';
  return 'white';
}, function (props) {
  return '1px solid ' + props.theme.color.textColor;
}, function (props) {
  return props.fixed ? 'fixed' : 'null';
});

var Header = function Header(props) {
  /* eslint-disable no-unused-vars */
  var fixed = props.fixed,
      inverted = props.inverted,
      children = props.children,
      isTransparent = props.isTransparent,
      isGradient = props.isGradient;
  /* eslint-enable */

  return _react2.default.createElement(
    StyledHeader,
    {
      fixed: fixed,
      isTransparent: isTransparent,
      inverted: inverted
    },
    isGradient ? _react2.default.createElement(GradientOverlay, null) : null,
    _react2.default.createElement(
      _Box2.default,
      { alignItems: 'center', justify: 'end' },
      children
    )
  );
};

Header.propTypes = {
  fixed: _propTypes2.default.bool,
  justify: _propTypes2.default.oneOf(['start', 'end', 'center', 'around', 'between', 'evenly']),
  alignItems: _propTypes2.default.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignContent: _propTypes2.default.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  children: _propTypes2.default.node,
  position: _propTypes2.default.number,
  inverted: _propTypes2.default.bool,
  isTransparent: _propTypes2.default.bool,
  isGradient: _propTypes2.default.bool,
  isSelected: _propTypes2.default.bool
};

Header.defaultProps = {
  fixed: true,
  inverted: false,
  isTransparent: false,
  isGradient: false,
  isSelected: false
};

exports.default = Header;

//# sourceMappingURL=Header.js.map