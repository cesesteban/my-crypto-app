import React from 'react';
import { criptoArray, name } from './Utils'

const style = {
    display: "flex",
    justifyContent: "space-between"
}
const styleSelector = {
    backgroundColor:"#cfd2d6",
    borderColor: "#b1b1ff",
}
const styletext = {
    color:"#666666"
}

function ChartSelector(props) {
    return (
        <div>
            <table className="table">
                <thead className="table">
                    <tr>
                        <th  style = {style}scope="col">
                            
                            <select style={styleSelector} onChange={e => props.submitCripto(e.target.value)} >
                                {criptoArray[0] && criptoArray.map(cripto => <option key={cripto} 
                                value={cripto} >
                                    {name[cripto]}
                                </option>
                                )}
                            </select>
                            <label style = {styletext}>
                                Evolucion en USD
                            </label>
                            <select style={styleSelector} onChange={e=>props.submitTime(e.target.value)}>
                                <option value={360} >Anual</option>
                                <option value={90} >Trimestal</option>
                                <option value={30} >Mensual</option>
                                <option value={7} >Semanal</option>
                            </select>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>

    );
}

export default ChartSelector;