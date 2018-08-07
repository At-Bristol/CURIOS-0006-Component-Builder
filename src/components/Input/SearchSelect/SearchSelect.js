import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import Dialog from '../Dialog'

import intlJson from './countries.json'

const flatten = array => array.reduce((a, v) => (
  a.concat(Array.isArray(v) ? flatten(v) : v)
), [])

const search = ({
  array = [],
  field = 'label',
  searchString = '',
}) => {
  const getResults = x => (
    x.toLowerCase()
      .substr(0, searchString.length) === searchString.toLowerCase()
  )

  return array.filter((e) => {
    if (e[field]) {
      return Array.isArray(e[field]) ?
        e[field].filter(f => getResults(f))[0]
        : getResults(e[field])
    }
    return false
  })
}

const getFilteredOptions = ({
  options = [],
  searchString = '',
  extraFields = [],
}) => {
  const searchFields = ['label', ...extraFields]

  try {
    const a = flatten(searchFields.map(e => (
      search({ array: options, field: e, searchString })
    )))

    if (a[0]) {
      a[0] = { label: a[0].label, isSelected: true }
      return a
    }
    return []
  } catch (e) {
    return []
  }
}

const SearchSelect = (props) => {
  const {
    options,
    content,
    isOpen,
    extraFields,
  } = props

  const oOptions = getFilteredOptions({
    options,
    extraFields,
    searchString: content,
  })

  return (
    <div>
      <Input
        size={'m'}
        content={content}
      />
      { isOpen
        ? <Dialog options={oOptions} />
        : null }
    </div>
  )
}

SearchSelect.defaultProps = {
  isOpen: true,
  content: 'eng',
  options: intlJson,
  extraFields: ['code', 'alias'],
}

SearchSelect.propTypes = {
  isOpen: PropTypes.bool,
  options: PropTypes.object,
  content: PropTypes.string,
  extraFields: PropTypes.array,
}

export default SearchSelect
