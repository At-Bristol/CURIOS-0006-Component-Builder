import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../Heading'

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => `linear-gradient(rgba(0,0,0,0.0), ${props.theme.color.imageOverlayGradient})`};
`

const StyledHero = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: ${props => `${props.height}vh`};
  margin: 0;
  background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${props => props.imagePos}; 
  cursor: ${props => props.onClick ? 'pointer' : null};
`

const Hero = (props) => {
  const {
    label,
  } = props

  /* eslint-enable */
  return (
    <StyledHero {...props}>
       <GradientOverlay />
          <Heading tag='h1' truncate={true} style={{ color: 'white', zIndex: 1 }}>
            {label}
          </Heading>
    </StyledHero>
  )
}

Hero.propTypes = {
  children: PropTypes.element,
  label: PropTypes.string,
  image: PropTypes.string,
  imagePos: PropTypes.string,
};

Hero.defaultProps = {
  imagePos: 'center',
  height: 50,
};

export default Hero
