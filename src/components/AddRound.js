import React from 'react'
import { connect } from 'react-redux'
import { addRound } from '../actions'


let AddRound = ({dispatch}) => {
  let input

  function handleClick(e) {
    if (!input.value) {
      return
    }
    dispatch(addRound(parseInt(input.value)))
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
