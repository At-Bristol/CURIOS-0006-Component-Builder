'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: ', ';\n  border-bottom: ', ';\n'], ['\n  margin: ', ';\n  border-bottom: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: ', '; \n  cursor: pointer;\n  border-right: 0.2em solid rgba(0,0,0,0);\n  &:hover {\n    background-color: ', '\n  }\n'], ['\n  color: ', '; \n  cursor: pointer;\n  border-right: 0.2em solid rgba(0,0,0,0);\n  &:hover {\n    background-color: ', '\n  }\n']);

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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// NavButton

var Line = _styledComponents2.default.div(_templateObject, function (props) {
  return '0 ' + props.theme.spacing.s;
}, function (props) {
  return '1px solid ' + props.theme.color.greyColorQuaternary;
});

var StyledNavButton = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.isSelected ? props.theme.color.textColor : props.theme.color.textColor;
}, function (props) {
  return props.theme.color.greyColorQuinary;
});

var StateIndicator = function StateIndicator(props) {
  var isSub = props.isSub,
      isSelected = props.isSelected;


  var size = 'xxs';

  if (isSub) {
    if (isSelected) return _react2.default.createElement(_Icon2.default, { icon: 'collapse', size: size });
    return _react2.default.createElement(_Icon2.default, { icon: 'add', size: size });
  }
  return _react2.default.createElement(_Icon2.default, { icon: 'expand', size: size });
};

StateIndicator.propTypes = {
  isSelected: _propTypes2.default.bool,
  isSub: _propTypes2.default.bool
};

StateIndicator.defaultProps = {
  isSelected: false,
  isSub: false
};

var NavButton = function NavButton(props) {
  var label = props.label,
      isSelected = props.isSelected,
      isSub = props.isSub,
      icon = props.icon;


  return _react2.default.createElement(
    StyledNavButton,
    { isSelected: isSelected },
    _react2.default.createElement(
      _Box2.default,
      { padding: { vertical: 'ms' } },
      _react2.default.createElement(
        _Box2.default,
        { alignItems: 'center', justify: 'between', padding: { horizontal: 's' } },
        _react2.default.createElement(
          _Box2.default,
          { alignItems: 'center' },
          icon ? _react2.default.createElement(_Icon2.default, { icon: icon, size: 'xs' }) : null,
          _react2.default.createElement(
            _Box2.default,
            { padding: icon ? 's' : '' },
            isSelected ? _react2.default.createElement(
              _Heading2.default,
              { tag: 'h5' },
              label
            ) : _react2.default.createElement(
              _Heading2.default,
              { tag: 'h5', strong: false },
              label
            )
          )
        ),
        _react2.default.createElement(StateIndicator, { isSub: isSub, isSelected: isSelected })
      )
    ),
    _react2.default.createElement(Line, null)
  );
};

NavButton.propTypes = {
  label: _propTypes2.default.string,
  isSelected: _propTypes2.default.bool,
  isSub: _propTypes2.default.bool,
  icon: _propTypes2.default.string
};

NavButton.defaultProps = {
  label: '',
  isSelected: false,
  isSub: false,
  icon: null
};
exports.default = NavButton;

//# sourceMappingURL=NavButton.js.map