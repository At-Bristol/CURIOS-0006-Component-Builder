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
  width: ${props => props.fill ? '100%' : null};
  box-sizing: ${props => props.fill ? 'border-box' : null};
  display: flex;
  position: ${props => props.position};
  overflow-y: scroll;
  padding: ${(props) => {
    if (typeof props.padding === 'object') return getSpacings(props.padding, props)
    return getSpacing(props.padding, props) || 0
  }};
  margin: ${(props) => {
    if (typeof props.margin === 'object') return getSpacings(props.margin, props)
    return getSpacing(props.margin, props)
  }};
  flex-direction: ${(props) => {
    if (!props.reverse && !props.column) return 'row'
    if (props.reverse && !props.column) return 'rowReverse'
    if (!props.reverse && props.column) return 'column'
    if (props.reverse && props.column) return 'columnReverse'
    return 'row'
  }};
  flex-basis: ${(props) => {
    if (props.basis === 'content') return 'content'
    if (props.basis) return props.basis
    return 'auto'
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
    if (props.justify === 'evenly') return 'space-evenly'
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

/**
 * Box Component - abstraction of FlexBox
 * @name Box
 * @param {string} justify - One of 'start', 'end', 'center', 'around', 'between', 'evenly'
 * @param {string} size - One of 'full', 'large', 'medium', 'small'
 * @param {string} alignItems - One of 'start', 'end', 'center', 'baseline', 'stretch'
 * @param {string} alignContent - One of 'start', 'end', 'center', 'between', 'around', 'stretch',
 * @param {bool} isWrap - Should wrap
 * @param {bool} isFullscreen - Should be Fullscreen
 * @param {bool} isFill - Should fill horizontally
 * @param {node} children - Children elements
 * @param {string} align - One of 'center', 'start', 'end'
*/

const Box = (props) => {
  const {
    children,
  } = props

  return (
    <StyledBox {...props} >
      {Children.map(children, e => e)}
    </ StyledBox>
  )
}

Box.propTypes = {
  justify: PropTypes.oneOf(['start', 'end', 'center', 'around', 'between', 'evenly']),
  size: PropTypes.oneOf(['full', 'large', 'medium', 'small']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  isWrap: PropTypes.bool,
  children: PropTypes.node,
  align: PropTypes.oneOf(['center', 'start', 'end']),
  isFullscreen: PropTypes.bool,
  isFill: PropTypes.bool,
}

Box.defaultProps = {
  size: 'medium',
  style: {},
  isFullscreen: false,
  padding: 0,
  wrap: false,
  fill: true,
}

export default Box
