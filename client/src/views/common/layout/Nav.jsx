import React from 'react';


const Nav = () => (
    <ul className="nav">
        <li className="nav-item">
            <a className="nav-link active"><img src="./khiros.png" alt="Just something to stop error"/></a>
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