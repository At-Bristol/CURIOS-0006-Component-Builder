'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  var label = props.label,
      isSelected = props.isSelected;


  return isSelected ? _react2.default.createElement(
    'ul',
    null,
    label
  ) : _react2.default.createElement(
    'ul',
    null,
    label
  );
};

ListItem.defaultProps = {
  label: '',
  isSelected: false
};

ListItem.propTypes = {
  label: _propTypes2.default.string,
  isSelected: _propTypes2.default.bool
};

exports.default = ListItem;

//# sourceMappingURL=ListItem.js.map