import React from 'react';
import NavLink from './NavLink';
import Nav2 from './Nav2';

const Navbar = () => {
    return (
        <div className=''>
            <NavLink></NavLink>
            <h2 className='text-blue-400 text-2xl font-bold'>Wanderlast</h2>
            <Nav2></Nav2>
        </div>
    );
};

export default Navbar;