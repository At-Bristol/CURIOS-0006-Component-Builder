'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: ', ';\n  grid-gap: 0.75em;\n  margin: 0;\n  padding: 0;\n\n  @media only screen and (max-width: 600px){\n    grid-template-columns: 1fr;\n    grid-gap: 0.2em;\n  }\n'], ['\n  display: grid;\n  grid-template-columns: ', ';\n  grid-gap: 0.75em;\n  margin: 0;\n  padding: 0;\n\n  @media only screen and (max-width: 600px){\n    grid-template-columns: 1fr;\n    grid-gap: 0.2em;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var createColumns = function createColumns(x) {
  var string = '';
  for (var i = 0; i < x; i += 1) {
    string += '1fr ';
  }
  return string;
};

var Grid = _styledComponents2.default.div(_templateObject, function (props) {
  return createColumns(props.columns);
});

var StyledGrid = function StyledGrid(props) {
  /* eslint-disable no-unused-vars */
  var _props$columns = props.columns,
      columns = _props$columns === undefined ? 3 : _props$columns,
      children = props.children;
  /* eslint-enable */

  return _react2.default.createElement(
    Grid,
    props,
    children
  );
};

StyledGrid.propTypes = {
  columns: _propTypes2.default.number,
  children: _propTypes2.default.node
};

exports.default = StyledGrid;

//# sourceMappingURL=Grid.js.map