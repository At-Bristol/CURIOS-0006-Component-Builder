'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: ', ';\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  height: ', ';\n  margin: 0;\n  background-image: ', ';\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: ', '; \n  cursor: ', ';\n'], ['\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  height: ', ';\n  margin: 0;\n  background-image: ', ';\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: ', '; \n  cursor: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GradientOverlay = _styledComponents2.default.div(_templateObject, function (props) {
  return 'linear-gradient(rgba(0,0,0,0.0), ' + props.theme.color.imageOverlayGradient + ')';
});

var StyledHero = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.height + 'vh';
}, function (props) {
  return 'url(' + props.imageUrl + ')';
}, function (props) {
  return props.imagePos;
}, function (props) {
  return props.onClick ? 'pointer' : null;
});

/**
 * Hero imageUrl Component
 * @name Hero
 * @param {string} label - Label overlaying the imageUrl
 * @param {string} imageUrl - Background image url
 * @param {string} imagePos - css background-position options
*/

var Hero = function Hero(props) {
  var label = props.label;


  return _react2.default.createElement(
    StyledHero,
    props,
    label ? _react2.default.createElement(GradientOverlay, null) : null,
    _react2.default.createElement(
      _Heading2.default,
      { tag: 'h1', truncate: true, style: { color: 'white', zIndex: 1 } },
      label
    )
  );
};

Hero.defaultProps = {
  label: null,
  imageUrl: null,
  imagePos: 'center'
};

Hero.propTypes = {
  label: _propTypes2.default.string,
  imageUrl: _propTypes2.default.string,
  imagePos: _propTypes2.default.string
};

exports.default = Hero;

//# sourceMappingURL=Hero.js.map