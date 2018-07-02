import React from 'react'
import PropTypes from 'prop-types'

import NotificationBar from './NotificationBar'
import NotificationModal from './NotificationModal'

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
