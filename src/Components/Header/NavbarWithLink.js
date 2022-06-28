import React from 'react'

import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                <Link className="navbar-brand text-dark" aria-current="page" to="/" > <b>BR</b> Architects </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <form className="d-flex" role="search">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" aria-current="page" to="/project" > Projects </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-dark" aria-current="page" to="/about" >About</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-dark" aria-current="page" to="/contact" >Contact</Link>
                                </li>

                            </ul>

                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}
