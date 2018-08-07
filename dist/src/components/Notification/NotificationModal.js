'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _utils = require('../../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getColorFromStatus = _utils.color.getColorFromStatus;
var getIcon = _utils.icon.getIcon;


var NotificationModal = function NotificationModal(props) {
  var isVisible = props.isVisible,
      status = props.status,
      children = props.children,
      label = props.label,
      theme = props.theme;


  return _react2.default.createElement(
    _Modal2.default,
    { isVisible: isVisible, style: { maxWidth: '400px' } },
    _react2.default.createElement(
      _Box2.default,
      { padding: { vertical: 'ms', horizontal: 'm' }, wrap: true },
      _react2.default.createElement(
        _Box2.default,
        null,
        _react2.default.createElement(
          _Box2.default,
          { alignItems: 'center' },
          _react2.default.createElement(_Icon2.default, {
            icon: getIcon(status),
            status: status,
            size: 's',
            color: getColorFromStatus(status, theme.color)
          }),
          _react2.default.createElement(
            _Box2.default,
            { fill: false, padding: { horizontal: 's' } },
            _react2.default.createElement(
              _Heading2.default,
              { tag: 'h4', color: getColorFromStatus(status, theme.color) },
              label || status
            )
          )
        ),
        _react2.default.createElement(_Icon2.default, {
          icon: 'close',
          status: status,
          size: 'xxs',
          color: 'black'
        })
      ),
      _react2.default.createElement(
        _Text2.default,
        null,
        children
      ),
      _react2.default.createElement(
        _Box2.default,
        { justify: 'end' },
        _react2.default.createElement(_Button2.default, { label: 'OK', status: status })
      )
    )
  );
};

NotificationModal.propTypes = {
  isVisible: _propTypes2.default.bool,
  status: _propTypes2.default.string,
  children: _propTypes2.default.any,
  label: _propTypes2.default.string,
  theme: _propTypes2.default.object
};

NotificationModal.defaultProps = {
  isVisible: true,
  status: 'ok',
  label: false
};

exports.default = (0, _styledComponents.withTheme)(NotificationModal);

//# sourceMappingURL=NotificationModal.js.map