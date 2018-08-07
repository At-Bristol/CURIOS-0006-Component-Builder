import React from 'react'
import PropTypes from 'prop-types'

import NotificationBar from './NotificationBar'
import NotificationModal from './NotificationModal'

/**
 * Notification component, can render as modal or bar notification
 * @name Notification
 * @param {bool} isVisible - Render the notification
 * @param {bool} isModal - Render notification as modal
 * @param {string} label - Title of Notification
 * @param {string} status - Status of Notification, one of
 * 'ok', critical', 'error', 'warning', 'disabled', 'unknown'
 */

const Notification = (props) => {
  const {
    isModal,
  } = props

  return (
    isModal
      ? <NotificationModal {...props} />
      : <NotificationBar {...props} />
  )
}

Notification.defaultProps = {
  isModal: false,
}

Notification.propTypes = {
  isModal: PropTypes.bool,
}

export default Notification
