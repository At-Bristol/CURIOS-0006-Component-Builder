'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  top: ', ';\n  bottom: ', ';\n  width: 100%;\n  overflow-y: hidden;\n  max-height: ', '\n  z-index:100;\n  background-color: ', ';\n  overflow: hidden;\n'], ['\n  position: fixed;\n  top: ', ';\n  bottom: ', ';\n  width: 100%;\n  overflow-y: hidden;\n  max-height: ', '\n  z-index:100;\n  background-color: ', ';\n  overflow: hidden;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _utils = require('../../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getIcon = _utils.icon.getIcon;


var StyledNotificationBar = _styledComponents2.default.div(_templateObject, function (props) {
  return props.top ? 0 : null;
}, function (props) {
  return props.top ? null : 0;
}, function (props) {
  return props.isVisible ? null : 0;
}, function (props) {
  if (props.status === 'ok') return props.theme.color.statusColorOk;
  if (props.status === 'warning') return props.theme.color.statusColorWarning;
  if (props.status === 'error') return props.theme.color.statusColorError;
  if (props.status === 'critical') return props.theme.color.statusColorCritical;
  if (props.status === 'disabled') return props.theme.color.statusColorUnknown;
  if (props.status === 'unknown') return props.theme.color.statusColorUnknown;
  return props.theme.color.statusColorOk;
});

var NotificationBar = function NotificationBar(props) {
  var label = props.label,
      isVisible = props.isVisible,
      top = props.top,
      status = props.status,
      children = props.children;


  return _react2.default.createElement(
    StyledNotificationBar,
    { top: top, isVisible: isVisible, status: status },
    _react2.default.createElement(
      _Box2.default,
      { padding: { vertical: 's' } },
      _react2.default.createElement(
        _Box2.default,
        { justify: 'around', padding: { horizontal: 's' }, alignItems: 'center' },
        _react2.default.createElement(_Icon2.default, { icon: getIcon(status), inverse: true, size: 'm' }),
        label ? _react2.default.createElement(
          _Heading2.default,
          { tag: 'h5', truncate: true, style: { color: 'white', zIndex: 1 }, padding: { horizontal: 's' } },
          label
        ) : null,
        _react.Children.map(children, function (e) {
          return Object.assign({}, e, {
            props: Object.assign({}, e.props, {
              mono: true,
              inverse: true,
              secondary: true
            })
          });
        })
      )
    )
  );
};

NotificationBar.defaultProps = {
  label: '',
  top: false,
  isVisible: true,
  status: 'ok'
};

NotificationBar.propTypes = {
  label: _propTypes2.default.string,
  isVisible: _propTypes2.default.bool,
  top: _propTypes2.default.bool,
  status: _propTypes2.default.status,
  children: _propTypes2.default.any
};

exports.default = (0, _styledComponents.withTheme)(NotificationBar);

//# sourceMappingURL=NotificationBar.js.map