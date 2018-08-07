'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 3px;\n  width: 100%;\n  background-color: ', ';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n'], ['\n  height: 3px;\n  width: 100%;\n  background-color: ', ';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Line = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.color.textColor;
});

var Tab = function Tab(props) {
  var isSelected = props.isSelected,
      label = props.label;


  return _react2.default.createElement(
    _Box2.default,
    { position: 'relative' },
    _react2.default.createElement(
      _Box2.default,
      { alignItems: 'center', justify: 'center' },
      _react2.default.createElement(_Button2.default, { label: label, isPlain: true })
    ),
    isSelected ? _react2.default.createElement(Line, null) : null
  );
};

Tab.defaultProps = {
  isSelected: false,
  label: null
};

Tab.propTypes = {
  isSelected: _propTypes2.default.bool,
  label: _propTypes2.default.string
};

exports.default = Tab;

//# sourceMappingURL=Tab.js.map