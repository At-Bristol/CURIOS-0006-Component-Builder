import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../Icon'
import Box from '../Box'

const StyledIconNavButton = styled.div`
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: ${props => props.theme.color.brandColor}
  }
`

const IconNavButton = (props) => {
  const {
    icon,
  } = props

  return (
    <StyledIconNavButton>
      <Box padding={'xl'}>
        <Icon icon={icon} inverse={true} mono={true}/>
      </ Box>
    </ StyledIconNavButton>
  )
}

IconNavButton.propTypes = {
  icon: PropTypes.string,
}

IconNavButton.defaultProps = {
  icon: 'menu',
}

export default IconNavButton
