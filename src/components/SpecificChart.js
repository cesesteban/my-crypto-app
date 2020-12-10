import React, { useState } from 'react';
import Nav from './Nav';
import Chart2 from './Chart2'
import ChartSelector2 from './ChartSelector2'

function SpecificChart(props) {

    let timeSelected = 120
    let criptoName = "BTC"
    let nameCriptoName = 'Bitcoin'

    if (props.location.aboutProps !== undefined) {
        if (props.location.aboutProps.nCripto !== undefined) {
            criptoName = (props.location.aboutProps.nCripto.nameCripto)
        }
    }
    if (props.location.aboutProps !== undefined) {
        if (props.location.aboutProps.nCripto !== undefined) {
            nameCriptoName = (props.location.aboutProps.nCripto.name)
        }
    }

    const [cripto] = useState(criptoName);
    const [time, setTime] = useState(timeSelected);

    return (
        <div >
            <Nav />
            <ChartSelector2 submitTime={setTime} nameName={nameCriptoName}/>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
                <div >
                    <Chart2 criptoName={cripto} timeSelect={time} />
                </div>
            </div>
        </div>
    );
}

export default SpecificChart;