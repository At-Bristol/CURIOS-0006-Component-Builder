'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(0,0,0,0.8);\n  position: absolute\n  z-index: 1000;\n'], ['\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(0,0,0,0.8);\n  position: absolute\n  z-index: 1000;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDisabledScreen = _styledComponents2.default.div(_templateObject);

var DisabledScreen = function DisabledScreen(props) {
  var isVisible = props.isVisible;


  return isVisible ? _react2.default.createElement(StyledDisabledScreen, null) : null;
};

DisabledScreen.propTypes = {
  isVisible: _propTypes2.default.bool
};

DisabledScreen.defaultProps = {
  isVisible: false
};

exports.default = DisabledScreen;

//# sourceMappingURL=DisabledScreen.js.map