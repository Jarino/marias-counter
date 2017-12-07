import React from 'react'
import { connect } from 'react-redux'
import './PlayerCountInput.css'


const PlayerCountInput = ({ dispatch, started, handleSubmit}) => {
  let input

  return (
    <div className="PlayerCountInput">
      {!started &&
      <form onSubmit={e => handleSubmit(e, input.value)}>
        <p>
          <label>Zadaj počet hráčov: </label>
        </p>
        <p>
          <input className="PlayerCountInput--input" min='3' max='4' type='number' ref={node => {input = node}}/>
        </p>
        <p>
          <button className="PlayerCountInput--button" type='submit' >Potvrď</button>
        </p>
      </form>
      }
    </div>
  )
}

export default PlayerCountInput
