import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../Heading'

const Image = styled.div`
  background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 30%;
  background-position: ${props => props.imagePos}; 
`

const Body = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 45%;
`

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => `linear-gradient(rgba(0,0,0,0.0), ${props.theme.color.imageOverlayGradient})`};
`

const Hero = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${props => props.theme.color.imageOverlayText};
`

const StyledHero = (props) => {
  /* eslint-disable no-unused-vars */
  const {
    children,
    image,
    label,
    imagePos,
  } = props

  /* eslint-enable */
  return (
    <Hero {...props}>
       <Image image={image} imagePos={imagePos}/>
       <GradientOverlay />
       <Body>
          <Heading tag='h1' truncate={true}>
            {label}
          </Heading>
      </Body>
    </Hero>
  )
}

StyledHero.propTypes = {
  children: PropTypes.element,
  label: PropTypes.string,
  image: PropTypes.string,
  imagePos: PropTypes.string,
};

export default StyledHero
