
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'

const StyledP = styled.p`
  color: ${props => props.inverse ? props.theme.color.inverseTextColor : props.theme.color.textColor};
`

const Text = (props) => {
  const {
    children,
    inverse,
    padding,
  } = props

  return (
    <Box {...props} padding={padding}>
      <StyledP inverse={inverse}>
        { children }
      </StyledP>
    </Box>
  )
}

Text.propTypes = {
  children: PropTypes.any,
  inverse: PropTypes.bool,
  padding: PropTypes.object,
}

Text.defaultProps = {
  padding: { horizontal: 's' },
}

export default Text
