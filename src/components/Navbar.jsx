import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Leadership', path: '/leadership' },
        { name: 'Activities', path: '/activities' },
        { name: 'Announcements', path: '/announcements' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar pattern-bg ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <NavLink to="/" className="nav-logo">
                    <img src="/logo.png" alt="MUSF" className="logo-img" />
                </NavLink>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    {links.map((link) => (
                        <li key={link.name} className="nav-item">
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                                onClick={toggleMenu}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
