import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCripto } from '../store/action'
import Filas from './Filas'
import { criptoArray, name } from './Utils'
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function Tabla() {

    const dispatch = useDispatch()
    const dataCripto = useSelector(state => state.criptoDetail)

    useEffect(() => {
        const interval = setInterval(() => dispatch(getCripto()), 2500);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div>
            <div>
                {(!dataCripto) ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ):((dataCripto && !dataCripto[criptoArray[0]]) ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ):(
                    <Table className="table" style={{ border: "2px solid grey" }}>
                        <Thead className="table">
                            <Tr>
                                <Th scope="col">Simbol</Th>
                                <Th scope="col">Coin</Th>
                                <Th scope="col">Price</Th>
                                <Th scope="col">Openday</Th>
                                <Th scope="col">High 24 hour</Th>
                                <Th scope="col">Low 24 hour</Th>
                                <Th scope="col">Mkt. Cap.</Th>
                                <Th scope="col">Chg.24H</Th>
                            </Tr>
                        </Thead>
                        <Tbody >
                            {dataCripto && dataCripto[criptoArray[0]] && criptoArray.map(cripto => (
                                <Filas key={cripto} name={name[cripto]} cripto={dataCripto[cripto].USD} nameCripto={cripto} />))}
                        </Tbody>
                    </Table>))}
            </div>
        </div>
    );
}


export default (Tabla)