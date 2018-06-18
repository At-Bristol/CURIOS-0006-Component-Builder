import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'
import Icon from '../Icon'
import Heading from '../Heading'

const StyledNotification = styled.div`
  position: fixed;
  top: ${props => props.top ? 0 : null};
  bottom: 0;
  width:100%;
  width: 100%;
  z-index:10000;
  background-color: red;
  overflow: hidden;
`

const Notification = (props) => {
  const {
    label,
    isVisible,
    top,
  } = props

  return (
    <StyledNotification top={top} isVisible={isVisible} >
      <Box alignItems={'center'} justify={'center'} padding={{ vertical: 's', horizontal: 's' }}>
        <Icon />
        <Heading tag='h5' truncate={true} style={{ color: 'white', zIndex: 1 }} padding={{ horizontal: 's' }}>
          {label}
        </ Heading>
        <Box padding={{ horizontal: 's' }}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation
        </Box>
      </ Box>
    </ StyledNotification>
  )
}

Notification.defaultProps = {
  label: 'Attention',
  top: false,
  isVisible: true,
}

Notification.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
  top: PropTypes.bool,
}

export default Notification
