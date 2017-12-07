import React from 'react'
import { connect } from 'react-redux'
import { setPlayerCount } from '../actions'

let PlayerCount = ({ dispatch, started, handleSubmit}) => {
  let input

  function deprecatedHandleSubmit(e) {
    e.preventDefault()
    dispatch(setPlayerCount(input.value))
  }

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

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (e, val) => {
      e.preventDefault()
      dispatch(setPlayerCount(val))
    }
  }
}

const mapStateToProps = state => {
  return {started: state.length > 0}
}

PlayerCount = connect(mapStateToProps, mapDispatchToProps)(PlayerCount)

export default PlayerCount
