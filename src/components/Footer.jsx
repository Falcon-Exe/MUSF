import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <img src="/logo.png" alt="MUSF Logo" className="footer-logo" />
                    <p className="footer-description">Majlis Umariyya Students Federation</p>
                    <p className="footer-tagline">Serving Students with Knowledge, Unity, and Leadership.</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/leadership">Leadership</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Social Media</h4>
                    <div className="social-links">
                        <a href="https://instagram.com/musf_puramannur" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                        <a href="https://facebook.com/musf_puramannur" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                        <a href="https://youtube.com/MajlisMedia" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MUSF. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
