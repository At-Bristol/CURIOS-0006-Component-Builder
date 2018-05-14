import styled from 'styled-components'

const Item = styled.div`
  margin: 0 0 0.4em 0;

  width:${(props) => {
    if (props.size === 'small') return '19.5%'
    if (props.size === 'medium') return '33%'
    if (props.size === 'large') return '49%'
    if (props.size === 'full') return '100%'
    return '100%'
  }}

  @media only screen and (max-width: 1030px){
    width:${(props) => {
    if (props.size === 'small') return '33%'
    if (props.size === 'medium') return '49%'
    if (props.size === 'large') return '100%'
    if (props.size === 'full') return '100%'
    return '100%'
  }}
  }

  @media only screen and (max-width: 760px){
    width:${(props) => {
    if (props.size === 'small') return '49%'
    if (props.size === 'medium') return '100%'
    if (props.size === 'large') return '100%'
    if (props.size === 'full') return '100%'
    return '100%'
  }}
  }
`

export default Item
