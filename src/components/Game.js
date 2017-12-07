import React from 'react'
import AddRound from './AddRound';
import RoundList from './RoundList';
import StepBack from './StepBack';
import { connect } from 'react-redux'

let Game = ({ started }) => {
  return (
   <div>
    {started &&
      <div> 
      <AddRound />
      <RoundList />
      <StepBack />
      </div>
    } 
   </div>
  )
}

const mapStateToProps = state => {
  console.log(state.length)
  return { started: state.length > 0 }
}

Game = connect(mapStateToProps)(Game)

export default Game
