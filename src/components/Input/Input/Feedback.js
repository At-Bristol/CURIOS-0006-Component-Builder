import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../../Box'
import Icon from '../../Icon'

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

const StyledFeedback = styled.div`
  padding-left: 0;
  font-size: ${props => getSizing(props.size, 0.475)};
  padding-top: ${props => getSizing(props.size, 0.10)};
  color: ${props => props.color ? props.color : props.theme.color.textColor};
`

const Feedback = (props) => {
  const {
    color,
    feedback,
    icon,
    isRequired,
    content,
  } = props

  const oFeedback = isRequired && !content ? 'Required' : feedback

  return (
    <StyledFeedback {...props}>
      <Box alignItems={'center'}>
        <Icon icon={icon} size='xxs' color={color} />
        <Box fill={false} padding={{ horizontal: 'xxs' }}/>
        {oFeedback}
      </Box>
    </StyledFeedback>
  )
}

Feedback.defaultProps = {
  color: null,
  size: null,
  feedback: null,
  isRequired: false,
  content: null,
}

Feedback.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  feedback: PropTypes.string,
  icon: PropTypes.string,
  isRequired: PropTypes.bool,
  content: PropTypes.string,
}

export default Feedback
