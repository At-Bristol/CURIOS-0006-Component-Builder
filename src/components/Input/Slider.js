import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'

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

const StyledCompleteRail = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${props => getSizing(props.size, 0.1)};
  border-radius: ${props => getSizing(props.size, 0.6)};
  background-color: ${props => props.theme.color.brandColor};
  transition: .4s;
`
const StyledControl = styled.div`
  cursor: pointer;
  height: 100%;
  width: ${props => getSizing(props.size, 0.9)};
  border-radius: 50%;
  background-color: ${props => props.theme.color.greyColorPrimary};
  transition: .4s;
  float: right;
`

const StyledSlider = styled.div`
  width: calc(
    ${props => `${props.progress}%`} 
    + ${props => `${getSizing(props.size, 1.1 * (1 - (props.progress / 100)))}`}  
  ); 
  height: 100%;
  max-width: 100%;
`

const StyledRail = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.greyColorQuaternary};
  height: ${props => getSizing(props.size, 1.1)};
  border-radius: ${props => getSizing(props.size, 0.6)};
`

const Indicator = styled.div`
  text-align: center;
  margin-left: calc(
    ${props => `${props.progress}%`} 
    + ${props => `${getSizing(props.size, 0.4 * (1 - (props.progress / 1000)))}`}  
  );
`

const Label = (props) => {
  const {
    label,
  } = props

  return (
    <Box alignItem={'center'} fill={false}>
      {label}
      <Box padding={{ horizontal: 'xs' }} fill={false}/>
    </Box>
  )
}

const SliderBody = (props) => {
  const {
    size,
    progress,
  } = props

  return (
    <StyledRail size={size}>
      <StyledSlider size={size} progress={progress}>
        <StyledCompleteRail size={size}>
          <StyledControl size={size} />
        </ StyledCompleteRail >
      </ StyledSlider>
    </StyledRail>
  )
}

const Slider = (props) => {
  const {
    label,
    progress,
    size,
  } = props

  return (
    <Box alignItems={'center'}>
      { label ? <Label label={label} /> : null }
      <SliderBody {...props}/>
    </Box>
  )
}

Slider.defaultProps = {
  progress: 50,
  size: 's',
  label: false,
}

Slider.propTypes = {
  label: PropTypes.string,
  progress: PropTypes.number,
}

export default Slider
