import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>A comprehensive overview of my professional experience, education, and technical expertise in software development and automation.</p>

      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Maduchor Wisdom U.</h4>
              <p><em>Software Engineer with hands-on experience building RESTful APIs, automation systems, backend
                    integrations, scalable web and mobile applications using React, Angular, Node.js, Express.js, and
                    MongoDB. <br /> Skilled in API integration, database management, authentication workflows, and backend
                    system optimization.
                  </em>
              </p>
              <br />
              <ul>
                <li>Lagos, Nigeria</li>
                <li>09165487607 / 09079785154</li>
                <li>maduchorwisdom@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.Eng. Computer Engineering</h4>
              <h5>2026</h5>
              <p><em>Federal University Oye-Ekiti</em></p>
            </div>

            <div className="resume-item">
              <h4>HND Computer Engineering</h4>
              <h5>2022</h5>
              <p><em>Yaba College of Technology</em></p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Automation Developer</h4>
              <h5>Feb. 2025 - Present</h5>
              <p><em>Bravo Ltd.</em></p>
              <ul>
                <li>Designed chatbot automation systems using RappidBot and low-code automation platforms.</li>
                <li>Integrated bots with Z-API to enable automated two-way messaging on WhatsApp.</li>
                <li>Worked closely with clients to gather requirements and build automation solutions.</li>
                <li>Created logic-driven chatbot sequences with conditions, triggers, and custom API calls.</li>
                <li>Built a data scraping system to structure real-time data into CSV and Excel formats.</li>
                <li>Connected automation workflows with Google Sheets, email services, and third-party APIs.</li>

                {/* <li>Improved deployment efficiency through reusable automation templates.</li>
                <li>Documented workflow architectures to support scalable client implementations.</li> */}
              </ul>
            </div>

            {/* <div className="resume-item">
              <h4>Software Developer (Freelance)</h4>
              <h5>Mar. 2025</h5>
              <p><em>Remote</em></p>
              <ul>
                <li>Developed a responsive food ordering website using React.js and Firebase.</li>
                <li>Integrated frontend with backend services via RESTful APIs.</li>
                <li>Implemented real-time cart updates using React Hooks and Context API.</li>
              </ul>
            </div> */}

            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>Feb. 2023 - Jan. 2025</h5>
              <p><em>Technocrat IT -- Lagos, Nigeria</em></p>
              <ul>
                <li> Collaborated with backend developers to integrate RESTful APIs into ERP web applications.</li>
                <li> Used Swagger and Postman to document, test, and debug backend API endpoints.</li>
                <li> Assisted in implementing scalable application modules using Angular and TypeScript within Agile development environments.</li>
                <li> Supported troubleshooting and optimization of application performance and client-server communication.</li>
                <li> Participated in software testing, debugging, and deployment workflows.</li>
                <li> Maintained version control practices using Git, GitHub, and GitLab collaboration
                workflows.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>Aug. 2022 - March 2023</h5>
              <p><em>Tech1M -- United Kingdom (Remote)</em></p>
              <ul>
                <li>Developed and maintained responsive web applications using HTML, CSS, JavaScript and BreeCMS.</li>
                <li>Integrated platform features and supported website optimization initiatives.</li>
                <li>Worked directly with clients to identify and resolve technical issues.</li>
                <li>Collaborated with the marketing team to align on project goals.</li>
                <li>Applied SEO and web performance best practices to improve usability and accessibility.</li>

              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
