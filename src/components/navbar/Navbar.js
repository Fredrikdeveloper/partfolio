import "./Navbar.css"
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark navbar-light">
                <div class="container-fluid nav-menues">
                    <Link class="navbar-brand text-light" to="/">Folio</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-light" aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-light" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-light" aria-current="page" to="/myProjects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-light" aria-current="page" to="/techstack">Techstack</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar