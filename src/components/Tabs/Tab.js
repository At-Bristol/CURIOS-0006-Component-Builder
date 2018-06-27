import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Box from '../Box'
import Button from '../Button'

const StyledTab = styled.div`
  border-bottom: ${props => props.selected ? `3px solid ${props.theme.color.textColor}` : null};
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
`

const Tab = (props) => {
  const {
    isSelected,
    label,
  } = props

  return (
    <StyledTab selected={isSelected}>
      <Box alignItems={'center'} justify={'center'}>
        <Button label={label} plain={true}/>
      </Box>
    </StyledTab>
  )
}

Tab.propTypes = {
  isSelected: PropTypes.bool,
  label: PropTypes.string,
}

export default Tab
