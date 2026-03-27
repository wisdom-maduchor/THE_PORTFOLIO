import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="hero" className="hero section">
      <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

      <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>Kelly Adams</h2>
            <p>I'm a professional illustrator from San Francisco</p>
            <Link to="/about" className="btn-get-started">About Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
