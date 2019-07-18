import React from 'react'
import NavBar from '../header/navBar';
import Logo from '../header/logo';


export default function Header() {
    return (
    <div className="flex w-full justify-between">
            <Logo />
            <NavBar />
    </div>
    )
}