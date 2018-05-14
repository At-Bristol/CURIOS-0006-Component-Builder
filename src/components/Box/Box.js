import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const createMatch = (template) => {
  const match = input => (
    template.reduce((a, v) => v[0] === input ? v[1] : null, null)
  )

  return match
}

createMatch([])

const Box = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: ${(props) => {
    if (props.alignItems === 'start') return 'flex-start'
    if (props.alignItems === 'end') return 'flex-end'
    if (props.alignItems === 'center') return 'center'
    if (props.alignItems === 'baseline') return 'baseline'
    if (props.alignItems === 'stretch') return 'stretch'
    return 'flex-start'
  }};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  justify-content: ${(props) => {
    if (props.justify === 'start') return 'flex-start'
    if (props.justify === 'end') return 'flex-end'
    if (props.justify === 'center') return 'center'
    if (props.justify === 'between') return 'space-between'
    if (props.justify === 'around') return 'space-around'
    return 'flex-start'
  }};
  align-content: ${(props) => {
    if (props.alignContnet === 'start') return 'flex-start'
    if (props.alignContnet === 'end') return 'flex-end'
    if (props.alignContnet === 'center') return 'center'
    if (props.alignContnet === 'between') return 'space-between'
    if (props.alignContnet === 'around') return 'space-around'
    if (props.alignContnet === 'stretch') return 'stretch'
    return 'stretch'
  }};
`

const Item = styled.div`
`

const StyledBox = (props) => {
  /* eslint-disable no-unused-vars */
  const {
    children,
    wrap = true,
    align,
    alignItems,
    alignContent,
    justify,
    size = 'medium',
  } = props
  /* eslint-enable */

  return (
    <Box
      {...props}
      wrap={wrap}
      justify={justify}
      alignItems={alignItems}
      alignContent={alignContent}
      >
      {Children.map(children, (e, i) => <Item
        {...props}
        wrap={wrap}
        size={size}
        key={i}>
          {e}
      </Item>)}
    </ Box>
  )
}

StyledBox.propTypes = {
  justify: PropTypes.oneOf(['start', 'end', 'center', 'around', 'between', 'evenly']),
  size: PropTypes.oneOf(['full', 'large', 'medium', 'small']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  wrap: PropTypes.bool,
  children: PropTypes.element,
  align: PropTypes.oneOf(['center', 'start', 'end']),
}

export default StyledBox
