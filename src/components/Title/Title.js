import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// import Box from '../Box'
import Heading from '../Heading'

const StyledTitle = styled.div`
 margin: 0 1em 0 1em;
`

const Title = (props) => {
  const { label } = props

  return (
    <StyledTitle>
      <Heading tag='h4'>{label}</Heading>
    </StyledTitle>
  )
}

Title.propTypes = {
  label: PropTypes.string,
}

export default Title
