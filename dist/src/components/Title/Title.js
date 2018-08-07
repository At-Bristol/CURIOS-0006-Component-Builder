'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\n'], ['\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n margin: 0 1em 0 1em;\n'], ['\n margin: 0 1em 0 1em;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import Box from '../Box'


var Logo = _styledComponents2.default.img(_templateObject);

var StyledTitle = _styledComponents2.default.div(_templateObject2);

var Title = function Title(props) {
  var label = props.label,
      logo = props.logo;


  return _react2.default.createElement(
    StyledTitle,
    null,
    logo ? _react2.default.createElement(Logo, null) : null,
    _react2.default.createElement(
      _Heading2.default,
      { tag: 'h4' },
      label
    )
  );
};

Title.propTypes = {
  label: _propTypes2.default.string,
  logo: _propTypes2.default.logo
};

Title.defaultProps = {
  logo: false
};

exports.default = Title;

//# sourceMappingURL=Title.js.map