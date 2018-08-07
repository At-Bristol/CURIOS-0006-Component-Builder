'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n'], ['\n  color: ', ';\n']);

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

var StyledP = _styledComponents2.default.p(_templateObject, function (props) {
  return props.isInverse ? props.theme.color.inverseTextColor : props.theme.color.textColor;
});

/**
 * Text Component for writing blocks of text
 * @name Text
 * @param {bool} isInverse - Render the notification
*/

var Text = function Text(props) {
  var children = props.children,
      isInverse = props.isInverse,
      padding = props.padding;


  return _react2.default.createElement(
    _Box2.default,
    Object.assign({}, props, { padding: padding }),
    _react2.default.createElement(
      StyledP,
      { isInverse: isInverse },
      children
    )
  );
};

Text.defaultProps = {
  padding: false
};

Text.propTypes = {
  children: _propTypes2.default.any,
  isInverse: _propTypes2.default.bool,
  padding: _propTypes2.default.object
};

exports.default = Text;

//# sourceMappingURL=Text.js.map