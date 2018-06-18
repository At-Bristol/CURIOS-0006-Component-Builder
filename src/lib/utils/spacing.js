const getSpacing = (size, props) => {
  if (size === 'xs') return props.theme.spacing.xs
  if (size === 's') return props.theme.spacing.s
  if (size === 'm') return props.theme.spacing.m
  if (size === 'l') return props.theme.spacing.l
  if (size === 'xl') return props.theme.spacing.xl
  return null
};

const getSpacings = (sizeObj, props) => {
  const {
    horizontal,
    vertical,
  } = sizeObj

  const h = getSpacing(horizontal, props) || 0
  const v = getSpacing(vertical, props) || 0

  return `${v} ${h} ${v} ${h}`
}

export default {
  getSpacing,
  getSpacings,
}
