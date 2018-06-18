import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { spacing } from '../../lib/utils'


const {
  getSpacing,
  getSpacings,
} = spacing

const StyledBox = styled.div`
  height: ${props => props.isFullscreen ? '100vh' : '100%'};
  width: 100%;
  display: flex;
  overflow-y: scroll;
  padding: ${(props) => {
    if (typeof props.padding === 'object') return getSpacings(props.padding, props)
    return getSpacing(props.padding, props) || 0
  }};
  margin: ${(props) => {
    if (typeof props.margin === 'object') return getSpacings(props.margin, props)
    return getSpacing(props.margin, props)
  }};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  align-items: ${(props) => {
    if (props.alignItems === 'start') return 'flex-start'
    if (props.alignItems === 'end') return 'flex-end'
    if (props.alignItems === 'center') return 'center'
    if (props.alignItems === 'baseline') return 'baseline'
    if (props.alignItems === 'stretch') return 'stretch'
    return 'flex-start'
  }};
  justify-content: ${(props) => {
    if (props.justify === 'start') return 'flex-start'
    if (props.justify === 'end') return 'flex-end'
    if (props.justify === 'center') return 'center'
    if (props.justify === 'between') return 'space-between'
    if (props.justify === 'around') return 'space-around'
    return 'flex-start'
  }};
  align-content: ${(props) => {
    if (props.alignContent === 'start') return 'flex-start'
    if (props.alignContent === 'end') return 'flex-end'
    if (props.alignContent === 'center') return 'center'
    if (props.alignContent === 'between') return 'space-between'
    if (props.alignContent === 'around') return 'space-around'
    if (props.alignContent === 'stretch') return 'stretch'
    return 'stretch'
  }};
`

const Box = (props) => {
  const {
    children,
    style,
  } = props

  return (
    <StyledBox {...props} style={style} >
      {Children.map(children, e => e)}
    </ StyledBox>
  )
}

Box.propTypes = {
  justify: PropTypes.oneOf(['start', 'end', 'center', 'around', 'between', 'evenly']),
  size: PropTypes.oneOf(['full', 'large', 'medium', 'small']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  wrap: PropTypes.bool,
  children: PropTypes.node,
  align: PropTypes.oneOf(['center', 'start', 'end']),
  style: PropTypes.object,
  isFullscreen: PropTypes.bool,
}

Box.defaultProps = {
  size: 'medium',
  style: {},
  isFullscreen: false,
  padding: 0,
}

export default Box
