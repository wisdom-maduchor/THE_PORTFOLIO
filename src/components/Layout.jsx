import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    // Scroll top button logic
    const scrollTop = document.querySelector('.scroll-top');
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    };

    window.addEventListener('scroll', toggleScrollTop);
    
    const handleScrollTopClick = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    if (scrollTop) {
      scrollTop.addEventListener('click', handleScrollTopClick);
    }

    return () => {
      window.removeEventListener('scroll', toggleScrollTop);
      if (scrollTop) {
        scrollTop.removeEventListener('click', handleScrollTopClick);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
      
      {/* Scroll Top Button */}
      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      
      {/* Preloader is handled in index.html or can be added here if needed */}
    </>
  );
};

export default Layout;
