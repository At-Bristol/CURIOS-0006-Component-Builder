import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import IconNavButton from '../IconNavButton'
import Box from '../Box'

const StyledIconSidebar = styled.div`
  background-color: ${props => props.theme.color.greyColorTertiary};
  height: 100%;
  min-width: 3.5em;
  max-width: 3.5em;
  transition: all 1s; 
  overflow: hidden;
`

const IconSidebar = (props) => {
  const {
    content,
  } = props

  return (
    <StyledIconSidebar>
      <Box column={true} alignItems={'center'}>
      {
        content.map((e, i) => (
          <IconNavButton
            mono={true}
            inverse={true}
            icon={e.icon}
            onClick={e.onClick}
            key={i}
            padding={ 's' }
          />
        ))
      }
      </ Box>
    </StyledIconSidebar>
  )
}

IconSidebar.propTypes = {
  content: PropTypes.array,
}

IconSidebar.defaultProps = {
  content: [],
}

export default IconSidebar
