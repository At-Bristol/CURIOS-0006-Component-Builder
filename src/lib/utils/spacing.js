const getSpacing = (size, props) => {
  try {
    return props.theme.spacing[size]
  } catch (e) {
    return null
  }
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
