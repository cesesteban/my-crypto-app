import React, { useState } from 'react';
import Nav from './Nav';
import Chart from './Chart'
import ChartSelector from './ChartSelector'

function Charts() {

    let timeSelected = 120

    const [cripto, setCripto] = useState('BTC');
    const [time, setTime] = useState(timeSelected);

    return (
        <div >
            <Nav />
            <ChartSelector submitCripto={setCripto} submitTime={setTime} />
            <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
                <div >
                    <Chart criptoName={cripto} timeSelect={time} />
                </div>
            </div>
        </div>
    );
}

export default Charts;