let playerCount = 4


function updatePoints(originalPoints, startingPlayer, game) {
  let newPoints = originalPoints.map((v,i) => v - game)
  newPoints[startingPlayer] += (playerCount * game)
  return newPoints
}

const rounds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROUND':
      return [
        ...state,
        {
          id: action.id,
          points: updatePoints(state[state.length - 1].points, action.id % playerCount, action.value),
          roundId: action.id % playerCount
        }
      ]
    case 'STEP_BACK':
      return state.slice(0, -1)
    case 'SET_PLAYER_COUNT':
      playerCount = action.value 
      return [
        ...state,
        {
          id: -1,
          points: Array.from('0'.repeat(playerCount)).map((i) => parseInt(i))
        }
      ]
    default:
      return state
  }
}

export default rounds
