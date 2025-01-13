import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/categories.css'; // Importer le fichier CSS commun

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/Categories/berlines">Berlines</Link></li>
                <li><Link to="/Categories/luxury">Luxury</Link></li>
                <li><Link to="/Categories/suv">SUV</Link></li>
                <li><Link to="/Categories/sport">Sport</Link></li>
                <li><Link to="/Categories/mini">Mini</Link></li>
                <li><Link to="/login" className="login-btn">Se connecter</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
