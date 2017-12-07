import React from 'react';
import { connect } from 'react-redux'
import { stepBack } from '../actions'

let StepBack = ({dispatch}) => {
  function handleClick() {
    console.log('there a step back will be')
    dispatch(stepBack())
  }


  return (
    <div><button onClick={handleClick}>Step Back</button></div>
  )
}

StepBack = connect()(StepBack)

export default StepBack
