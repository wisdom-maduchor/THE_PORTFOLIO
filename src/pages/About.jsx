import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Initialize PureCounter
    if (window.PureCounter) {
      new window.PureCounter();
    }

    // Initialize Swiper
    if (window.Swiper) {
      document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
        new window.Swiper(swiperElement, config);
      });
    }

    // Skills animation logic
    if (window.Waypoint) {
      let skillsAnimation = document.querySelectorAll('.skills-animation');
      skillsAnimation.forEach((item) => {
        new window.Waypoint({
          element: item,
          offset: '80%',
          handler: function (direction) {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      });
    }
  }, []);

  return (
    <>
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>Passionate about creating efficient, automated solutions and high-quality web applications with a focus on user experience and performance.</p>

        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/img/profile-img.png" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 content">
              <h2>Software Engineer &amp; Automation Developer</h2>
              <p className="fst-italic py-3">
                Enthusiastic and fast-learning Software Engineer, eager to contribute to and grow within dynamic teams. Adaptable and solution-oriented, thrives in collaborative environments and always ready to take on new challenges.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>Available on Request</span></li> */}
                    <li><i className="bi bi-chevron-right"></i> <strong>GitHub:</strong> <span>github.com/wisdom-maduchor</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>09165487607 / 09079785154</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lagos, Nigeria</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Eng. (Ongoing)</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>maduchorwisdom@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>

                </div>
              </div>
              <p className="py-3">
                As a Software Engineer with experience in both frontend development (React, Angular) and automation (RappidBot, Z-API), I specialize in building scalable, user-centric applications. My expertise spans the entire development lifecycle, from designing intuitive UIs to integrating robust backend services and automating business workflows.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>A diverse set of technologies and tools used to build modern, scalable, and user-friendly digital products.</p>

        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>React.js / Frontend</span> <i className="val">95%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Angular.js</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>JavaScript / TypeSript</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Node.js / Express.js</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>Automation (RappidBot/Z-API)</span> <i className="val">95%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Databases (MySQL/MongoDB)</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Tailwind CSS</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Git / GitHub / Jira</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <section id="stats" className="stats section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Facts</h2>
          <p>Key highlights of my professional journey and the impact of my work.</p>
        </div>


        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                <p>Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                <p>Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hours Of Support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                <p>Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="testimonials" className="testimonials section">
        {/* <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>What clients and collaborators have to say about working with me.</p>
        </div> */}


        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
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
            <div className="swiper-wrapper">
              {/* <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>The automation solution provided was world-class. It saved us hundreds of hours of manual work and integrated perfectly with our existing systems.</span>
                    <i className="bi bi-quote quote-icon-right"></i>

                  </p>
                </div>
              </div> */}
              {/* More slides can be added here */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
