'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _MiniCard = require('./MiniCard');

var _MiniCard2 = _interopRequireDefault(_MiniCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectedCard = function SelectedCard(props) {
  return props.mini ? _react2.default.createElement(_MiniCard2.default, props) : _react2.default.createElement(_Card2.default, props);
};

SelectedCard.propTypes = {
  mini: _propTypes2.default.bool
};

exports.default = SelectedCard;

//# sourceMappingURL=index.js.map