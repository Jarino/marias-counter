import React from 'react'
import { connect } from 'react-redux'
import PlayerName from './PlayerName.js'

let PlayerNames = ({ playerCount }) => {
  let playerNameElements = []
  
  for (let i = 1; i <= playerCount; i++) {
    playerNameElements.push(<td><PlayerName name={i}/></td>)
  }

  return (
    <thead>
      <tr>
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
