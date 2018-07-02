import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Box from '../Box'
import Button from '../Button'

const Line = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${props => props.theme.color.textColor};
  position: absolute;
  left: 0;
  bottom: 0;
`

const Tab = (props) => {
  const {
    isSelected,
    label,
  } = props

  return (
    <Box position={'relative'}>
      <Box alignItems={'center'} justify={'center'}>
        <Button label={label} plain={true}/>
      </Box>
      { isSelected ? <Line /> : null }
    </Box>
  )
}

Tab.propTypes = {
  isSelected: PropTypes.bool,
  label: PropTypes.string,
}

export default Tab
