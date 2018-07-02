import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledToggle = styled.input`
`

const Toggle = (props) => {
  const {
    thing,
  } = props

  return (
    <StyledToggle type={'checkbox'} thing={thing}/>
  )
}

Toggle.defaultProps = {
  thing: false,
}

Toggle.propTypes = {
  thing: PropTypes.bool,
}

export default Toggle
