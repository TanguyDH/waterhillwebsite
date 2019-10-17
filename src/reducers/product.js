


const productReducer = (state,action) => {
  switch (action.type) {
    case "SELECT_SPORT":
      return {
        sport: true,
        classic: false,
      }
    case "SELECT_CLASSIC":
      return {
        classic: true,
        sport: false,
      }
    default:
      return state
  }
}


export { productReducer as default }