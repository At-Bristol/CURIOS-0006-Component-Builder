'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 2% 5% ;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n'], ['\n  padding: 2% 5% ;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: ', ';\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border-radius: ', ';\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n  background-color: \'white\'; \n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);\n  color: ', ';\n  cursor: ', ';\n  &:hover {\n    transform: ', '\n  }\n'], ['\n  border-radius: ', ';\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n  background-color: \'white\'; \n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);\n  color: ', ';\n  cursor: ', ';\n  &:hover {\n    transform: ', '\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin: 0 0 0.75em 0;\n'], ['\n  margin: 0 0 0.75em 0;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin: 0;\n  padding: 2% 0%;\n'], ['\n  margin: 0;\n  padding: 2% 0%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Body = _styledComponents2.default.div(_templateObject);

var GradientOverlay = _styledComponents2.default.div(_templateObject2, function (props) {
  return 'linear-gradient(rgba(0,0,0,0.0), ' + props.theme.color.imageOverlayGradient + ')';
});

var MiniCard = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.radius.topLeft;
}, function (props) {
  return props.theme.color.imageOverlayText;
}, function (props) {
  return props.onClick ? 'pointer' : null;
}, function (props) {
  return props.onClick ? 'translate(0.2%, 2%)' : null;
});

var Spacer = _styledComponents2.default.div(_templateObject4);

var Date = _styledComponents2.default.h4(_templateObject5);

var StyledMiniCard = function StyledMiniCard(props) {
  /* eslint-disable no-unused-vars */
  var date = props.date,
      children = props.children,
      image = props.image,
      label = props.label,
      imagePos = props.imagePos;

  /* eslint-enable */

  return _react2.default.createElement(
    MiniCard,
    props,
    _react2.default.createElement(_Image2.default, { image: image, imagePos: imagePos }),
    _react2.default.createElement(GradientOverlay, null),
    _react2.default.createElement(
      Body,
      null,
      date ? _react2.default.createElement(
        Date,
        null,
        date
      ) : null,
      _react2.default.createElement(
        _Heading2.default,
        { tag: 'h4', truncate: true },
        props.label
      ),
      _react2.default.createElement(Spacer, null)
    )
  );
};

StyledMiniCard.propTypes = {
  date: _propTypes2.default.string,
  children: _propTypes2.default.element,
  label: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['start', 'center', 'end']),
  box: _propTypes2.default.bool,
  image: _propTypes2.default.string,
  imagePos: _propTypes2.default.string
};

StyledMiniCard.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = StyledMiniCard;

//# sourceMappingURL=MiniCard.js.map