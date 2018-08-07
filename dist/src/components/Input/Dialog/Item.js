'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n   cursor: pointer;\n   color: ', ';\n   border-bottom: ', ';\n   border-left: ', ';\n   &:hover {\n    background-color: ', '\n  }\n'], ['\n   cursor: pointer;\n   color: ', ';\n   border-bottom: ', ';\n   border-left: ', ';\n   &:hover {\n    background-color: ', '\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../../Box');

var _Box2 = _interopRequireDefault(_Box);

var _Heading = require('../../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledItem = _styledComponents2.default.div(_templateObject, function (props) {
  return props.isSelected ? props.theme.color.brandColor : null;
}, function (props) {
  return props.theme.color.greyColorQuaternary;
}, function (props) {
  return props.isSelected ? '0.2em solid ' + props.theme.color.brandColor : '0.2em solid rgba(0,0,0,0)';
}, function (props) {
  return props.theme.color.greyColorQuinary;
});

var Item = function Item(props) {
  var label = props.label,
      isSelected = props.isSelected;


  return _react2.default.createElement(
    StyledItem,
    { isSelected: isSelected },
    _react2.default.createElement(
      _Box2.default,
      { padding: { vertical: 's' } },
      _react2.default.createElement(
        _Box2.default,
        { alignItems: 'center', padding: { horizontal: 's' } },
        _react2.default.createElement(
          _Heading2.default,
          { tag: 'h6', strong: isSelected },
          label
        )
      )
    )
  );
};

Item.defaultProps = {
  label: 'label',
  isSelected: false
};

Item.propTypes = {
  label: _propTypes2.default.string,
  isSelected: _propTypes2.default.bool
};

exports.default = Item;

//# sourceMappingURL=Item.js.map