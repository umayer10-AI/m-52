import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';

const Nav2 = () => {
    return (
        <div className='flex items-center gap-7'>
            <Link href={'/profile'} className='font-semibold flex items-center gap-1'><FaRegUser /> Profile</Link>
            <Link href={'/login'}  className='font-semibold'>Login</Link>
            <Link href={'/signup'}  className='font-semibold'>Sign Up</Link>
            
        </div>
    );
};

export default Nav2;