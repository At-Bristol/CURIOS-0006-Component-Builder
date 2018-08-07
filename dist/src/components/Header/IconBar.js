'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _IconNavButton = require('../IconNavButton');

var _IconNavButton2 = _interopRequireDefault(_IconNavButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styled from 'styled-components'

var IconBar = function IconBar(props) {
  var content = props.content;


  return _react2.default.createElement(
    _Box2.default,
    {
      alignItems: 'center',
      justify: 'end',
      basis: '30%'
    },
    content.map(function (e, i) {
      return _react2.default.createElement(_IconNavButton2.default, {
        key: i,
        icon: e.icon,
        onClick: e.onClick,
        padding: { horizontal: 'xs' },
        size: 'xs'
      });
    })
  );
};

IconBar.propTypes = {
  content: _propTypes2.default.array
};

IconBar.defaultProps = {
  content: []
};

exports.default = IconBar;

//# sourceMappingURL=IconBar.js.map