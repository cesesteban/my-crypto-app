import React from 'react';
import { criptoArray, name } from './Utils'

const position = {
    display: "flex",
    justifyContent: "space-between"
}
const color = {
    backgroundColor:"#cfd2d6",
    borderColor: "#b1b1ff",
}
const colortext = {
    color:"#666666"
}

function ChartSelector({submitTime, submitCripto}) {
    return (
        <div>
            <table className="table">
                <thead className="table">
                    <tr>
                        <th  style = {position} scope="col">
                            
                            <select style={color} onChange={e => submitCripto(e.target.value)} >
                                {criptoArray[0] && criptoArray.map(cripto => <option key={cripto} 
                                value={cripto} >
                                    {name[cripto]}
                                </option>
                                )}
                            </select>
                            <label style = {colortext}>
                                Evolucion en USD
                            </label>
                            <select style={color} onChange={e=>submitTime(e.target.value)}>
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