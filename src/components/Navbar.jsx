import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled((prev) => {
                if (prev !== scrolled) return scrolled;
                return prev;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
        // Handle RTL for Arabic and Urdu
        document.body.dir = (lng === 'ar' || lng === 'ur') ? 'rtl' : 'ltr';
    };

    const links = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.leadership'), path: '/leadership' },
        { name: t('nav.activities'), path: '/activities' },
        { name: t('nav.announcements'), path: '/announcements' },
        { name: t('nav.gallery'), path: '/gallery' },
        { name: t('nav.contact'), path: '/contact' }
    ];

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'ar', label: 'العربية' },
        { code: 'ml', label: 'മലയാളം' },
        { code: 'ur', label: 'اردو' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled pattern-bg' : ''}`}>
            <div className="container nav-container">
                <NavLink to="/" className="nav-logo">
                    <img src="/logo.png" alt="MUSF" className="logo-img" />
                </NavLink>

                <div className="nav-actions">
                    <div className="language-selector">
                        <FiGlobe className="globe-icon" />
                        <div className="language-dropdown">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={i18n.language === lang.code ? 'active' : ''}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </div>
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
                    <li className="nav-item mobile-languages">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={i18n.language === lang.code ? 'active' : ''}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
