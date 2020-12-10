import React from 'react';
import { Link } from 'react-router-dom'

const style = {
    //height: '-webkit-fill-available',
    backgroundImage: `url('http://blogs.elpais.com/.a/6a00d8341bfb1653ef01b8d285b95f970c-pi')`,
    height: '100vh'
}
const style2 = {
    backgroundColor: 'rgba(0,0,0,0.7)'
}

function HeaderStart() {
    return (
        <div >
            <div className="p-5 text-center bg-image"  style={style} >
                <div className="mask"  style={style2}>
                    <div className="d-flex justify-content-center align-items-center h-100" >
                        <div className="text-white">
                            <h1 className="mb-3"  >CriptoApp</h1>
                            <h4 className="mb-3" >Cotizaciones en tiempo real</h4>
                            <Link to='/my-cripto-app/Home'>
                            <button className="btn btn-outline-light btn-lg" >Entrar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderStart;