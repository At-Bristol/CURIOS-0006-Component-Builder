import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'
import Heading from '../Heading'
import Icon from '../Icon'

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

const StateIndicator = (props) => {
  const {
    isSub,
    isSelected,
  } = props

  const size = 'xxs'

  if (isSub) {
    if (isSelected) return <Icon icon={'remove'} size={size}/>
    return <Icon icon={'add'} size={size}/>
  }
  return <Icon icon={'expand'} size={size}/>
}

StateIndicator.propTypes = {
  isSelected: PropTypes.bool,
  isSub: PropTypes.bool,
}

StateIndicator.defaultProps = {
  isSelected: false,
  isSub: false,
}

const NavButton = (props) => {
  const {
    label,
    isSelected,
    isSub,
  } = props

  return (
    <StyledNavButton isSelected={isSelected}>
        <Box padding={{ vertical: 'm' }}>
          <Box alignItems={'center'} justify={'between'} padding={{ horizontal: 'm' }}>
            {
              isSelected
                ? <Heading tag={'h5'}>{label}</Heading>
                : <Heading tag={'h6'} strong={false}>{label}</Heading>
            }
            {
              <StateIndicator isSub={isSub} isSelected={isSelected} />
            }
          </Box>
        </Box>
    </StyledNavButton>
  )
}

NavButton.propTypes = {
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  isSub: PropTypes.bool,
}

NavButton.defaultProps = {
  label: '',
  isSelected: false,
  isSub: false,
}
export default NavButton
