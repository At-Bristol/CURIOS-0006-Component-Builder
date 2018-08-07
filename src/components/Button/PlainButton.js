import styled from 'styled-components'

const PlainButton = styled.div`
  font-size: 1.0em;
  text-align: center;
  font-family: ${props => props.theme.font.family.bold};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.color.textColor};
  cursor: ${props => props.disabled ? null : 'pointer'};
`

export default PlainButton
