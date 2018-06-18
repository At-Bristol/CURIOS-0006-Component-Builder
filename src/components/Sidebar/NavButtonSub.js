import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'
import Heading from '../Heading'

// SubNavButton

const StyledNavButtonSub = styled.div`
  color: ${props => props.isSelected ? props.theme.color.brandColor : props.theme.color.textColor};
  border-left: ${props => props.isSelected ? `0.2em solid ${props.theme.color.brandColor}` : '0.2em solid rgba(0,0,0,0)'};
  border-bottom: 1px solid ${props => props.theme.color.greyColorQuaternary}; 
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
      <Box alignItems={'center'} style={{ padding: '1em 1.5em' }}>
        <Heading tag={'h6'} strong={isSelected}>{label}</Heading>
      </Box>
    </StyledNavButtonSub>
  )
}

NavButtonSub.propTypes = {
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  isVisible: PropTypes.string,
}

NavButtonSub.defaultProps = {
  label: '',
  isSelected: false,
  isVisible: 'block',
}


export default NavButtonSub
