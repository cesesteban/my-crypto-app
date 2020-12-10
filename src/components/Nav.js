import React from 'react';
import { NavLink } from 'react-router-dom'


function Nav(props) {
    return (
        <div className='nav-black'>
            {/* <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <nav style={style} className="navbar navbar-dark bg-dark">
                        <NavLink style={{ marginRight: '20px', color: 'white' }} to="/" >Home</NavLink>
                        <NavLink style={{ marginRight: '20px', color: 'white' }} to="/CriptoTable">Pricing</NavLink>
                        <NavLink style={{ marginRight: '20px', color: 'white' }} to="/Charts" >Charts</NavLink>
                    </nav>
                </div>
            </div> */}
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                        {/* <NavLink style={{ marginRight: '20px', color: 'white' }} to="/" >Home</NavLink> */}
                        <NavLink style={{ marginRight: '20px', color: 'white' }} to='/my-cripto-app/Home'>Home</NavLink>
                        <NavLink style={{ marginRight: '20px', color: 'white' }} to="/my-cripto-app/Charts" >Charts</NavLink>
                    {/* <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button> */}
                </div>
            </nav>
        </div>
    );
}

export default Nav;