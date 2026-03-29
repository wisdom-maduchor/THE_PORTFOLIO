import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';


const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
    document.body.classList.toggle('mobile-nav-active');
  };

  const closeMobileNav = () => {
    if (mobileNavActive) {
      setMobileNavActive(false);
      document.body.classList.remove('mobile-nav-active');
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header id="header" className={`header d-flex align-items-center light-background sticky-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0" onClick={closeMobileNav}>
          <h1 className="sitename">Wiz.DOM</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className={isActive('/')} onClick={closeMobileNav}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about')} onClick={closeMobileNav}>About</Link></li>
            <li><Link to="/resume" className={isActive('/resume')} onClick={closeMobileNav}>Resume</Link></li>
            <li><Link to="/services" className={isActive('/services')} onClick={closeMobileNav}>Services</Link></li>
            <li><Link to="/portfolio" className={isActive('/portfolio')} onClick={closeMobileNav}>Portfolio</Link></li>
            {/* <li className="dropdown">
              <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown">
                  <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li> */}
            <li><Link to="/contact" className={isActive('/contact')} onClick={closeMobileNav}>Contact</Link></li>
          </ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav}></i>
        </nav>

        <div className="header-social-links d-flex align-items-center">
          <ThemeToggle />
          {/* <a href="#" className="twitter ms-3"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a> */}
        </div>


      </div>
    </header>
  );
};

export default Header;
