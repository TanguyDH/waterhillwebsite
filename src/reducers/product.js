

const notesReducer = (state, action) => {
  switch (action.type) {
    case "ALLOW_SPORT":
      return {
          sport: true
      }
    default:
      return state
  }
}
