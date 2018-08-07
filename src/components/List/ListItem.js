import React from 'react'
import PropTypes from 'prop-types'

const ListItem = (props) => {
  const {
    label,
    isSelected,
  } = props

  return (
    isSelected ?
      <ul>{label}</ul>
      : <ul>{label}</ul>
  )
}

ListItem.defaultProps = {
  label: '',
  isSelected: false,
}

ListItem.propTypes = {
  label: PropTypes.string,
  isSelected: PropTypes.bool,
}

export default ListItem
