import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './ListItem'

/**
 * List component for recursivley rendering Lists and Sub lists
 * @name Notification
 * @param {[]} content - Array of content
 * @param {[]} components - (TODO) Array of components to be rendered at each level.
 * If no component exists for level the last component in the array will be used.
*/

const List = (props) => {
  const {
    content,
  } = props

  return (
    <div>
      {
        content.map((e, i) => (
          <div key={i}>
            <ListItem {...e} />
            {
              e.sub && e.isSelected ?
                <List content={e.sub}/>
                : null
            }
          </div>
        ))
      }
    </div>
  )
}

List.defaultProps = {
  content: [],
}

List.propTypes = {
  content: PropTypes.array,
}

export default List
