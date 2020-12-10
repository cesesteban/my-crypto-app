import React from 'react';
import { NavLink } from 'react-router-dom'


function Nav() {
    return (
        <div className='nav-black'>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                        <NavLink style={{ marginRight: '20px', color: 'white' }} to='/my-cripto-app/Home'>Home</NavLink>
                        <NavLink style={{ marginRight: '20px', color: 'white' }} to="/my-cripto-app/Charts" >Charts</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Nav;