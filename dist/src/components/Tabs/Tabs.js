'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tab component
 * @name Text
 * @param {[]} content - Content for Tabs
 * @param {bool} isInverse - Render with inverted colors
 * @param {bool} isResponsive - Do the tabs stack vertically on mobile screen width
*/

var Tabs = function Tabs(props) {
  var content = props.content;


  return _react2.default.createElement(
    _Box2.default,
    null,
    content.map(function (e, i) {
      return _react2.default.createElement(_Tab2.default, {
        key: i,
        isSelected: e.isSelected,
        label: e.label
      });
    })
  );
};

Tabs.defaultProps = {
  content: []
};

Tabs.propTypes = {
  content: _propTypes2.default.array
};

exports.default = Tabs;

//# sourceMappingURL=Tabs.js.map