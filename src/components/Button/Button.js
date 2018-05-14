import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlainButton = styled.div`
  font-family: ${props => props.theme.font.family.bold};
  color: ${props => props.shade === 'dark' ? 'black' : 'white'};
  cursor: ${props => props.disabled ? null : 'pointer'};
`

const BorderedButton = styled.button`
  background-color: ${(props) => {
    if (props.secondary) return 'transparent'
    if (props.critical) return props.theme.color.statusColorCritical
    return props.theme.color.accentColorPrimary
  }};
  font-family: ${props => props.theme.font.family.regular};
  font-size: 1.0em;
  color: ${(props) => {
    if (props.critical && props.secondary) return props.theme.color.statusColorCritical
    if (props.secondary) return props.theme.color.accentColorPrimary
    return props.theme.color.inverseTextColor
  }}; 
  margin: ${props => props.fill ? '0% 0.5%' : null};
  padding: 0.5em 1.0em;
  border-style: solid;
  border-color: ${(props) => {
    if (props.critical) return props.theme.color.statusColorCritical
    return props.theme.color.accentColorPrimary
  }};
  border-width: 0.15em;
  border-radius: ${props => props.theme.radius.topRight};
  cursor: pointer;
  transition: transform 50ms;
  width:${props => props.fill ? '99%' : null};
  &:active {
    transform: translate(0%, 3%)
  }
`;

const Button = props => props.plain
  ? <PlainButton {...props}>{props.label}</PlainButton>
  : <BorderedButton {...props}>{props.label}</BorderedButton>

Button.propTypes = {
  plain: PropTypes.bool,
  label: PropTypes.string,
}

const StyledButton = (props) => {
  /* eslint-disable no-unused-vars */
  const {
    a11yTitle,
    accent,
    align,
    box,
    children,
    className,
    critical,
    fill = false,
    hoverIndicator,
    href,
    icon,
    label,
    onClick,
    path,
    plain,
    primary,
    reverse,
    secondary,
    type,
  } = props
  /* eslint-enable */

  return (
    <Button {...props}>
      {label}
    </Button>
  )
}

StyledButton.propTypes = {
  a11yTitle: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.object,
  accent: PropTypes.bool,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  box: PropTypes.bool,
  fill: PropTypes.bool,
  critical: PropTypes.bool,
  hoverIndicator: PropTypes.oneOfType([
    PropTypes.oneOf(['background']),
    PropTypes.shape({
      background: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
      ]),
    }),
  ]),
  href: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.node,
  method: PropTypes.oneOf(['push', 'replace']),
  onClick: PropTypes.func,
  path: PropTypes.string,
  plain: PropTypes.bool,
  primary: PropTypes.bool,
  reverse: PropTypes.bool,
  secondary: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

StyledButton.defaultProps = {
  method: 'push',
  type: 'button',
  primary: true,
  secondary: false,
  fill: false,
};

StyledButton.contextTypes = {
  router: PropTypes.object,
};

export default StyledButton;
