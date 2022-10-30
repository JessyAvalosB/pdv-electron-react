import React from 'react';
import { NavLink } from "react-router-dom";

import './index.css';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: '10px 0', }}>
            <div className="container-fluid">
                <span className="navbar-brand">Easy Market</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to='/' className={({ isActive }) =>
                                [
                                    'nav-link',
                                    isActive ? 'active' : undefined
                                ]
                                    .filter(Boolean)
                                    .join(" ")
                            }>
                                Sale
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products' className={({ isActive }) =>
                                [
                                    'nav-link',
                                    isActive ? 'active' : undefined
                                ]
                                    .filter(Boolean)
                                    .join(" ")
                            }>
                                Products
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation