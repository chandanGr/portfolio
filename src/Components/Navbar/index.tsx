import React from 'react';

import './index.scss';

const navBarItems = [
    {
        name: 'About',
        forVal: 'ABOUT'
    },
    {
        name: 'Experience',
        forVal: 'EXPERIENCE'
    },
    {
        name: 'Work',
        forVal: 'WORK'
    },
    {
        name: 'Contact',
        forVal: 'CONTACT'
    },
    {
        name: 'Resume',
        forVal: 'RESUME'
    }
];

function Navbar() {
    return (
        <div className='navbarContainer'>
            <div className='navbarContainer__logo'>C</div>
            <ul className='navbarContainer__links'>
                {navBarItems.map((navBarItem) => (
                    <li className='navbarContainer__links__link'>{navBarItem.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
