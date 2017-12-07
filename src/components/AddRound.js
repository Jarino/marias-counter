import React from 'react'
import { connect } from 'react-redux'
import { addRound } from '../actions'
import './AddRound.css'

let AddRound = ({dispatch}) => {
  let input


  function handleClick(e) {
    let value = parseInt(input.value, 10)
    if (!Number.isInteger(value)) {
      return
    }
    dispatch(addRound(value))
    input.value = ''
  }

  return (
    <div className="AddRound">
      <input className="AddRound--input" placeholder="Zapísať body" ref={node => {
            input = node
          }}
        />
      <button className="AddRound--button" onClick={handleClick}>Pridaj</button>
    </div>
  )
}

AddRound = connect()(AddRound)

export default AddRound
