import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PortfolioDetails = () => {
  useEffect(() => {
    // Initialize Swiper
    if (window.Swiper) {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
        new window.Swiper(swiperElement, config);
      });
    }
  }, []);

  return (
    <section id="portfolio-details" className="portfolio-details section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio Details</h2>
        <p>A deep dive into the technical implementation and key features of this project.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper init-swiper">
              <script type="application/json" className="swiper-config">
                {`{
                  "loop": true,
                  "speed": 600,
                  "autoplay": {
                    "delay": 5000
                  },
                  "slidesPerView": "auto",
                  "pagination": {
                    "el": ".swiper-pagination",
                    "type": "bullets",
                    "clickable": true
                  }
                }`}
              </script>

              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img src="/assets/img/portfolio/app-1.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/img/portfolio/product-1.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/img/portfolio/branding-1.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/img/portfolio/books-1.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Software Engineering</li>
                <li><strong>Client</strong>: Various</li>
                <li><strong>Project date</strong>: 2024 - 2025</li>
                <li><strong>Project URL</strong>: <a href="https://github.com/wisdom-maduchor">github.com/wisdom-maduchor</a></li>
              </ul>
            </div>
            <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
              <h2>Detailed Project Overview</h2>
              <p>
                This project involved the full lifecycle of development, from initial requirements gathering to final deployment. I utilized modern frameworks and automation tools to ensure a high-quality, scalable solution that met all technical and business requirements.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
