'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: ', ';\n  overflow: hidden;\n  width: 100%;\n  margin: 0;\n  float: left;\n  background-color: white; \n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);\n  cursor: ', ';\n  &:hover {\n    transform: ', '\n  }\n'], ['\n  border-radius: ', ';\n  overflow: hidden;\n  width: 100%;\n  margin: 0;\n  float: left;\n  background-color: white; \n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);\n  cursor: ', ';\n  &:hover {\n    transform: ', '\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 2% 5% ;\n'], ['\n  padding: 2% 5% ;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin: 0% 0% 2% 0%;\n'], ['\n  margin: 0% 0% 2% 0%;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin: 0;\n  padding: 2% 0%;\n  color: ', ';\n'], ['\n  margin: 0;\n  padding: 2% 0%;\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Card = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.radius.topLeft;
}, function (props) {
  return props.onClick ? 'pointer' : null;
}, function (props) {
  return props.onClick ? 'translate(0.2%, 2%)' : null;
});

var Body = _styledComponents2.default.div(_templateObject2);

var Spacer = _styledComponents2.default.div(_templateObject3);

var Date = _styledComponents2.default.h4(_templateObject4, function (props) {
  return props.theme.color.greyColorTertiary;
});

var StyledCard = function StyledCard(props) {
  /* eslint-disable no-unused-vars */
  var date = props.date,
      children = props.children,
      image = props.image,
      label = props.label,
      imagePos = props.imagePos;
  /* eslint-enable */

  return _react2.default.createElement(
    Card,
    props,
    image ? _react2.default.createElement(_Image2.default, { image: image, imagePos: imagePos }) : null,
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
      _react2.default.createElement(Spacer, null),
      children
    ),
    _react2.default.createElement(Spacer, null)
  );
};

StyledCard.propTypes = {
  date: _propTypes2.default.string,
  children: _propTypes2.default.node,
  label: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['start', 'center', 'end']),
  box: _propTypes2.default.bool,
  image: _propTypes2.default.string,
  imagePos: _propTypes2.default.string
};

StyledCard.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = StyledCard;

//# sourceMappingURL=Card.js.map