import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Modal from '../Modal';
import Heading from '../Heading';
import Button from '../Button';
import Text from '../Text'
import Box from '../Box'
import Icon from '../Icon'

import { color, icon } from '../../lib/utils'

const {
  getColorFromStatus,
} = color

const {
  getIcon,
} = icon

const NotificationModal = (props) => {
  const {
    isVisible,
    status,
    children,
    label,
    theme,
  } = props

  return (
    <Modal isVisible={isVisible} style={{ maxWidth: '400px' }}>
      <Box padding={{ vertical: 'ms', horizontal: 'm' }} wrap={true}>
        <Box>
          <Box alignItems={'center'}>
            <Icon
              icon={getIcon(status)}
              status={status}
              size={'s'}
              color={getColorFromStatus(status, theme.color)}
            />
            <Heading tag='h4' color={getColorFromStatus(status, theme.color)}>
              {label || status}
            </Heading>
          </ Box>
          <Icon
            icon={'close'}
            status={status}
            size={'xxs'}
            color={'black'}
          />
        </Box>
        <Text>
          { children }
        </ Text>
        <Box justify={'end'}>
          <Button label={'OK'} status={status}/>
        </ Box>
      </ Box>
    </Modal>
  )
}

NotificationModal.propTypes = {
  isVisible: PropTypes.bool,
  status: PropTypes.string,
  children: PropTypes.any,
  label: PropTypes.string,
  theme: PropTypes.object,
}

NotificationModal.defaultProps = {
  isVisible: true,
  status: 'ok',
  label: false,
}

export default withTheme(NotificationModal)
