import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Box from '../Box'
import Button from '../Button'

const StyledTab = styled.div`
 border-bottom: ${props => props.selected ? '3px solid black' : null};
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
      <Box justify={'center'} alignItems={'center'} overflow={'hidden'}>
        <Button label={label} plain={true}></Button>
      </Box>
    </StyledTab>
  )
}

Tab.propTypes = {
  isSelected: PropTypes.bool,
  label: PropTypes.string,
}

const Tabs = (props) => {
  const {
    content,
  } = props

  return (
    content.map((e, i) => (
      <Tab
          isSelected={e.isSelected}
          label={e.label}
          key={i}
        />
    ))
  )
}

Tabs.propTypes = {
  content: PropTypes.array,
}

Tabs.defaultProps = {
  content: [],
}

export default Tabs
