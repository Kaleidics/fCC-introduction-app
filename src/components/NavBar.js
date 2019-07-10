import React from 'react';
import logo from '../assets/logo.svg';


export default function NavBar() {
    return (
        <nav className="navigation">
            <div className="navigation__logo-box">
                <img className="navigation__logo" src={logo} alt="Logo" />
            </div>
            <button className="navigation__item button u-default-text-shadow">Login</button>
            <button className="navigation__item button u-default-text-shadow">Sign Up</button>
        </nav>
    );
}