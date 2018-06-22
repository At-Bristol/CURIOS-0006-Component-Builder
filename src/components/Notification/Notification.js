import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import Box from '../Box'
import Icon from '../Icon'
import Heading from '../Heading'

const StyledNotification = styled.div`
  position: fixed;
  top: ${props => props.top ? 0 : null};
  bottom: ${props => props.top ? null : 0};
  width: 100%;
  overflow-y: hidden;
  max-height: ${props => props.isVisible ? null : 0}
  z-index:100000;
  background-color: ${(props) => {
    if (props.status === 'ok') return props.theme.color.statusColorOk
    if (props.status === 'warning') return props.theme.color.statusColorWarning
    if (props.status === 'error') return props.theme.color.statusColorError
    if (props.status === 'critical') return props.theme.color.statusColorCritical
    if (props.status === 'disabled') return props.theme.color.statusColorUnknown
    if (props.status === 'unknown') return props.theme.color.statusColorUnknown
    return props.theme.color.statusColorOk
  }};
  overflow: hidden;
`

const Notification = (props) => {
  const {
    label,
    isVisible,
    top,
    status,
    children,
  } = props

  const getIcon = (s) => {
    if (s === 'ok') return 'okOutline'
    if (s === 'warning') return 'warningOutline'
    if (s === 'error') return 'errorOutline'
    if (s === 'unknown') return 'unknownOutline'
    if (s === 'disabled') return 'disabled'
    if (s === 'critical') return 'criticalOutline'
    return null
  }


  return (
    <StyledNotification top={top} isVisible={isVisible} status={status} >
      <Box padding={{ vertical: 's' }}>
        <Box justify={'around'} padding={{ horizontal: 's' }} alignItems={'center'}>
          <Icon icon={getIcon(status)} inverse={true} size={'m'}/>
          { label ?
            <Heading tag='h5' truncate={true} style={{ color: 'white', zIndex: 1 }} padding={{ horizontal: 's' }}>
              {label}
            </ Heading>
          : null }
          {
            Children.map(children, e => (
              {
                ...e,
                props: {
                  ...e.props,
                  mono: true,
                  inverse: true,
                  secondary: true,
                },
              }
            ))
          }
        </Box>
      </ Box>
    </StyledNotification>
  )
}

Notification.defaultProps = {
  label: '',
  top: false,
  isVisible: true,
  status: 'ok',
}

Notification.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
  top: PropTypes.bool,
  status: PropTypes.status,
  children: PropTypes.any,
}

export default withTheme(Notification)
