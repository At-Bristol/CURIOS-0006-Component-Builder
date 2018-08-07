'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: white;\n  color: ', ';\n  border: ', ';\n  border-top: none;\n  position: relative;\n  z-index: 1000;\n  overflow: scroll;\n  max-height: 30vh;\n\n'], ['\n  background-color: white;\n  color: ', ';\n  border: ', ';\n  border-top: none;\n  position: relative;\n  z-index: 1000;\n  overflow: scroll;\n  max-height: 30vh;\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Box = require('../../Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDialog = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.color.textColor;
}, function (props) {
  return props.theme.color.textColor + ' 1px solid';
});

var Dialog = function Dialog(props) {
  var options = props.options;


  return _react2.default.createElement(
    StyledDialog,
    null,
    options[0] ? options.map(function (e, i) {
      return _react2.default.createElement(_Item2.default, Object.assign({ key: i }, e));
    }) : _react2.default.createElement(
      _Box2.default,
      { padding: 'm', justify: 'center' },
      'no results'
    )
  );
};

Dialog.defaultProps = {
  options: []
};

Dialog.propTypes = {
  options: _propTypes2.default.array
};

exports.default = Dialog;

//# sourceMappingURL=Dialog.js.map