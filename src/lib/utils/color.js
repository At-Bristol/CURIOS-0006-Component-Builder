const getColorFromStatus = (status, color) => {
  if (status === 'critical') return color.statusColorCritical
  if (status === 'ok') return color.statusColorOk
  if (status === 'warning') return color.statusColorWarning
  if (status === 'error') return color.statusColorError
  if (status === 'disabled') return color.statusColorDisabled
  if (status === 'unknown') return color.statusColorUnknown
  return color.accentColorPrimary
}

export default {
  getColorFromStatus,
}
