import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from './Image'

import Heading from '../Heading'

const StyledCard = styled.div`
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

const Card = (props) => {
  const {
    date,
    children,
    image,
    imagePos,
  } = props

  return (
    <StyledCard {...props}>
       {image ? <Image image={image} imagePos={imagePos}/> : null }
       <Body>
          {date ? <Heading tag='h4'>{date}</ Heading> : null }
          <Heading tag='h4' truncate={true}>
            {props.label}
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
  image: PropTypes.string,
  imagePos: PropTypes.string,
  children: PropTypes.node,
}

Card.defaultProps = {
  date: '',
  label: '',
  image: '',
  imagePos: '',
}

export default Card
