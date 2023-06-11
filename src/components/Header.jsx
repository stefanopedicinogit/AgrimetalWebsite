import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const Topbar = ({ style }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY > 1) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const topbarStyle = {
    position: 'relative',
    display: isVisible ? 'block' : 'none',
    transition: 'top 1.3s ease-in-out',
    ...style,
  };

  return (
    <div style={topbarStyle}>
      <div className="container-fluid px-5 d-none d-lg-block">
        <div className="row gx-5 py-3 align-items-center">
          <div className="col-lg-3">
            <div className="d-flex align-items-center justify-content-start">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
              <h2 className="mb-0">+39 3891988337</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center justify-content-center">
              <a href="index.html" className="navbar-brand ms-lg-5">
                <h1 className="m-0 display-4 text-primary">
                  <span className="text-secondary">AGRI</span>METAL
                </h1>
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex align-items-center justify-content-end">
              <a className="btn btn-primary btn-square rounded-circle me-2" href="/contact">
                <i className="fas fa-envelope"></i>
              </a>
              <a className="btn btn-primary btn-square rounded-circle me-2" href="https://www.facebook.com/AGRIMETAL21">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-primary btn-square rounded-circle" href="https://www.instagram.com/agrimetal_/?igshid=NTc4MTIwNjQ2YQ%3D%3D">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5 position-fixed w-100">
      <a href="index.html" className="navbar-brand d-flex d-lg-none">
        <h1 className="m-0 display-4 text-secondary">
          <span className="text-white">Impianti</span>Agricoli
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          <a href="/" className={`nav-item nav-link${location.pathname === '/' ? ' active' : ''}`}>
            Home
          </a>
          <a href="/about" className={`nav-item nav-link${location.pathname === '/about' ? ' active' : ''}`}>
            About
          </a>
          <a href="/gallery" className={`nav-item nav-link${location.pathname === '/gallery' ? ' active' : ''}`}>
            Gallery
          </a>
          <a href="/contact" className={`nav-item nav-link${location.pathname === '/contact' ? ' active' : ''}`}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavbarToggle = ({ isNavOpen, toggleNav }) => {
  const location = useLocation();

  return (
    <nav style={{ top: '0' }} className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5 position-fixed w-100 d-lg-none">
      <a href="index.html" className="navbar-brand">
        <h1 className="m-0 display-4 text-secondary">
          <span className="text-white">AGRI</span>METAL
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNav}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''
          }`}
      >
        <div className="navbar-nav mx-auto py-0">
        <a href="/" className={`nav-item nav-link${location.pathname === '/' ? ' active' : ''}`}>
            Home
          </a>
          <a href="/about" className={`nav-item nav-link${location.pathname === '/about' ? ' active' : ''}`}>
            About
          </a>
          <a href="/gallery" className={`nav-item nav-link${location.pathname === '/gallery' ? ' active' : ''}`}>
            Gallery
          </a>
          <a href="/contact" className={`nav-item nav-link${location.pathname === '/contact' ? ' active' : ''}`}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  const [showTopbar, setShowTopbar] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY > 1) {
        setShowTopbar(false);
      } else {
        setShowTopbar(true);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const headerStyle = {
    zIndex: 999,
    position: 'sticky',
    top: typeof window !== 'undefined' && window.scrollY > 1 ? 0 : undefined,
    marginTop: typeof window !== 'undefined' && window.scrollY > 1 ? -80 : undefined,
    marginBottom: '10vh',
    transition: 'margin-top 0.3s ease-in-out',
  };

  const headerStyleMobile = {
    zIndex: 999,
    position: 'sticky',
    marginBottom: '12vh',
    transition: 'margin-top 0.3s ease-in-out',
  };

  return (
    <div>
      {isMobile ? (
        <header style={headerStyleMobile}>
          {showTopbar && <Topbar style={{ zIndex: 999 }} />}
          <NavbarToggle isNavOpen={isNavOpen} toggleNav={toggleNav} />
        </header>
      ) : (
        <header style={headerStyle}>
          {showTopbar && <Topbar style={{ zIndex: 999 }} />}
          <Navbar style={{ zIndex: 999 }} />
        </header>
      )}
    </div>
  );
};

export default Header;