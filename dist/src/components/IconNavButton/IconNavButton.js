'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n  &:hover {\n    background-color: ', '\n  }\n'], ['\n  cursor: pointer;\n  &:hover {\n    background-color: ', '\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledIconNavButton = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.color.brandColor;
});

var IconNavButton = function IconNavButton(props) {
  var icon = props.icon,
      inverse = props.inverse,
      mono = props.mono,
      padding = props.padding,
      size = props.size;


  return _react2.default.createElement(
    StyledIconNavButton,
    null,
    _react2.default.createElement(
      _Box2.default,
      { padding: padding },
      _react2.default.createElement(_Icon2.default, {
        icon: icon,
        inverse: inverse,
        mono: mono,
        size: size })
    )
  );
};

IconNavButton.propTypes = {
  icon: _propTypes2.default.string,
  inverse: _propTypes2.default.bool,
  mono: _propTypes2.default.bool,
  padding: _propTypes2.default.bool,
  size: _propTypes2.default.string
};

IconNavButton.defaultProps = {
  icon: 'menu',
  inverse: false,
  mono: false,
  size: 'xs'
};

exports.default = IconNavButton;

//# sourceMappingURL=IconNavButton.js.map