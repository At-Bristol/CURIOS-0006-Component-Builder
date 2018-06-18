import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// import Box from '../Box'
import Heading from '../Heading'

const Logo = styled.img`

`

const StyledTitle = styled.div`
 margin: 0 1em 0 1em;
`

const Title = (props) => {
  const {
    label,
    logo,
  } = props

  return (
    <StyledTitle>
      {logo ? <Logo /> : null}
      <Heading tag='h4'>{label}</Heading>
    </StyledTitle>
  )
}

Title.propTypes = {
  label: PropTypes.string,
  logo: PropTypes.logo,
}

Title.defaultProps = {
  logo: false,
}

export default Title
