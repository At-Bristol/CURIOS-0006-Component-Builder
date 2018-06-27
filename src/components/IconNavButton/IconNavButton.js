import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../Icon'
import Box from '../Box'

const StyledIconNavButton = styled.div`
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.color.brandColor}
  }
`

const IconNavButton = (props) => {
  const {
    icon,
    inverse,
    mono,
    padding,
    size,
  } = props

  return (
    <StyledIconNavButton>
      <Box padding={padding}>
        <Icon
          icon={icon}
          inverse={inverse}
          mono={mono}
          size={size}/>
      </ Box>
    </ StyledIconNavButton>
  )
}

IconNavButton.propTypes = {
  icon: PropTypes.string,
  inverse: PropTypes.bool,
  mono: PropTypes.bool,
  padding: PropTypes.bool,
  size: PropTypes.string,
}

IconNavButton.defaultProps = {
  icon: 'menu',
  inverse: false,
  mono: false,
  size: 'xs',
}

export default IconNavButton
