import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  useEffect(() => {
    // Initialize GLightbox
    if (window.GLightbox) {
      window.GLightbox({
        selector: '.glightbox'
      });
    }

    // Initialize Isotope
    if (window.Isotope && window.imagesLoaded) {
      document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        window.imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
          initIsotope = new window.Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
          filters.addEventListener('click', function() {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (window.AOS) {
              window.AOS.refresh();
            }
          }, false);
        });
      });
    }
  }, []);

  const portfolioItems = [
    { id: 1, category: 'filter-app', title: 'App 1', img: '/assets/img/masonry-portfolio/masonry-portfolio-1.jpg' },
    { id: 2, category: 'filter-product', title: 'Product 1', img: '/assets/img/masonry-portfolio/masonry-portfolio-2.jpg' },
    { id: 3, category: 'filter-branding', title: 'Branding 1', img: '/assets/img/masonry-portfolio/masonry-portfolio-3.jpg' },
    { id: 4, category: 'filter-app', title: 'App 2', img: '/assets/img/masonry-portfolio/masonry-portfolio-4.jpg' },
    { id: 5, category: 'filter-product', title: 'Product 2', img: '/assets/img/masonry-portfolio/masonry-portfolio-5.jpg' },
    { id: 6, category: 'filter-branding', title: 'Branding 2', img: '/assets/img/masonry-portfolio/masonry-portfolio-6.jpg' },
    { id: 7, category: 'filter-app', title: 'App 3', img: '/assets/img/masonry-portfolio/masonry-portfolio-7.jpg' },
    { id: 8, category: 'filter-product', title: 'Product 3', img: '/assets/img/masonry-portfolio/masonry-portfolio-8.jpg' },
    { id: 9, category: 'filter-branding', title: 'Branding 3', img: '/assets/img/masonry-portfolio/masonry-portfolio-9.jpg' },
  ];

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>A collection of my recent projects, spanning web development, workflow automation, and systems integration.</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">Web Apps</li>
            <li data-filter=".filter-product">Automation</li>
            <li data-filter=".filter-branding">Integrations</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {[
              { id: 1, category: 'filter-app', title: 'E-Commerce Platform', desc: 'React-based online store', img: '/assets/img/masonry-portfolio/masonry-portfolio-1.jpg' },
              { id: 2, category: 'filter-product', title: 'WhatsApp Automation', desc: 'Bot for customer interactions', img: '/assets/img/masonry-portfolio/masonry-portfolio-2.jpg' },
              { id: 3, category: 'filter-branding', title: 'ERP Integration', desc: 'Enterprise data synchronization', img: '/assets/img/masonry-portfolio/masonry-portfolio-3.jpg' },
              { id: 4, category: 'filter-app', title: 'Food Delivery App', desc: 'Real-time ordering system', img: '/assets/img/masonry-portfolio/masonry-portfolio-4.jpg' },
              { id: 5, category: 'filter-product', title: 'Support Chatbot', desc: 'AI-driven customer support', img: '/assets/img/masonry-portfolio/masonry-portfolio-5.jpg' },
              { id: 6, category: 'filter-branding', title: 'Custom Dashboard', desc: 'Business analytics tool', img: '/assets/img/masonry-portfolio/masonry-portfolio-6.jpg' },
              { id: 7, category: 'filter-app', title: 'Inventory Manager', desc: 'Stock tracking application', img: '/assets/img/masonry-portfolio/masonry-portfolio-7.jpg' },
              { id: 8, category: 'filter-product', title: 'Lead Gen Bot', desc: 'Automated marketing tool', img: '/assets/img/masonry-portfolio/masonry-portfolio-8.jpg' },
              { id: 9, category: 'filter-branding', title: 'API Gateway', desc: 'Microservices communication', img: '/assets/img/masonry-portfolio/masonry-portfolio-9.jpg' },
            ].map((item) => (
              <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}>
                <img src={item.img} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <a href={item.img} title={item.title} data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
