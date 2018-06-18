import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'
import Heading from '../Heading'

// NavButton

const StyledNavButton = styled.div`
  color: ${props => props.isSelected ? props.theme.color.textColor : props.theme.color.textColor};
  cursor: pointer;
  border-right: 0.2em solid rgba(0,0,0,0);
  border-bottom: 1px solid ${props => props.theme.color.greyColorQuaternary};
  &:hover {
    background-color: ${props => props.theme.color.greyColorQuinary}
  }
`

const NavButton = (props) => {
  const {
    label,
    isSelected,
  } = props

  return (
    <StyledNavButton isSelected={isSelected}>
        <Box alignItems={'center'} style={{ padding: '0.9em 1.5em' }}>
          {
            isSelected
              ? <Heading tag={'h5'}>{label}</Heading>
              : <Heading tag={'h6'} strong={false}>{label}</Heading>
          }
        </Box>
    </StyledNavButton>
  )
}

NavButton.propTypes = {
  label: PropTypes.string,
  isSelected: PropTypes.bool,
}

NavButton.defaultProps = {
  label: '',
  isSelected: false,
}
export default NavButton
