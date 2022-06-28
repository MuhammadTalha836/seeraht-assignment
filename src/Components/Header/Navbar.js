import React from 'react'
import { scroller } from 'react-scroll'

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


                        <div className="d-flex">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="nav-link text-dark" onClick={() => { scroller.scrollTo("projects") }}>Projects</button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link text-dark" onClick={() => { scroller.scrollTo("about") }}>About</button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link text-dark" onClick={() => { scroller.scrollTo("contact") }}>Contact</button>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
