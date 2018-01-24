import React from 'react';


const Nav = () => (
    <ul classNameName="nav">
        <li className="nav-item">
            <a className="nav-link active" href="#"><img src="./khiros.png"/></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Disabled</a>
        </li>
    </ul>
)

export default Nav;