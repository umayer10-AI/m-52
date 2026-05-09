"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {

    const p = usePathname()

    return (
        <div className='flex items-center gap-7'>
            <Link href={'/'} className={p ==="/"?'font-semibold text-green-600':"font-semibold"}>Home</Link>
            <Link href={'/destinations'} className={p ==="/destinations"?'font-semibold text-green-600':"font-semibold"}>Destinations</Link>
            <Link href={'/booking'} className={p ==="/booking"?'font-semibold text-green-600':"font-semibold"}>My Bookings</Link>
            <Link href={'/admin'} className={p ==="/admin"?'font-semibold text-green-600':"font-semibold"}>Admin</Link>
        </div>
    );
};

export default NavLink;