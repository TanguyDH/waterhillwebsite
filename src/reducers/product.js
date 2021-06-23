
const productReducer = (state,action) => {
  switch (action.type) {
    case "SELECT_SPORT":
      return {
          ...state,
        sport: true,
        classic: false,
        fullColorClassic: false,
        transparentClassic: false,
        metalClassic: false
      }
    case "SELECT_CLASSIC":
      return {
        ...state,
        classic: true,
        sport: false,
        fullColorClassic: false,
        transparentClassic: false,
        metalClassic: false
      }
    case "SELECT_FULLCOLORCLASSIC":
      return {
        ...state,
        classic: false,
        sport: false,
        fullColorClassic: true,
        transparentClassic: false,
        metalClassic: false
      }
    case "SELECT_TRANSPATENTCLASSIC":
      return {
        ...state,
        classic: false,
        sport: false,
        fullColorClassic: false,
        transparentClassic: true,
        metalClassic: false
      }
    case "SELECT_METALCLASSIC":
      return {
        ...state,
        classic: false,
        sport: false,
        fullColorClassic: false,
        transparentClassic: false,
        metalClassic: true
      }
    case "SELECT_COLOR":
      return {
        ...state,
        color: action.color,
        hexa: action.hexa,
        colorName: action.colorName
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