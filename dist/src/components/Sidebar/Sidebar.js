'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: ', ';\n  border-bottom: ', ';\n'], ['\n  margin: ', ';\n  border-bottom: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n background-color: ', ';\n min-width: ', ';\n max-width: ', ';\n height: 100%;\n width: 100%;\n border-right : 1px solid ', ';\n transition: all 1s; \n overflow: hidden;\n'], ['\n background-color: ', ';\n min-width: ', ';\n max-width: ', ';\n height: 100%;\n width: 100%;\n border-right : 1px solid ', ';\n transition: all 1s; \n overflow: hidden;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _NavButton = require('./NavButton');

var _NavButton2 = _interopRequireDefault(_NavButton);

var _NavButtonSub = require('./NavButtonSub');

var _NavButtonSub2 = _interopRequireDefault(_NavButtonSub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Sidebar

var Line = _styledComponents2.default.div(_templateObject, function (props) {
  return '0 ' + props.theme.spacing.s;
}, function (props) {
  return '1px solid ' + props.theme.color.greyColorQuaternary;
});

var StyledSidebar = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.color.primaryShade;
}, function (props) {
  return props.isVisible ? '250px' : 0;
}, function (props) {
  return props.isVisible ? '330px' : 0;
}, function (props) {
  return props.theme.color.greyColorPrimary;
});

/**
 * Notification component, can render as modal or bar notifcation
 * @name Sidebar
 * @param {[]} content - Content of sidebar
 * @param {bool} isVisible - Render the notification
 * @param {bool} isCollapsed - If icons exist on the top level collapses the sidebar to icons only
 */

var Sidebar = function Sidebar(props) {
  var isVisible = props.isVisible,
      isCollapsed = props.isCollapsed,
      content = props.content;


  return _react2.default.createElement(
    StyledSidebar,
    {
      isVisible: isVisible,
      isCollapsed: isCollapsed
    },
    content.map(function (e, i) {
      if (e.sub) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_NavButton2.default, {
            isSelected: e.isSelected,
            label: e.label,
            isSub: true,
            key: i
          }),
          e.sub.map(function (eb, ib) {
            return _react2.default.createElement(_NavButtonSub2.default, {
              isVisible: e.isSelected,
              isSelected: eb.isSelected,
              label: eb.label,
              key: ib
            });
          }),
          _react2.default.createElement(Line, null)
        );
      }

      return _react2.default.createElement(_NavButton2.default, {
        isSelected: e.isSelected,
        label: e.label,
        key: i
      });
    })
  );
};

Sidebar.defaultProps = {
  isVisible: true,
  isCollapsed: false,
  content: []
};

Sidebar.propTypes = {
  isVisible: _propTypes2.default.bool,
  isCollapsed: _propTypes2.default.bool,
  content: _propTypes2.default.array
};

exports.default = Sidebar;

//# sourceMappingURL=Sidebar.js.map