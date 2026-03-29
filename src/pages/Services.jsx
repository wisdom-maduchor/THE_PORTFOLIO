import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>I offer a range of professional services to help businesses automate workflows, build modern web applications, and optimize their technical infrastructure.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item item-cyan position-relative">
              <div className="icon">
                <i className="bi bi-window-sidebar"></i>
              </div>
              <h3>Web Development</h3>
              <p>Building responsive and modern web applications using React and Angular with a focus on clean code, scalability, and user experience.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item item-orange position-relative">
              <div className="icon">
                <i className="bi bi-cpu"></i>
              </div>
              <h3>Workflow Automation</h3>
              <p>Automating complex business processes using low-code/no-code platforms and custom API integrations to significantly increase operational efficiency.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item item-teal position-relative">
              <div className="icon">
                <i className="bi bi-chat-dots"></i>
              </div>
              <h3>Chatbot Solutions</h3>
              <p>Developing intelligent conversational bots for WhatsApp and other platforms using RappidBot and Z-API to enhance customer engagement.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item item-red position-relative">
              <div className="icon">
                <i className="bi bi-hdd-network"></i>
              </div>
              <h3>API Design & Integration</h3>
              <p>Designing and implementing robust RESTful APIs that ensure seamless and secure communication between various software systems and third-party services.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item item-indigo position-relative">
              <div className="icon">
                <i className="bi bi-database"></i>
              </div>
              <h3>Database Management</h3>
              <p>Architecting and managing high-performance relational and NoSQL databases like MySQL, PostgreSQL, and MongoDB to ensure data integrity and speed.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item item-pink position-relative">
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h3>Technical Consulting</h3>
              <p>Providing expert advice on technical architecture, tool selection, and digital transformation strategies to help businesses grow through technology.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
