import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'

const Indicator = styled.div`
  width: 15%;
  background-color: ${props => props.shade === 'dark' ? 'black' : 'white'};
  height: 0.3em;
  left: ${props => `${props.position}em`};
  bottom: 0;
  z-index: 1;
  position: absolute;
`

const Line = styled.div`
  width: 100%;
  background-color: ${props => props.shade === 'dark' ? 'black' : 'white'};
  height: 0.1em;
  bottom: 0.1em;
  z-index: 1;
  position: absolute;
`

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => `linear-gradient(${props.theme.color.imageOverlayGradient}, rgba(0,0,0,0.0))`};
  z-index: -1;
`

const Selector = ({
  position,
  shade,
}) => (
    <div>
      <Indicator shade={shade} position={position}/>
      <Line shade={shade}/>
    </div>
)

Selector.propTypes = {
  position: PropTypes.number,
  shade: PropTypes.oneOf(['light', 'dark']),
}


const AppBar = styled.div`
  width: 100%;
  background-color: pink;
  height: 60px;
  left: 0;
  top: 0;
  z-index: 100;
  position:relative;
`

const StyledAppBar = (props) => {
  /* eslint-disable no-unused-vars */
  const {
    shade = 'light',
    position = 15,
    children,
    justify = 'around',
    alignItems = 'center',
    transparent = false,
  } = props
  /* eslint-enable */

  return (
    <AppBar>
      <GradientOverlay />
        <Box justify={justify} alignItems={alignItems}>
          {children}
        </Box>
      <Selector shade={shade} position={position}/>
    </ AppBar>
  )
}

StyledAppBar.propTypes = {
  justify: PropTypes.oneOf(['start', 'end', 'center', 'around', 'between', 'evenly']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  children: PropTypes.element,
  position: PropTypes.number,
  shade: PropTypes.oneOf(['light', 'dark']),
  transparent: PropTypes.bool,
}

export default StyledAppBar
