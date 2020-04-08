
const productReducer = (state,action) => {
  switch (action.type) {
    case "SELECT_SPORT":
      return {
          ...state,
        sport: true,
        classic: false,
      }
    case "SELECT_CLASSIC":
      return {
        ...state,
        classic: true,
        sport: false,
      }
    case "SELECT_COLOR":
      return {
        ...state,
        color: action.color,
        hexa: action.hexa
      }
    case "SET_DATE":
      return {
        ...state,
        date: action.date
      }
    default:
      return state
  }
}


export { productReducer as default }