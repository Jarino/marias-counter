import React from 'react'
import { connect } from 'react-redux'

import PointRow from './PointRow'
import PlayerNames from './PlayerNames'

let RoundList = ({rounds}) => (
  <table>
    <PlayerNames />
    <tbody>
      {rounds.map((round, index) => {
        return <PointRow values={round.points} roundId={round.roundId} /> 
      })}
    </tbody>
  </table>
)

function mapStateToProps(state) {
  return { rounds: state }
}

RoundList = connect(mapStateToProps)(RoundList)

export default RoundList

