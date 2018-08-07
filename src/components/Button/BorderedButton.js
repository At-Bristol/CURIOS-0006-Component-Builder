import styled from 'styled-components'
import { color } from '../../lib/utils'

const {
  getColorFromStatus,
} = color


const BorderedButton = styled.button`
  background-color: ${(props) => {
    if (props.secondary) return 'transparent'
    if (props.status) return getColorFromStatus(props.status, props.theme.color)
    return props.theme.color.accentColorPrimary
  }};
  font-family: ${props => props.theme.font.family.regular};
  font-size: 1.0em;
  color: ${(props) => {
    if (props.mono && props.inverse) return props.theme.color.inverseTextColor
    if (props.mono) return props.theme.color.textColor
    if (props.status && props.secondary) return getColorFromStatus(props.status, props.theme.color)
    if (props.secondary) return props.theme.color.accentColorPrimary
    return props.theme.color.inverseTextColor
  }}; 
  margin: ${props => props.fill ? '0% 0.5%' : null};
  padding: 0.5em 1.0em;
  border-style: solid;
  border-color: ${(props) => {
    if (props.mono && props.inverse) return props.theme.color.inverseTextColor
    if (props.mono) return props.theme.color.textColor
    if (props.status) return getColorFromStatus(props.status, props.theme.color)
    return props.theme.color.accentColorPrimary
  }};
  border-width: 0.15em;
  border-radius: ${props => props.theme.radius.topRight};
  cursor: pointer;
  transition: transform 50ms;
  width:${props => props.fill ? '99%' : null};
  &:active {
    transform: translate(0%, 3%)
  }
`

export default BorderedButton
