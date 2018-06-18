import React from 'react'
import PropTypes from 'prop-types'

const Icon = (props) => {
  const {
    svg,
    size,
  } = props

  return (
    <div svg={svg} size={size}/>
  )
}

Icon.propTypes = {
  svg: PropTypes.string,
  size: PropTypes.string,
}

Icon.defaultProps = {
  svg: null,
  size: 'm',
}

export default Icon
