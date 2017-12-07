import React from 'react'
import { connect } from 'react-redux'
import PlayerName from './PlayerName.js'

let PlayerNames = ({ playerCount }) => {
  let playerNameElements = []
  
  for (let i = 1; i <= playerCount; i++) {
    playerNameElements.push(<th><PlayerName name={'Player ' + i}/></th>)
  }

  return (
    <thead>
      <tr className="names">
        {playerNameElements}
      </tr>
    </thead>
  )
}

// there is a huge disadvantage of this solution
// player names will be rerendered each time a new round 
// is added
const mapStateToProps = state => {
  let count

  if (state[0].points) {
    count = state[0].points.length
  }
  else {
    count = 0
  }
  return { playerCount: count } 
}

PlayerNames = connect(mapStateToProps)(PlayerNames)

export default PlayerNames
