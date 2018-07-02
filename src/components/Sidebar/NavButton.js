import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'
import Heading from '../Heading'
import Icon from '../Icon'

// NavButton

const Line = styled.div`
  margin: ${props => `0 ${props.theme.spacing.s}`};
  border-bottom: ${props => `1px solid ${props.theme.color.greyColorQuaternary}`};
`

const StyledNavButton = styled.div`
  color: ${props => props.isSelected ? props.theme.color.textColor : props.theme.color.textColor}; 
  cursor: pointer;
  border-right: 0.2em solid rgba(0,0,0,0);
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
    if (isSelected) return <Icon icon={'collapse'} size={size}/>
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
    icon,
  } = props

  return (
    <StyledNavButton isSelected={isSelected}>
        <Box padding={{ vertical: 'ms' }}>

          <Box alignItems={'center'} justify={'between'} padding={{ horizontal: 's' }}>
            <Box alignItems={'center'}>
              { icon
                  ? <Icon icon={icon} size={'xs'}/>
                  : null
              }
              <Box padding={icon ? 's' : ''}>
                {
                  isSelected
                    ? <Heading tag={'h5'}>{label}</Heading>
                    : <Heading tag={'h5'} strong={false}>{label}</Heading>
                }
              </ Box>
            </Box >
              {
                <StateIndicator isSub={isSub} isSelected={isSelected} />
              }
          </Box>
        </Box>
        <Line />
    </StyledNavButton>
  )
}

NavButton.propTypes = {
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  isSub: PropTypes.bool,
  icon: PropTypes.string,
}

NavButton.defaultProps = {
  label: '',
  isSelected: false,
  isSub: false,
  icon: null,
}
export default NavButton
