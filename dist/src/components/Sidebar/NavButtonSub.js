'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  background-color: ', '; ;\n  border-left: ', ';\n  transition: all .1s; \n  width: 100%;\n  cursor: pointer;\n  display: ', ';\n  &:hover {\n    background-color: ', '\n  }\n'], ['\n  color: ', ';\n  background-color: ', '; ;\n  border-left: ', ';\n  transition: all .1s; \n  width: 100%;\n  cursor: pointer;\n  display: ', ';\n  &:hover {\n    background-color: ', '\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// SubNavButton

var StyledNavButtonSub = _styledComponents2.default.div(_templateObject, function (props) {
  return props.isSelected ? props.theme.color.brandColor : props.theme.color.textColor;
}, function (props) {
  return props.isSelected ? props.theme.color.greyColorQuinary : null;
}, function (props) {
  return props.isSelected ? '0.2em solid ' + props.theme.color.brandColor : '0.2em solid rgba(0,0,0,0)';
}, function (props) {
  return props.isVisible ? 'block' : 'none';
}, function (props) {
  return props.theme.color.greyColorQuinary;
});

var NavButtonSub = function NavButtonSub(props) {
  var label = props.label,
      isSelected = props.isSelected,
      isVisible = props.isVisible;


  return _react2.default.createElement(
    StyledNavButtonSub,
    { isSelected: isSelected, isVisible: isVisible },
    _react2.default.createElement(
      _Box2.default,
      { padding: { vertical: 's' } },
      _react2.default.createElement(
        _Box2.default,
        { alignItems: 'center', justify: 'between', padding: { horizontal: 'm' } },
        _react2.default.createElement(
          _Heading2.default,
          { tag: 'h6', strong: isSelected },
          label
        )
      )
    )
  );
};

NavButtonSub.propTypes = {
  label: _propTypes2.default.string,
  isSelected: _propTypes2.default.bool,
  isVisible: _propTypes2.default.string,
  theme: _propTypes2.default.object
};

NavButtonSub.defaultProps = {
  label: '',
  isSelected: false,
  isVisible: 'block'
};

exports.default = (0, _styledComponents.withTheme)(NavButtonSub);

//# sourceMappingURL=NavButtonSub.js.map