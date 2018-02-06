import React from 'react';
import khirosLogo from './khiros.png';

const Nav = () => (
    <ul className="nav">
        <li className="nav-item">
            <a className="nav-link active"><img src={khirosLogo} alt="Just something to stop error"  height="50" width="50"/></a>
        </li>
        <li className="nav-item">
            <a className="nav-link">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link">Disabled</a>
        </li>
    </ul>
)

export default Nav;