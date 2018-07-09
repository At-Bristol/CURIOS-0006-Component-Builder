import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const getSizing = (size, scale) => {
  let oScale = scale
  let oSize

  if (!oScale) oScale = 1
  if (size === 'xxs') oSize = 1.0
  if (size === 'xs') oSize = 1.5
  if (size === 's') oSize = 2
  if (size === 'ms') oSize = 2.25
  if (size === 'm') oSize = 2.5
  if (size === 'ml') oSize = 2.75
  if (size === 'l') oSize = 3
  if (size === 'xl') oSize = 4
  if (size === 'xxl') oSize = 5

  return `${oSize * oScale}em`
}

const StyledSlider = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${props => getSizing(props.size, 0.1)};
  border-radius: ${props => getSizing(props.size, 0.6)};
  background-color: ${props => props.isOn
    ? props.theme.color.brandColor
    : props.theme.color.greyColorTertiary
};
  transition: .4s;
`
const StyledControl = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 50%;
  background-color: ${props => props.theme.color.inverseTextColor};
  transition: .4s;
  transform: translateX(${props => props.isOn ? '100%' : '0%' });
`

const StyledToggle = styled.div`
  width: ${props => getSizing(props.size, 2)};
  height: ${props => getSizing(props.size, 1.1)};
`

const Toggle = (props) => {
  const {
    isOn,
    size,
  } = props

  return (
    <StyledToggle size={size}>
      <StyledSlider size={size} isOn={isOn}>
        <StyledControl size={size} isOn={isOn}/>
      </ StyledSlider >
    </ StyledToggle>
  )
}

Toggle.defaultProps = {
  isOn: true,
  size: 's',
}

Toggle.propTypes = {
  isOn: PropTypes.bool,
  size: PropTypes.string,
}

export default Toggle
