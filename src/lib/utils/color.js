const getColorFromStatus = (status, colorObj, defaultColor) => {
  if (status === 'critical') return colorObj.statusColorCritical
  if (status === 'ok') return colorObj.statusColorOk
  if (status === 'warning') return colorObj.statusColorWarning
  if (status === 'error') return colorObj.statusColorError
  if (status === 'disabled') return colorObj.statusColorDisabled
  if (status === 'unknown') return colorObj.statusColorUnknown
  if (defaultColor) return defaultColor
  return colorObj.accentColorPrimary
}

export default {
  getColorFromStatus,
}
