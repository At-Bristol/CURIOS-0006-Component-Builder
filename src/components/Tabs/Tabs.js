import React from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'
import Box from '../Box'

/**
 * Tab component
 * @name Text
 * @param {[]} content - Content for Tabs
 * @param {bool} isInverse - Render with inverted colors
 * @param {bool} isResponsive - Do the tabs stack vertically on mobile screen width
*/

const Tabs = (props) => {
  const {
    content,
  } = props

  return (
    <Box>
      {
        content.map((e, i) => (
          <Tab
            key={i}
            isSelected={e.isSelected}
            label={e.label}
          />
        ))
      }
    </Box>
  )
}

Tabs.defaultProps = {
  content: [],
}

Tabs.propTypes = {
  content: PropTypes.array,
}

export default Tabs
