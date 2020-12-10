import axios from 'axios'
import { criptoArray } from '../components/Utils'

export const GET_CRIPTO = 'GET_CRIPTO'
export const GET_DATA_CRIPTO = 'GET_DATA_CRIPTO'
export const SELECT_CRIPTO = 'SELECT_CRIPTO'


export const getCripto = (cripto = criptoArray) => dispatch => {//cuando no recibe parametro ejecuta la funcion con "criptoArray"
    let URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto.join(',')}&tsyms=USD`//guarda la URL en una variable y transforma en String lo que recibe por variable.
    axios.get(URL)
        .then(res => {
            dispatch({ type: 'GET_CRIPTO', payload: res.data.DISPLAY })
        }).catch(err => {
            dispatch({ type: 'GET_CRIPTO', payload: err.res })
        })
}

export const getDataCripto = (cripto) => dispatch => {
    let URLDate = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${cripto}&tsym=USD&limit=360`
    axios.get(URLDate)
        .then(res => {
            dispatch({ type: 'GET_DATA_CRIPTO', payload: res.data.Data.Data })
        }).catch(err => {
            dispatch({ type: 'GET_DATA_CRIPTO', payload: err.res })
        })
}



