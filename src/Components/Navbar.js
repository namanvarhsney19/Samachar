import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Samachar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Categories
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenu">
                                    <li><Link className="dropdown-item" to="/"> General</Link></li>
                                    <li><Link className="dropdown-item" to="/technology"> Technology</Link></li>
                                    <li><Link className="dropdown-item" to="/science"> Science</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/entertainment"> Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/health"> Health</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/sports"> Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/business"> Business</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <div className={`form-check form-switch mx-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Dark' : 'Light'}  mode</label>
                        </div>
                    </div>
                </div >
            </nav >
        </div >
    )
}

export default Navbar
