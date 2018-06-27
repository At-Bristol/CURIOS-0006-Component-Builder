import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box'


const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => `linear-gradient(${props.theme.color.imageOverlayGradient}, rgba(0,0,0,0.0))`};
  z-index: -1;
`

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${(props) => {
    if (props.isTransparent) return 'rgba(0,0,0,0)';
    if (props.inverted) return 'black'
    return 'white'
  }};
  border-bottom:${props => `1px solid ${props.theme.color.textColor}`};
  height: 60px;
  z-index: 100;
  position: ${props => props.fixed ? 'fixed' : 'null'};
`

const Header = (props) => {
  /* eslint-disable no-unused-vars */
  const {
    fixed,
    inverted,
    children,
    isTransparent,
    isGradient,
  } = props
  /* eslint-enable */

  return (
    <StyledHeader
      fixed={fixed}
      isTransparent={isTransparent}
      inverted={inverted}
    >
      { isGradient ? <GradientOverlay /> : null }
        <Box alignItems={'center'} justify={'end'}>
          { children }
        </Box>
    </StyledHeader>
  )
}

Header.propTypes = {
  fixed: PropTypes.bool,
  justify: PropTypes.oneOf(['start', 'end', 'center', 'around', 'between', 'evenly']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  children: PropTypes.node,
  position: PropTypes.number,
  inverted: PropTypes.bool,
  isTransparent: PropTypes.bool,
  isGradient: PropTypes.bool,
  isSelected: PropTypes.bool,
}

Header.defaultProps = {
  fixed: true,
  inverted: false,
  isTransparent: false,
  isGradient: false,
  isSelected: false,
}

export default Header
