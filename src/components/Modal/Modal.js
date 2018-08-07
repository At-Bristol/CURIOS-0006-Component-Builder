// TODO add isDisableBackground

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'
import DisabledScreen from './DisabledScreen'

const StyledModal = styled.div`
  top: 50%; 
  left: 50%; 
  width: 80%;
  max-height: 80%;
  max-width: 760px;
  transform: translate(-50%, -50%);
  background: white; 
  position: absolute;
  overflow: scroll;
  z-index: 1001;
  border-radius: ${props => props.theme.radius.topLeft};
  @media only screen and (max-width: 760px){
    width: 95%;
    max-height: 95%;
  }
`

/**
 * Modal component
 * @name Modal
 * @param {bool} isVisible - Render the modal
 * @param {element} children - Render notification as modal
 */


const Modal = (props) => {
  const {
    isVisible,
    children,
  } = props

  if (!isVisible) return null

  return (
    <Box>
      <StyledModal>
        { children }
      </ StyledModal>
      <DisabledScreen isVisible={isVisible} />
    </Box>
  )
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.any,
}

Modal.defaultProps = {
  isVisible: true,
}

export default Modal
