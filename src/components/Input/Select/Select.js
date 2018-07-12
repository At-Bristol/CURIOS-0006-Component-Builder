import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../../Box'
import Icon from '../../Icon'
import Dialog from './Dialog'

const getLabel = (label, options = []) => {
  try {
    const x = options.filter(e => e.isSelected)
    if (x.length === 1) return x[0].label
    if (x.length > 1) return `${x.length} items`
    return label
  } catch (e) {
    return label
  }
}

const StyledContainer = styled.div`
  width: 100%;
  height: 5em;

  & > select {
    display: none;
  }
`

const StyledSelect = styled.div`
   cursor: pointer;
   border: ${props => `1px solid ${props.theme.color.greyColorQuaternary}`};
   border-bottom: ${props => `2px solid ${props.theme.color.brandColor}`};
   &:hover {
    background-color: ${props => props.theme.color.greyColorQuinary}
  }
`

const Select = (props) => {
  const {
    label,
    isOpen,
    options,
  } = props

  return (
    <StyledContainer>
      <StyledSelect>
        <Box padding={{ vertical: 's' }}>
          <Box alignItems={'center'} padding={{ horizontal: 's' }}>
              { getLabel(label, options) }
            <Box justify={'end'}>
             <Icon icon={isOpen ? 'collapse' : 'expand'} size={'xxs'}/>
            </Box>
          </Box>
        </Box>
      </StyledSelect>
      {isOpen ? <Dialog options={options}/> : null }
    </StyledContainer>
  )
}

Select.defaultProps = {
  label: 'label',
  isOpen: false,
  options: [
    { label: 'one', isSelected: true },
    { label: 'two' },
    { label: 'three' },
    { label: 'four' },
    { label: 'five' },
    { label: 'six' },
    { label: 'seven' },
  ],
}

Select.propTypes = {
  label: PropTypes.string,
  isOpen: PropTypes.bool,
  options: PropTypes.array,
}

export default Select
