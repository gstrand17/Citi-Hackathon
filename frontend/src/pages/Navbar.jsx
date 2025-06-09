import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import App from "../App.jsx";
const Navbar = () => {
    return (
        <nav className="navbar">
            <p className="nav-title">WealthSprout</p>
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/page1">Comparisons</Link></li>
                <li className="nav-item"><Link to="/page2">401(K)</Link></li>
                <li className="nav-item"><Link to="/page3">Roth IRA</Link></li>
            </ul>
        </nav>
    );
};
export default Navbar;