import React from 'react';
import { connect } from 'react-redux'
import { stepBack } from '../actions'
import './StepBack.css'


let StepBack = ({dispatch}) => {
  function handleClick() {
    console.log('there a step back will be')
    dispatch(stepBack())
  }


  return (
    <div className="StepBack"><button className="StepBack--button" onClick={handleClick}>Vrátiť</button></div>
  )
}

StepBack = connect()(StepBack)

export default StepBack
