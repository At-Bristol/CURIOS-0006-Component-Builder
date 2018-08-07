import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../../Box'
import Heading from '../../Heading'

const StyledItem = styled.div`
   cursor: pointer;
   color: ${props => props.isSelected ? props.theme.color.brandColor : null};
   border-bottom: ${props => props.theme.color.greyColorQuaternary};
   border-left: ${props => props.isSelected ? `0.2em solid ${props.theme.color.brandColor}` : '0.2em solid rgba(0,0,0,0)'};
   &:hover {
    background-color: ${props => props.theme.color.greyColorQuinary}
  }
`

const Item = (props) => {
  const {
    label,
    isSelected,
  } = props

  return (
      <StyledItem isSelected={isSelected}>
        <Box padding={{ vertical: 's' }}>
          <Box alignItems={'center'} padding={{ horizontal: 's' }}>
            <Heading tag={'h6'} strong={isSelected}>
              {label}
            </Heading>
          </Box>
        </Box>
      </StyledItem>
  )
}

Item.defaultProps = {
  label: 'label',
  isSelected: false,
}

Item.propTypes = {
  label: PropTypes.string,
  isSelected: PropTypes.bool,
}

export default Item
