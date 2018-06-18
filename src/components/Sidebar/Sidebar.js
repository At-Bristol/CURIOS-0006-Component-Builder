import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NavButton from './NavButton'
import NavButtonSub from './NavButtonSub'

// Sidebar

const StyledSidebar = styled.div`
 background-color: ${props => props.theme.color.primaryShade};
 padding:0;
 max-width: ${props => props.visible ? '250px' : 0};
 height: 100%;
 width: 100%;
 border-right : 1px solid ${props => props.theme.color.greyColorPrimary};
 transition: all 1s; 
 overflow: hidden;
`

const Sidebar = (props) => {
  const {
    visible,
    collapsed,
    content,
  } = props

  return (
    <StyledSidebar
      visible={ visible }
      collapsed = {collapsed}
    >
      {
        content.map((e, i) => {
          if (e.sub) {
            return (
              <div>
                <NavButton
                  isSelected={e.isSelected}
                  label={e.label}
                  key={i}
                />
                {
                  e.sub.map((eb, ib) => (
                    <NavButtonSub
                      isVisible={e.isSelected}
                      isSelected={eb.isSelected}
                      label={eb.label}
                      key={ib}
                    />
                    ))
                }
              </div>
            )
          }

          return (
            <NavButton
              isSelected={e.isSelected}
              label={e.label}
              key={i}
            />
          )
        })
      }
    </ StyledSidebar>
  )
}

Sidebar.propTypes = {
  visible: PropTypes.bool,
  collapsed: PropTypes.bool,
  content: PropTypes.array,
}

Sidebar.defaultProps = {
  visible: true,
  collapsed: false,
  content: [],
}

export default Sidebar