import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'

const StyledListItem = styled.div`
  
`

const ListItem = (props) => {
  const {
    content,
  } = props

  return (
    <StyledListItem>
      <Box >
         {content}
      </Box>
    </StyledListItem>
  )
}

ListItem.propTypes = {
  content: PropTypes.object,
}

ListItem.defaultProps = {
  content: {},
}

export default ListItem
