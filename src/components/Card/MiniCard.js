import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Heading from '../Heading'
import Image from './Image'

const Body = styled.div`
  padding: 2% 5% ;
  position: absolute;
  left: 0;
  bottom: 0;
`

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => `linear-gradient(rgba(0,0,0,0.0), ${props.theme.color.imageOverlayGradient})`};
`

const StyledMiniCard = styled.div`
  border-radius: ${props => props.theme.radius.topLeft};
  overflow: hidden;
  width: 100%;
  position: relative;
  background-color: 'white'; 
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.color.imageOverlayText};
  cursor: ${props => props.onClick ? 'pointer' : null};
  &:hover {
    transform: ${props => props.onClick ? 'translate(0.2%, 2%)' : null}
  }
`

const Spacer = styled.div`
  margin: 0 0 0.75em 0;
`

const MiniCard = (props) => {
  const {
    date,
    image,
    label,
    imagePos,
  } = props

  return (
    <StyledMiniCard {...props}>
       <Image image={image} imagePos={imagePos}/>
       <GradientOverlay />
       <Body>
          {date ? <Heading tag='h4'>{date}</ Heading> : null }
          <Heading tag='h4' truncate={true}>
            {label}
          </Heading>
          <Spacer />
      </Body>
    </StyledMiniCard>
  )
}

MiniCard.defaultProps = {
  date: '',
  label: '',
  image: '',
  imagePos: 'center',
}

MiniCard.propTypes = {
  date: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.string,
  imagePos: PropTypes.string,
}

export default StyledMiniCard
