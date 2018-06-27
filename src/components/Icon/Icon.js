import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const sizes = (x) => {
  if (x === 'xxs') return '1.0em'
  if (x === 'xs') return '1.5em'
  if (x === 's') return '2.0em'
  if (x === 'm') return '3.0em'
  if (x === 'l') return '3.5em'
  if (x === 'xl') return '5.0em'
  if (x === 'xxl') return '10.0em'
  return '1.5em'
}

const getColorFromStatus = color => ({ fill: color, stroke: color })

const Container = styled.div`
  display: flex;
  align-items: center;
  width: ${props => sizes(props.size)};
  height: ${props => sizes(props.size)};
`

const Icon = (props) => {
  const {
    icon,
    size,
    inverse,
    color,
  } = props

  let oColor

  if (typeof color === 'string') {
    oColor = getColorFromStatus(color)
  } else {
    oColor = color
  }

  oColor = inverse ? getColorFromStatus(props.theme.color.inverseTextColor) : oColor

  let combinedProps

  try {
    combinedProps = {
      ...props.theme.icon[icon].svg,
      ...props.theme.icon.defaults,
      ...props.theme.icon[icon].svg.path,
    }
  } catch (e) {
    console.warn(`icon ${icon} not found`)
  }

  const {
    viewBox,
    fill,
    stroke,
    strokeLinecap,
    strokeLinejoin,
    strokeWidth,
    xmlns,
    d,
  } = combinedProps

  return (
    <Container size={size}>
      <svg
        viewBox={viewBox}
        xmlns={xmlns}
      >
        <path
          d={d}
          fill={oColor ? oColor.fill : fill }
          stroke={oColor ? oColor.stroke : stroke}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeWidth={strokeWidth}
        />
      </svg>
    </Container>
  )
}

Icon.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.object,
  icon: PropTypes.string.isRequired,
  inverse: PropTypes.string,
  color: PropTypes.any,
}

Icon.defaultProps = {
  size: 's',
  icon: 'warningOutline',
  color: null,
}

export default withTheme(Icon)
