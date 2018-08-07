
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'

const StyledP = styled.p`
  color: ${props => props.isInverse ? props.theme.color.inverseTextColor : props.theme.color.textColor};
`

/**
 * Text Component for writing blocks of text
 * @name Text
 * @param {bool} isInverse - Render the notification
*/

const Text = (props) => {
  const {
    children,
    isInverse,
    padding,
  } = props

  return (
    <Box {...props} padding={padding}>
      <StyledP isInverse={isInverse}>
        { children }
      </StyledP>
    </Box>
  )
}

Text.defaultProps = {
  padding: false,
}

Text.propTypes = {
  children: PropTypes.any,
  isInverse: PropTypes.bool,
  padding: PropTypes.object,
}

export default Text
