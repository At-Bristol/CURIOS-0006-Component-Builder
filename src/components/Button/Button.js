import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './StyledButton'

/**
 * Button component
 * @param {string} label - the button text
 * @param {string} secondary - the boldness of the button
 * @param {string} status - the status of the button
 * @param {bool} isPlain - render a plain button
 */

const Button = (props) => {
  const {
    label,
  } = props

  return (
    <StyledButton {...props}>
      {label}
    </StyledButton>
  )
}

Button.defaultProps = {
  secondary: false,
  fill: false,
  status: false,
}

Button.propTypes = {
  label: PropTypes.node,
}

export default Button
