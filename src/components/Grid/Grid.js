import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const createColumns = (x) => {
  let string = ''
  for (let i = 0; i < x; i += 1) {
    string += '1fr '
  }
  return string
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => createColumns(props.columns)};
  grid-gap: 0.75em;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 600px){
    grid-template-columns: 1fr;
    grid-gap: 0.2em;
  }
`

const StyledGrid = (props) => {
  /* eslint-disable no-unused-vars */
  const {
    columns = 3,
    children,
  } = props
  /* eslint-enable */

  return (
    <Grid {...props}>
      {children}
    </ Grid>
  )
}

StyledGrid.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node,
}

export default StyledGrid
