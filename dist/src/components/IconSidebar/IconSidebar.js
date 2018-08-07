'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  height: 100%;\n  min-width: 3.5em;\n  max-width: 3.5em;\n  transition: all 1s; \n  overflow: hidden;\n'], ['\n  background-color: ', ';\n  height: 100%;\n  min-width: 3.5em;\n  max-width: 3.5em;\n  transition: all 1s; \n  overflow: hidden;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _IconNavButton = require('../IconNavButton');

var _IconNavButton2 = _interopRequireDefault(_IconNavButton);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledIconSidebar = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.color.greyColorTertiary;
});

var IconSidebar = function IconSidebar(props) {
  var content = props.content;


  return _react2.default.createElement(
    StyledIconSidebar,
    null,
    _react2.default.createElement(
      _Box2.default,
      { column: true, alignItems: 'center' },
      content.map(function (e, i) {
        return _react2.default.createElement(_IconNavButton2.default, {
          mono: true,
          inverse: true,
          icon: e.icon,
          onClick: e.onClick,
          key: i,
          padding: 's'
        });
      })
    )
  );
};

IconSidebar.propTypes = {
  content: _propTypes2.default.array
};

IconSidebar.defaultProps = {
  content: []
};

exports.default = IconSidebar;

//# sourceMappingURL=IconSidebar.js.map