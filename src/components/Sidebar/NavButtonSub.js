import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import Box from '../Box'
import Heading from '../Heading'

// SubNavButton

const StyledNavButtonSub = styled.div`
  color: ${props => props.isSelected ? props.theme.color.brandColor : props.theme.color.textColor};
  background-color: ${props => props.isSelected ? props.theme.color.greyColorQuinary : null}; ;
  border-left: ${props => props.isSelected ? `0.2em solid ${props.theme.color.brandColor}` : '0.2em solid rgba(0,0,0,0)'};
  transition: all .1s; 
  width: 100%;
  cursor: pointer;
  display: ${props => props.isVisible ? 'block' : 'none'};
  &:hover {
    background-color: ${props => props.theme.color.greyColorQuinary}
  }
`

const NavButtonSub = (props) => {
  const {
    label,
    isSelected,
    isVisible,
  } = props

  return (
    <StyledNavButtonSub isSelected={isSelected} isVisible={isVisible}>
      <Box padding={{ vertical: 's' }}>
        <Box alignItems={'center'} justify={'between'} padding={{ horizontal: 'm' }}>
          <Heading tag={'h6'} strong={isSelected}>{label}</Heading>
        </Box>
      </Box>
    </StyledNavButtonSub>
  )
}

NavButtonSub.propTypes = {
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  isVisible: PropTypes.string,
  theme: PropTypes.object,
}

NavButtonSub.defaultProps = {
  label: '',
  isSelected: false,
  isVisible: 'block',
}


export default withTheme(NavButtonSub)
