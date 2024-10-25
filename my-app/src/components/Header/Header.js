import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoKasa from '../../assets/Logo_Kasa.png';
import './Header.css';

const Header = () => {
    const location = useLocation();

    const getActivePage = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logoKasa} alt="Logo Kasa" />
            </div>
            <nav className="nav">
                <Link to="/" className={`nav-link ${getActivePage('/')}`}>Accueil</Link>
                <Link to="/about" className={`nav-link ${getActivePage('/about')}`}>A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;
