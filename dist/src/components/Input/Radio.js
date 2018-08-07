'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: ', ';\n  border-radius: ', ';\n'], ['\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: ', ';\n  border-radius: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n'], ['\n  width: ', ';\n  height: ', ';\n']);

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

var getSizing = function getSizing(size, scale) {
  var oScale = scale;
  var oSize = void 0;

  if (!oScale) oScale = 1;
  if (size === 'xxs') oSize = 1.0;
  if (size === 'xs') oSize = 1.5;
  if (size === 's') oSize = 2;
  if (size === 'ms') oSize = 2.25;
  if (size === 'm') oSize = 2.5;
  if (size === 'ml') oSize = 2.75;
  if (size === 'l') oSize = 3;
  if (size === 'xl') oSize = 4;
  if (size === 'xxl') oSize = 5;

  return oSize * oScale + 'em';
};

var StyledOutline = _styledComponents2.default.div(_templateObject, function (props) {
  return getSizing(props.size, 0.1) + ' \n     solid \n     ' + (props.isOn ? props.theme.color.brandColor : props.theme.color.greyColorTertiary) + '\n    ';
}, function (props) {
  return getSizing(props.size, 0.6);
});

var StyledRadio = _styledComponents2.default.div(_templateObject2, function (props) {
  return getSizing(props.size, 1);
}, function (props) {
  return getSizing(props.size, 1);
});

var Radio = function Radio(props) {
  var isOn = props.isOn,
      size = props.size;


  return _react2.default.createElement(
    StyledRadio,
    { size: size },
    _react2.default.createElement(
      StyledOutline,
      { size: size, isOn: isOn },
      _react2.default.createElement(
        _Box2.default,
        { alignItems: 'center', justify: 'center' },
        _react2.default.createElement(_Icon2.default, { icon: 'add', size: 'xs' })
      )
    )
  );
};

Radio.defaultProps = {
  isOn: false,
  size: 's'
};

Radio.propTypes = {
  isOn: _propTypes2.default.bool,
  size: _propTypes2.default.string
};

exports.default = Radio;

//# sourceMappingURL=Radio.js.map