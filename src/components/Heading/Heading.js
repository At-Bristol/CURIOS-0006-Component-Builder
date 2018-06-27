import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacing } from '../../lib/utils'

const {
  getSpacing,
  getSpacings,
} = spacing

const StyledHeading = styled.h1`
  color: ${(props) => {
    if (props.inverse) return props.theme.color.inverseTextColor
    if (props.color) return props.color
    return props.theme.color.textColor
  }};
  font-family: ${props => props.strong ? props.theme.font.family.heavy : props.theme.font.family.regular};
  font-weight: ${props => props.strong ? props.theme.font.weight.heavy : props.theme.font.weight.regular};
  margin: 0;
  text-transform: ${props => props.uppercase ? 'uppercase' : null};
  text-overflow: ${props => props.truncate ? 'ellipsis' : null};
  padding: ${(props) => {
    if (typeof props.padding === 'object') return getSpacings(props.padding, props)
    return getSpacing(props.padding, props) || 0
  }};
  margin: ${(props) => {
    if (typeof props.margin === 'object') return getSpacings(props.margin, props)
    return getSpacing(props.margin, props)
  }};
`

const H1 = StyledHeading.extend`
  font-size: 5.0em;
`

const H2 = StyledHeading.extend`
  font-size: 4.0em;
`

const H3 = StyledHeading.extend`
  font-size: 3.0em;
`

const H4 = StyledHeading.extend`
  font-size: 2.0em;
`

const H5 = StyledHeading.extend`
  font-size: 1.3em;
`

const H6 = StyledHeading.extend`
  font-size: 0.9em;
`

const getTag = (tag) => {
  if (tag === 'h1') return H1
  if (tag === 'h2') return H2
  if (tag === 'h3') return H3
  if (tag === 'h4') return H4
  if (tag === 'h5') return H5
  if (tag === 'h6') return H6
  return tag
}


const Heading = (props) => {
  const {
    children,
    strong,
    tag,
    invert,
    style,
    padding,
    color,
  } = props

  const Tag = getTag(tag)

  return (
    <Tag
      strong={strong}
      invert={invert}
      style={style}
      padding={padding}
      color={color}
    >
      {children}
    </Tag>
  );
}

Heading.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  margin: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  strong: PropTypes.bool,
  tag: PropTypes.string,
  truncate: PropTypes.bool,
  uppercase: PropTypes.bool,
  invert: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  padding: PropTypes.string,
  color: PropTypes.color,
}

Heading.defaultProps = {
  invert: false,
  strong: true,
  padding: 0,
  style: {},
}

export default Heading
