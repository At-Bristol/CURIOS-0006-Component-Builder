import React from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'
import Box from '../Box'

const Tabs = (props) => {
  const {
    content,
  } = props

  return (
    <Box>
      {
        content.map((e, i) => (
          <Tab
              isSelected={e.isSelected}
              label={e.label}
              key={i}
            />
        ))
      }
    </Box>
  )
}

Tabs.propTypes = {
  content: PropTypes.array,
}

Tabs.defaultProps = {
  content: [],
}

export default Tabs
