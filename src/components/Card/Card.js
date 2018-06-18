import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image'

import Heading from '../Heading'

const Card = styled.div`
  border-radius: ${props => props.theme.radius.topLeft};
  overflow: hidden;
  width: 100%;
  margin: 0;
  float: left;
  background-color: white; 
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  cursor: ${props => props.onClick ? 'pointer' : null};
  &:hover {
    transform: ${props => props.onClick ? 'translate(0.2%, 2%)' : null}
  }
`

const Body = styled.div`
  padding: 2% 5% ;
`

const Spacer = styled.div`
  margin: 0% 0% 2% 0%;
`

const Date = styled.h4`
  margin: 0;
  padding: 2% 0%;
  color: ${props => props.theme.color.greyColorTertiary};
`

const StyledCard = (props) => {
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
    <Card {...props}>
       {image ? <Image image={image} imagePos={imagePos}/> : null }
       <Body>
          {date ? <Date>{date}</Date> : null }
          <Heading tag='h4' truncate={true}>
            {props.label}
          </Heading>
          <Spacer />
          { children }
      </Body>
      <Spacer />
    </Card>
  )
}

StyledCard.propTypes = {
  date: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  box: PropTypes.bool,
  image: PropTypes.string,
  imagePos: PropTypes.string,
};

StyledCard.contextTypes = {
  router: PropTypes.object,
};

export default StyledCard;
