import styled from 'styled-components'

const StyledMaxCard = styled.div`
  border-radius: ${props => props.theme.radius.topLeft};
  overflow: hidden;
  width: 100%;
  margin: 0;
  float: left;
  background-color: white; 
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  cursor: ${props => props.onClick ? 'pointer' : null};
  &:hover {
    transform: ${props => props.onClick ? 'translate(0.2%, 2%)' : null}
  }
`

export default StyledMaxCard
