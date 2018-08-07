import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'
import MiniCard from './MiniCard'

const SelectedCard = props => (
  props.mini ? <MiniCard {...props}/> : <Card {...props}/>
)

SelectedCard.propTypes = {
  mini: PropTypes.bool,
}

export default SelectedCard
