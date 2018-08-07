import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from './Image'
import Heading from '../Heading'

import StyledMiniCard from './StyledMiniCard'
import StyledMaxCard from './StyledMaxCard'

const StyledCard = (props) => {
  const {
    isMini,
  } = props

  return (
    isMini ?
      <StyledMiniCard {...props}/>
      : <StyledMaxCard {...props}/>
  )
}

StyledCard.defaultProps = {
  isMini: false,
}

StyledCard.propTypes = {
  isMini: PropTypes.bool,
}

const Body = styled.div`
  padding: 2% 5% ;
`

const Spacer = styled.div`
  margin: 0% 0% 2% 0%;
`

/**
 * Card component
 * @name Card
 * @param {string} label - Label overlaying the imageUrl
 * @param {string} date - date for the card
 * @param {string} imageUrl - Background image url
 * @param {string} imagePos - css background-position options
 * @param {bool} isMini - return mini card
*/

const Card = (props) => {
  const {
    date,
    children,
    imageUrl,
    imagePos,
    label,
  } = props

  return (
    <StyledCard {...props}>
       {imageUrl ? <Image imageUrl={imageUrl} imagePos={imagePos}/> : null }
       <Body>
          {date ? <Heading tag='h4'>{date}</ Heading> : null }
          <Heading tag='h4' truncate={true}>
            {label}
          </Heading>
          <Spacer />
          { children }
      </Body>
      <Spacer />
    </StyledCard>
  )
}

Card.propTypes = {
  date: PropTypes.string,
  label: PropTypes.string,
  imageUrl: PropTypes.string,
  imagePos: PropTypes.string,
  children: PropTypes.node,
}

Card.defaultProps = {
  date: '',
  label: '',
  imageUrl: '',
  imagePos: '',
}

export default Card
