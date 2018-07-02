import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box'
import Icon from '../Icon'
import Heading from '../Heading'

const Value = (props) => {
  const {
    label,
    value,
    icon,
    unit,
    trendIcon,
    isIconLast,
  } = props

  return (
    <Box alignItems={'center'} fill={false}>
      <Box alignItems={'baseline'}>
        { !isIconLast ? <Icon icon={icon} size={'xs'}/> : null }
        { unit
          ? <Heading strong={false} tag={'h5'} padding={{ horizontal: 'xs' }}>
              {unit}
            </Heading>
          : null
        }
        <Heading tag={'h3'}>
          {value}
        </ Heading>
        { label
          ? <Heading strong={false} tag={'h5'} padding={{ horizontal: 'xs' }}>
              {label}
            </Heading >
          : null
        }
        { trendIcon ? <Icon icon={trendIcon} size={'xs'} /> : null }
        { isIconLast
          ? <Box fill={false} padding={{ horizontal: 'xs' }}>
              <Icon icon={icon} size={'xs'}/>
            </Box>
          : null
        }
      </ Box>
    </Box>
  )
}

Value.propTypes = {
  value: PropTypes.number,
  label: PropTypes.label,
  icon: PropTypes.string,
  trendIcon: PropTypes.string,
  unit: PropTypes.string,
  isIconLast: PropTypes.bool,
}

Value.defaultProps = {
  value: 0,
  label: null,
  icon: null,
  trendIcon: null,
  unit: null,
  isIconLast: false,
}

export default Value
