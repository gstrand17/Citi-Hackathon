import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import App from "../App.jsx";
const Navbar = () => {
    return (
        <nav className="navbar">
            <p className="nav-title">Website Name</p>
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/page1">Page 1</Link></li>
                <li className="nav-item"><Link to="/page2">Page 2</Link></li>
                <li className="nav-item"><Link to="/page3">Page 3</Link></li>
            </ul>
        </nav>
    );
};
export default Navbar;