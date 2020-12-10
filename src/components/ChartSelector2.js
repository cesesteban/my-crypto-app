import React from 'react';

const style = {
    display: "flex",
    justifyContent: "space-between"
}
const styleSelector = {
    backgroundColor:"#cfd2d6",
    borderColor: "#b1b1ff"
}
const styletext = {
    color:"#666666"
}

function ChartSelector2({submitTime, nameName}) {

    return (
        <div>
            <table className="table">
                <thead className="table">
                    <tr>
                        <th  style = {style}scope="col">
                            
                            <button style={styleSelector}>
                                {nameName}
                            </button>
                            <label style = {styletext}>
                                Evolucion en USD
                            </label>
                            <select style={styleSelector} onChange={e=>submitTime(e.target.value)}>
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

export default ChartSelector2;