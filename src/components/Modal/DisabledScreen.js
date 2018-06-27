import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDisabledScreen = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0,0,0,0.8);
  position: absolute
  z-index: 1000;
`

const DisabledScreen = (props) => {
  const {
    isVisible,
  } = props

  return (
    isVisible ? <StyledDisabledScreen /> : null
  )
}

DisabledScreen.propTypes = {
  isVisible: PropTypes.bool,
}

DisabledScreen.defaultProps = {
  isVisible: false,
}

export default DisabledScreen
