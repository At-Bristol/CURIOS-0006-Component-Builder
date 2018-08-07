'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 5em;\n\n  & > select {\n    display: none;\n  }\n'], ['\n  width: 100%;\n  height: 5em;\n\n  & > select {\n    display: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n   cursor: pointer;\n   border: ', ';\n   border-bottom: ', ';\n   &:hover {\n    background-color: ', '\n  }\n'], ['\n   cursor: pointer;\n   border: ', ';\n   border-bottom: ', ';\n   &:hover {\n    background-color: ', '\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../../Box');

var _Box2 = _interopRequireDefault(_Box);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Dialog = require('../Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getLabel = function getLabel(label) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  try {
    var x = options.filter(function (e) {
      return e.isSelected;
    });
    if (x.length === 1) return x[0].label;
    if (x.length > 1) return x.length + ' items';
    return label;
  } catch (e) {
    return label;
  }
};

var StyledContainer = _styledComponents2.default.div(_templateObject);

var StyledSelect = _styledComponents2.default.div(_templateObject2, function (props) {
  return '1px solid ' + props.theme.color.greyColorQuaternary;
}, function (props) {
  return '2px solid ' + props.theme.color.brandColor;
}, function (props) {
  return props.theme.color.greyColorQuinary;
});

var Select = function Select(props) {
  var label = props.label,
      isOpen = props.isOpen,
      options = props.options;


  return _react2.default.createElement(
    StyledContainer,
    null,
    _react2.default.createElement(
      StyledSelect,
      null,
      _react2.default.createElement(
        _Box2.default,
        { padding: { vertical: 's' } },
        _react2.default.createElement(
          _Box2.default,
          { alignItems: 'center', padding: { horizontal: 's' } },
          getLabel(label, options),
          _react2.default.createElement(
            _Box2.default,
            { justify: 'end' },
            _react2.default.createElement(_Icon2.default, { icon: isOpen ? 'collapse' : 'expand', size: 'xxs' })
          )
        )
      )
    ),
    isOpen ? _react2.default.createElement(_Dialog2.default, { options: options }) : null
  );
};

Select.defaultProps = {
  label: 'label',
  isOpen: false,
  options: [{ label: 'one', isSelected: true }, { label: 'two' }, { label: 'three' }, { label: 'four' }, { label: 'five' }, { label: 'six' }, { label: 'seven' }]
};

Select.propTypes = {
  label: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool,
  options: _propTypes2.default.array
};

exports.default = Select;

//# sourceMappingURL=Select.js.map