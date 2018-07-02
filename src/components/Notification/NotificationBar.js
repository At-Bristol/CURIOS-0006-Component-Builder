import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import Box from '../Box'
import Icon from '../Icon'
import Heading from '../Heading'

import { icon } from '../../lib/utils'

const {
  getIcon,
} = icon

const StyledNotificationBar = styled.div`
  position: fixed;
  top: ${props => props.top ? 0 : null};
  bottom: ${props => props.top ? null : 0};
  width: 100%;
  overflow-y: hidden;
  max-height: ${props => props.isVisible ? null : 0}
  z-index:100;
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

const NotificationBar = (props) => {
  const {
    label,
    isVisible,
    top,
    status,
    children,
  } = props

  return (
    <StyledNotificationBar top={top} isVisible={isVisible} status={status} >
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
    </StyledNotificationBar>
  )
}

NotificationBar.defaultProps = {
  label: '',
  top: false,
  isVisible: true,
  status: 'ok',
}

NotificationBar.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
  top: PropTypes.bool,
  status: PropTypes.status,
  children: PropTypes.any,
}

export default withTheme(NotificationBar)
