import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../Icon'
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

const StyledOutline = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: ${props => (
    `${getSizing(props.size, 0.1)} 
     solid 
     ${props.isOn
      ? props.theme.color.brandColor
      : props.theme.color.greyColorTertiary
    }
    `
  )};
  border-radius: ${props => getSizing(props.size, 0.6)};
`

const StyledRadio = styled.div`
  width: ${props => getSizing(props.size, 1)};
  height: ${props => getSizing(props.size, 1)};
`

const Radio = (props) => {
  const {
    isOn,
    size,
  } = props

  return (
    <StyledRadio size={size}>
      <StyledOutline size={size} isOn={isOn}>
        <Box alignItems={'center'} justify={'center'}>
        <Icon icon={'add'} size={'xs'}/>
        </ Box>
      </ StyledOutline >
    </ StyledRadio>
  )
}

Radio.defaultProps = {
  isOn: false,
  size: 's',
}

Radio.propTypes = {
  isOn: PropTypes.bool,
  size: PropTypes.string,
}

export default Radio
