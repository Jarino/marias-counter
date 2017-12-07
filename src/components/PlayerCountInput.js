import React from 'react'
import { connect } from 'react-redux'

const PlayerCountInput = ({ dispatch, started, handleSubmit}) => {
  let input

  return (
    <div>
      {!started &&
      <form onSubmit={e => handleSubmit(e, input.value)}>
        <label>Zadaj počet hráčov: </label>
        <input min='3' max='4' type='number' ref={node => {input = node}}/>
        <button type='submit' >Potvrď</button>
      </form>
      }
    </div>
  )
}

export default PlayerCountInput
