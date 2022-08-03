import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const getAuthBtns = () => {
        if (localStorage.getItem('authToken')) {
            return (<ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                    <Link className="nav-link" to="#!">
                        My Profile
                    </Link>
                </li>
            </ul>
            )
        }
        else return (
            <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                    <Link className="nav-link" to="/signup">
                        Login
                    </Link>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <Link className="nav-link" to="/signup">
                        Signup
                    </Link>
                </li>
            </ul>
        )
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">EventsNearMe</Link>
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/allevents">All Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addevent">Add an Event</Link>
                            </li>
                        </ul>
                        {getAuthBtns()}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar