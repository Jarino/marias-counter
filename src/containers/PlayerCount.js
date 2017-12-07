import { connect } from 'react-redux'
import PlayerCountInput from '../components/PlayerCountInput'
import { setPlayerCount } from '../actions'


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

const PlayerCount = connect(mapStateToProps, mapDispatchToProps)(PlayerCountInput)

export default PlayerCount
