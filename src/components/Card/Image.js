import styled from 'styled-components'

const Image = styled.div`
  background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100%;
  background-position: ${props => props.imagePos}; 
`

export default Image
