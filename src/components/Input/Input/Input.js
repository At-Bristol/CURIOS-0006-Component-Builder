import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import Feedback from './Feedback'

import { color, icon } from '../../../lib/utils'

const hasContent = (content) => {
  const getLength = string => string.length

  if (!content) return false
  if (typeof content !== 'string') {
    try {
      if (getLength(content.toString()) < 1) return false
      return true
    } catch (e) {
      console.warn('Is input content able to be converted to string?')
      return false
    }
  }
  if (getLength(content) < 1) return false
  return true
}

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
  if (size === 'xxl') oSize = 6

  return `${oSize * oScale}rem`
}

const StyledContainer = styled.div`
  position: relative; 
  margin-top: ${props => getSizing(props.size, 0.5)};;
`

const StyledBar = styled.span`
  position:relative;
  box-sizing:border-box; 
  display:block; 
  width:100%;

  &:before, 
  &:after {
    content:'';
    height:${props => getSizing(props.size, 0.05)}; 
    width:0;
    bottom:0; 
    position:absolute;
    background-color:${props => props.color ? props.color : props.theme.color.brandColor}; 
    transition:0.3s cubic-bezier(0.8,0.1,0.8,0.3); 
  }

`

const StyledLabel = styled.div`
  color: ${props => props.isDisabled ? props.color : props.theme.color.textColor}; 
  box-sizing:border-box;
  font-size: ${props => getSizing(props.size, 0.55)};
  position:absolute;
  pointer-events:none;
  top: ${props => getSizing(props.size, 0.25)};
  transition:0.2s cubic-bezier(0.8,0.1,0.8,0.3); 
`

const StyledInput = styled.input`
  padding: ${props => getSizing(props.size, 0.3)};;
  padding-right: 0;
  padding-left: 0;
  display:block;
  width:100%;
  border:none;
  border-bottom:${props => `${getSizing(props.size, 0.02)} solid ${props.isDisabled ? props.color : props.theme.color.textColor}`};  
  box-sizing:border-box;
  outline: none;
  box-shadow: none;
  color: ${props => props.isDisabled ? props.color : null};
  top: ${props => hasContent(props.content) ? getSizing(props.size, -0.5) : null};
  font-size: ${props => getSizing(props.size, 0.55)};

  &:focus ~ ${StyledLabel} {
    top: ${props => getSizing(props.size, -0.50)};
    font-size: ${props => getSizing(props.size, 0.475)};
    color:${props => props.color ? props.color : props.theme.color.brandColor};
  }

  &:focus ~ ${StyledBar}:before,
  &:focus ~ ${StyledBar}:after {
    width:100%;
  } 
`

const Input = (props) => {
  const {
    isDisabled,
    isRequired,
    isValid,
    feedback,
    label,
    size,
    content,
  } = props

  const getStatusFromProps = () => {
    if (isDisabled) return 'disabled'
    if (isRequired && !content) return 'warning'
    if (isValid) return 'ok'
    return 'critical'
  }

  const getIconFromProps = () => {
    if (isRequired && !content) return 'warning'
    if (isValid) return 'ok'
    return 'critical'
  }

  const statusIcon = icon.getIcon(getIconFromProps())

  const statusColor = color.getColorFromStatus(
    getStatusFromProps(),
    props.theme.color,
    // eslint-disable-next-line
    props.theme.brandColor
  )

  return (
    <StyledContainer size={size}>
      {
        isDisabled ?
          <StyledInput {...props} color={statusColor} style={{ backgroundColor: 'transparent' }} disabled/>
          : <StyledInput {...props} color={statusColor}/>
      }
      <StyledLabel size={size} color={statusColor} {...props}>{label}</StyledLabel>
      <StyledBar size={size} color={statusColor}/>
      {
        feedback ?
          <Feedback {...props}
            color={statusColor}
            icon={statusIcon}
          />
          : null
      }
    </StyledContainer>
  )
}

Input.defaultProps = {
  isValid: true,
  isRequired: false,
  isDisabled: false,
  content: null,
  label: 'Input',
  size: 's',
  feedback: false,
}

Input.propTypes = {
  isValid: PropTypes.bool,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  content: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  feedback: PropTypes.string,
  theme: PropTypes.object,
}

export default withTheme(Input)
