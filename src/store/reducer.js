import { GET_CRIPTO, GET_DATA_CRIPTO } from './action'


const initialState = {//envia el objeto como estado inicial
  criptoDetail: {},
  dataCriptoDetail: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CRIPTO:
      return {
        criptoDetail: action.payload//guarda lo que recibe del payload en criptoDetail
      }
    case GET_DATA_CRIPTO:
      return {
        dataCriptoDetail: action.payload
      }    
    default:
      return state
  }
}

export default rootReducer;