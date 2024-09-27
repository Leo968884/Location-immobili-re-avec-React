import React from 'react';
import logoKasa from '../../assets/Logo_Kasa.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logoKasa} alt="Logo Kasa" />
            <p>&copy; 2020 Kasa. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
