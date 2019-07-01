import React from 'react';

export default function NavBar() {
    return (
        <nav className="navigation">
            <button className="navigation__item button u-default-text-shadow">Login</button>
            <button className="navigation__item button u-default-text-shadow">Sign Up</button>
        </nav>
    );
}