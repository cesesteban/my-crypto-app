import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { getDataCripto } from '../store/action'

const styleChart = {
    display: 'flex',
    justifyContent: 'center',
    margin: "auto"
}

function Chart({criptoName, timeSelect}) {

    const dispatch = useDispatch()
    const dataCriptoDetail = useSelector(state => state.dataCriptoDetail)

    const data = {
        labels: [''],
        datasets: [
            {
                label: criptoName,
                data: [],
                borderColor: ["#6b82aa"],
                backgroundColor: ["#cfd2d6"],
            }
        ]
    }
    const options = {
        title: {
            display: false,
            text: criptoName
        }
    }

    useEffect(() => {
        dispatch(getDataCripto(criptoName))
    }, [criptoName, dispatch]);
    

    if (dataCriptoDetail && dataCriptoDetail[0]) {
        for (let i = timeSelect; i >= 0; i--) {
            data.labels.push(moment().subtract(i, 'days').calendar(1))
            data.datasets[0].data.push(dataCriptoDetail[360 - i].close)
        }
    }

    return (
        (!dataCriptoDetail)?(
            <div className="d-flex justify-content-center">
                <div className="spinner-border m-5" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ):(<div className='row' style={styleChart} >
            <div className='col-md-12' >
                <Line data={data} options={options} />
            </div>
        </div>)
    );
}

export default Chart;