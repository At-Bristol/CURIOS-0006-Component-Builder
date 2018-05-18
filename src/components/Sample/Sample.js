import React from 'react'
import styled from 'styled-components'

const H1 = styled.h2`
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.elColor};
  margin: 0;
  padding: 20px; 
  text-align: center
`

const Sample = () => <H1>Sample Component</H1>

export default Sample
