'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BorderedButton = require('./BorderedButton');

var _BorderedButton2 = _interopRequireDefault(_BorderedButton);

var _PlainButton = require('./PlainButton');

var _PlainButton2 = _interopRequireDefault(_PlainButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledButton = function StyledButton(props) {
  var label = props.label,
      isPlain = props.isPlain;


  return isPlain ? _react2.default.createElement(
    _PlainButton2.default,
    props,
    label
  ) : _react2.default.createElement(
    _BorderedButton2.default,
    props,
    label
  );
};

StyledButton.propTypes = {
  isPlain: _propTypes2.default.bool,
  label: _propTypes2.default.string
};

exports.default = StyledButton;

//# sourceMappingURL=StyledButton.js.map