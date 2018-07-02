import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './ListItem'

const List = (props) => {
  const {
    content,
  } = props

  return (
    content.map((e, i) => <ListItem key={i} {...e.props} />)
  )
}

List.propTypes = {
  content: PropTypes.array,
}

List.defaultProps = {
  content: [],
}

export default List
