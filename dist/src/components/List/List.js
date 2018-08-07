'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * List component for recursivley rendering Lists and Sub lists
 * @name Notification
 * @param {[]} content - Array of content
 * @param {[]} components - (TODO) Array of components to be rendered at each level.
 * If no component exists for level the last component in the array will be used.
*/

var List = function List(props) {
  var content = props.content;


  return _react2.default.createElement(
    'div',
    null,
    content.map(function (e, i) {
      return _react2.default.createElement(
        'div',
        { key: i },
        _react2.default.createElement(_ListItem2.default, e),
        e.sub && e.isSelected ? _react2.default.createElement(List, { content: e.sub }) : null
      );
    })
  );
};

List.defaultProps = {
  content: []
};

List.propTypes = {
  content: _propTypes2.default.array
};

exports.default = List;

//# sourceMappingURL=List.js.map