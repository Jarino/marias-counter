import React from 'react'
import { connect } from 'react-redux'
import { addRound } from '../actions'


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
    <div>
      <input ref={node => {
            input = node
          }}
        />
      <button onClick={handleClick}>Pridaj</button>
    </div>
  )
}

AddRound = connect()(AddRound)

export default AddRound
