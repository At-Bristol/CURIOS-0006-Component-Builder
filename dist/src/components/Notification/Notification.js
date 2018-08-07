'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NotificationBar = require('./NotificationBar');

var _NotificationBar2 = _interopRequireDefault(_NotificationBar);

var _NotificationModal = require('./NotificationModal');

var _NotificationModal2 = _interopRequireDefault(_NotificationModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Notification component, can render as modal or bar notification
 * @name Notification
 * @param {bool} isVisible - Render the notification
 * @param {bool} isModal - Render notification as modal
 * @param {string} label - Title of Notification
 * @param {string} status - Status of Notification, one of
 * 'ok', critical', 'error', 'warning', 'disabled', 'unknown'
 */

var Notification = function Notification(props) {
  var isModal = props.isModal;


  return isModal ? _react2.default.createElement(_NotificationModal2.default, props) : _react2.default.createElement(_NotificationBar2.default, props);
};

Notification.defaultProps = {
  isModal: false
};

Notification.propTypes = {
  isModal: _propTypes2.default.bool
};

exports.default = Notification;

//# sourceMappingURL=Notification.js.map