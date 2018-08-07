'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  width: ', ';\n  height: ', ';\n'], ['\n  display: flex;\n  align-items: center;\n  width: ', ';\n  height: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = function sizes(x) {
  if (x === 'xxs') return '1.0em';
  if (x === 'xs') return '1.5em';
  if (x === 's') return '2.0em';
  if (x === 'm') return '3.0em';
  if (x === 'l') return '3.5em';
  if (x === 'xl') return '5.0em';
  if (x === 'xxl') return '10.0em';
  return '1.5em';
};

var getColorFromStatus = function getColorFromStatus(color, fill, stroke) {
  return {
    fill: fill === 'none' ? 'none' : color,
    stroke: stroke === 'none' ? 'none' : color
  };
};

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return sizes(props.size);
}, function (props) {
  return sizes(props.size);
});

var Icon = function Icon(props) {
  var icon = props.icon,
      size = props.size,
      inverse = props.inverse,
      color = props.color;


  var oColor = void 0;

  if (typeof color === 'string') {
    oColor = getColorFromStatus(color);
  } else {
    oColor = color;
  }

  oColor = inverse ? getColorFromStatus(props.theme.color.inverseTextColor, props.theme.icon[icon].svg.fill || props.theme.icon.defaults.fill,
  /* eslint-disable */
  props.theme.icon[icon].svg.stroke || props.theme.icon.defaults.stroke
  /* eslint-enable */
  ) : oColor;

  var combinedProps = void 0;

  try {
    combinedProps = Object.assign({}, props.theme.icon[icon].svg, props.theme.icon.defaults, props.theme.icon[icon].svg.path);
  } catch (e) {
    combinedProps = {};
    console.warn('icon ' + icon + ' not found');
  }

  var _combinedProps = combinedProps,
      viewBox = _combinedProps.viewBox,
      fill = _combinedProps.fill,
      stroke = _combinedProps.stroke,
      strokeLinecap = _combinedProps.strokeLinecap,
      strokeLinejoin = _combinedProps.strokeLinejoin,
      strokeWidth = _combinedProps.strokeWidth,
      xmlns = _combinedProps.xmlns,
      d = _combinedProps.d;


  return icon ? _react2.default.createElement(
    Container,
    { size: size },
    _react2.default.createElement(
      'svg',
      {
        viewBox: viewBox,
        xmlns: xmlns
      },
      _react2.default.createElement('path', {
        d: d,
        fill: oColor ? oColor.fill : fill,
        stroke: oColor ? oColor.stroke : stroke,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        strokeWidth: strokeWidth
      })
    )
  ) : null;
};

Icon.propTypes = {
  size: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  icon: _propTypes2.default.string.isRequired,
  inverse: _propTypes2.default.string,
  color: _propTypes2.default.any
};

Icon.defaultProps = {
  size: 's',
  icon: 'warningOutline',
  color: null
};

exports.default = (0, _styledComponents.withTheme)(Icon);

//# sourceMappingURL=Icon.js.map