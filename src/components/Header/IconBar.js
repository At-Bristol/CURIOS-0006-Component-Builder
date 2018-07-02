import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

import Box from '../Box'
import IconNavButton from '../IconNavButton'

const IconBar = (props) => {
  const {
    content,
  } = props

  return (
    <Box
      alignItems={'center'}
      justify={'end'}
      basis={'30%'}
    >
       {
        content.map((e, i) => (
          <IconNavButton
            key={i}
            icon={e.icon}
            onClick={e.onClick}
            padding={{ horizontal: 'xs' }}
            size={'xs'}
          />
        ))
      }
    </Box>
  )
}

IconBar.propTypes = {
  content: PropTypes.array,
}

IconBar.defaultProps = {
  content: [],
}

export default IconBar
