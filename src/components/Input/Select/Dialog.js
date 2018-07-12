import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Item from './Item'

const StyledDialog = styled.div`
  background-color: white;
  color: ${props => props.theme.color.textColor};
  border: ${props => `${props.theme.color.textColor} 1px solid`};
  border-top: none;
  position: relative;
  z-index: 1000;
  overflow: scroll;
  max-height: 30vh;

`

const Dialog = (props) => {
  const {
    options,
  } = props

  return (
    <StyledDialog>
      {
        options.map((e, i) => <Item key={i} {...e}/>)
      }
    </StyledDialog>
  )
}

Dialog.defaultProps = {
  options: [],
}

Dialog.propTypes = {
  options: PropTypes.array,
}

export default Dialog
