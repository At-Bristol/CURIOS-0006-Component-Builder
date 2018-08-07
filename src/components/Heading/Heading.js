import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeading = styled.div`
  color: ${(props) => {
    if (props.isInverse) return props.theme.color.inverseTextColor
    if (props.color) return props.color
    return props.theme.color.textColor
  }};
  font-family: ${props => props.isStrong ? props.theme.font.family.heavy : props.theme.font.family.regular};
  font-weight: ${props => props.isStrong ? props.theme.font.weight.heavy : props.theme.font.weight.regular};
  margin: 0;
  padding: 0;
  text-transform: ${props => props.isUppercase ? 'isUppercase' : null};
  text-overflow: ${props => props.isTruncated ? 'ellipsis' : null};
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
  return 'h1'
}

/**
 * Heading component
 * @name Heading
 * @param {string} color - Text Color
 * @param {bool} isStrong - Render strong title (default true)
 * @param {bool} isInverse - Use theme inverseTheme color
 * @param {bool} isTruncated - truncate overflow to ellipsis
 * @param {bool} isUppercase - force text to upper case
 * @param {string} tag - tag between h1 - h6
*/

const Heading = (props) => {
  const {
    tag,
    children,
  } = props

  const Tag = getTag(tag)

  return (
    <Tag {...props}>
      {children}
    </Tag>
  )
}

Heading.propTypes = {
  isStrong: PropTypes.bool,
  tag: PropTypes.string,
  isTruncated: PropTypes.bool,
  isUppercase: PropTypes.bool,
  isInverse: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.color,
}

Heading.defaultProps = {
  isInverse: false,
  isStrong: true,
}

export default Heading
