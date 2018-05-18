import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'

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

const StyledAppBarButton = styled.div`
 border-bottom: ${props => props.selected ? '5px solid white' : null};
 flex-grow: 1;
 height: 100%;
 box-sizing: border-box;
`

const AppBarButton = ({ element, isSelected }) => (
  <StyledAppBarButton selected={isSelected}>
    <Box justify={'center'} alignItems={'center'} overflow={'hidden'} >
     {element}
    </Box>
  </StyledAppBarButton>
)

AppBarButton.propTypes = {
  isSelected: PropTypes.bool,
  element: PropTypes.element,
}

const StyledAppBar = styled.div`
  width: 100%;
  background-color: ${props => props.isTransparent ? 'rgba(0,0,0,0)' : 'black'};
  height: 60px;
  z-index: 100;
  position: ${props => props.fixed ? 'fixed' : 'null'};
`

const AppBar = (props) => {
  /* eslint-disable no-unused-vars */
  const {
    fixed,
    shade,
    children,
    justify,
    alignItems,
    isTransparent,
    isGradient,
  } = props
  /* eslint-enable */

  return (
    <StyledAppBar fixed={fixed} isTransparent={isTransparent}>
      { isGradient ? <GradientOverlay /> : null }
        <Box alignItems={'center'}>
          {
            Children.map(children, e => e.type.name === 'Button' ?
              <AppBarButton
                isSelected={e.props.isSelected}
                element={e}
                />
              : e)
          }
        </Box>
      <Line shade={shade}/>
    </StyledAppBar>
  )
}

AppBar.propTypes = {
  fixed: PropTypes.bool,
  justify: PropTypes.oneOf(['start', 'end', 'center', 'around', 'between', 'evenly']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  children: PropTypes.node,
  position: PropTypes.number,
  shade: PropTypes.oneOf(['light', 'dark']),
  isTransparent: PropTypes.bool,
  isGradient: PropTypes.bool,
  isSelected: PropTypes.bool,
}

AppBar.defaultProps = {
  fixed: true,
  shade: 'light',
  isTransparent: false,
  isGradient: false,
  isSelected: false,
}

export default AppBar
