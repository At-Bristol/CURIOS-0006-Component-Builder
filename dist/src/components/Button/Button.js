'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StyledButton = require('./StyledButton');

var _StyledButton2 = _interopRequireDefault(_StyledButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Button component
 * @param {string} label - the button text
 * @param {string} secondary - the boldness of the button
 * @param {string} status - the status of the button
 * @param {bool} isPlain - render a plain button
 */

var Button = function Button(props) {
  var label = props.label;


  return _react2.default.createElement(
    _StyledButton2.default,
    props,
    label
  );
};

Button.defaultProps = {
  secondary: false,
  fill: false,
  status: false
};

Button.propTypes = {
  label: _propTypes2.default.node
};

exports.default = Button;

//# sourceMappingURL=Button.js.map