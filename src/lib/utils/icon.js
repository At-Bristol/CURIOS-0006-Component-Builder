const getIcon = (status) => {
  if (status === 'ok') return 'okOutline'
  if (status === 'warning') return 'warningOutline'
  if (status === 'error') return 'errorOutline'
  if (status === 'unknown') return 'unknownOutline'
  if (status === 'disabled') return 'disabled'
  if (status === 'critical') return 'criticalOutline'
  return null
}

export default {
  getIcon,
}
