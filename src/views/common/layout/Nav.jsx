import React from 'react';
import khirosLogo from './khiros.png';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className="nav_wrapper">
        <div className="top_nav">
            <p className="pull-right"><i className="fa fa-phone" data-fa-transform="flip-v"/> (69) 3302-0285</p>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="nav-link active"><img src={khirosLogo} alt="Just something to stop error"  height="50" alt="Khiros Logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
                <ul className="navbar-nav justify-content-center">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navDropKhiros" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        A KHIROS
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navDropKhiros">
                            <Link className="dropdown-item" to="/profissionais">Profissionais</Link>
                            <Link className="dropdown-item" to="/sobre-a-khiros">Sobre</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">BLOG</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">MIDIA</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navDroptratamento" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        TRATAMENTOS
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navDroptratamento">
                            <a className="dropdown-item" href="#">drop1</a>
                            <a className="dropdown-item" href="#">drop2</a>
                            <a className="dropdown-item" href="#">drop3</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/instituto-trata">INSTITUTO TRATA</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTATO</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)


export default Nav;