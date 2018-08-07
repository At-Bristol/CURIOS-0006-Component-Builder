import React from 'react'
import PropTypes from 'prop-types'

import BorderedButton from './BorderedButton'
import PlainButton from './PlainButton'

const StyledButton = (props) => {
  const {
    label,
    isPlain,
  } = props

  return (
    isPlain ?
      <PlainButton {...props}>{label}</PlainButton>
      : <BorderedButton {...props}>{label}</BorderedButton>
  )
}

StyledButton.propTypes = {
  isPlain: PropTypes.bool,
  label: PropTypes.string,
}

export default StyledButton
