let nextRoundId = 0

export const addRound = (value) => {
  return {
    type: 'ADD_ROUND',
    id: nextRoundId++,
    value 
  }
}
export const stepBack = () => {
  return {
    type: 'STEP_BACK',
    id: nextRoundId > 0 ? nextRoundId-- : 0
  }
}

export const setPlayerCount = (value) => {
  return {
    type: 'SET_PLAYER_COUNT',
    value
  }
}

