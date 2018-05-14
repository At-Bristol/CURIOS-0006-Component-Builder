import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const MiniCard = styled.div`
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

const Date = styled.h4`
  margin: 0;
  padding: 2% 0%;
`

const StyledMiniCard = (props) => {
  /* eslint-disable no-unused-vars */
  const {
    date,
    children,
    image,
    label,
    imagePos,
  } = props

  /* eslint-enable */
  return (
    <MiniCard {...props}>
       <Image image={image} imagePos={imagePos}/>
       <GradientOverlay />
       <Body>
          {date ? <Date>{date}</Date> : null }
          <Heading tag='h4' truncate={true}>
            {props.label}
          </Heading>
          <Spacer />
      </Body>
    </MiniCard>
  )
}

StyledMiniCard.propTypes = {
  date: PropTypes.string,
  children: PropTypes.element,
  label: PropTypes.string,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  box: PropTypes.bool,
  image: PropTypes.string,
  imagePos: PropTypes.string,
};

StyledMiniCard.contextTypes = {
  router: PropTypes.object,
};

export default StyledMiniCard
