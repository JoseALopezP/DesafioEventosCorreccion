import './NavBar.css';
import Form from './Form';
import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={'/'}><img src="../assets/icon1.png" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <Link to={'/'}>
                        <a className="nav-link active" href="/#">Home</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/category/:id'}>
                        <a className="nav-link active" href="/#">Category</a>
                    </Link>
                    </li>
                </ul>
                <CartWidget quantity="0"/>
                <Form contFormSearch='Buscar'/>
                </div>
            </div>
            </nav>
        </>
    );
}

export default NavBar;