import styled from 'styled-components'

const StyledMiniCard = styled.div`
  border-radius: ${props => props.theme.radius.topLeft};
  overflow: hidden;
  width: 100%;
  position: relative;
  background-color: 'white'; 
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.color.imageOverlayText};
  cursor: ${props => props.onClick ? 'pointer' : null};
  &:hover {
    transform: ${props => props.onClick ? 'translate(0.2%, 2%)' : null}
  }
`

export default StyledMiniCard
