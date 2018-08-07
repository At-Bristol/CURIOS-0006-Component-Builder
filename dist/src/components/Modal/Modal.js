'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  top: 50%; \n  left: 50%; \n  width: 80%;\n  max-height: 80%;\n  max-width: 760px;\n  transform: translate(-50%, -50%);\n  background: white; \n  position: absolute;\n  overflow: scroll;\n  z-index: 1001;\n  border-radius: ', ';\n  @media only screen and (max-width: 760px){\n    width: 95%;\n    max-height: 95%;\n  }\n'], ['\n  top: 50%; \n  left: 50%; \n  width: 80%;\n  max-height: 80%;\n  max-width: 760px;\n  transform: translate(-50%, -50%);\n  background: white; \n  position: absolute;\n  overflow: scroll;\n  z-index: 1001;\n  border-radius: ', ';\n  @media only screen and (max-width: 760px){\n    width: 95%;\n    max-height: 95%;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _DisabledScreen = require('./DisabledScreen');

var _DisabledScreen2 = _interopRequireDefault(_DisabledScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledModal = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.radius.topLeft;
});

var Modal = function Modal(props) {
  var isVisible = props.isVisible,
      children = props.children;


  if (!isVisible) return null;

  return _react2.default.createElement(
    _Box2.default,
    null,
    _react2.default.createElement(
      StyledModal,
      null,
      children
    ),
    _react2.default.createElement(_DisabledScreen2.default, { isVisible: isVisible })
  );
};

Modal.propTypes = {
  isVisible: _propTypes2.default.bool,
  children: _propTypes2.default.any
};

Modal.defaultProps = {
  isVisible: true
};

exports.default = Modal;

//# sourceMappingURL=Modal.js.map