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
              <p><em>Enthusiastic and fast-learning Software Engineer, eager to contribute to and grow within dynamic teams. Adaptable and solution-oriented, thrives in collaborative environments and always ready to take on new challenges.</em></p>
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
              <p><em>Federal University of Oye-Ekiti</em></p>
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
              <h5>June 2025 - Present</h5>
              <p><em>Bravo Ltd.</em></p>
              <ul>
                <li>Designed and developed conversational bots using RappidBot and other no-code/low-code platforms.</li>
                <li>Integrated bots with Z-API to enable automated two-way messaging on WhatsApp.</li>
                <li>Worked closely with clients to gather requirements and build automation solutions.</li>
                <li>Created logic-driven chatbot sequences with conditions, triggers, and custom API calls.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Software Developer (Freelance)</h4>
              <h5>Mar. 2025</h5>
              <p><em>Remote</em></p>
              <ul>
                <li>Developed a responsive food ordering website using React.js and Firebase.</li>
                <li>Integrated frontend with backend services via RESTful APIs.</li>
                <li>Implemented real-time cart updates using React Hooks and Context API.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>Feb. 2023 - Jan. 2025</h5>
              <p><em>Technocrat IT -- Lagos, Nigeria</em></p>
              <ul>
                <li>Assisted in the development and maintenance of ERP web applications using Angular and TypeScript.</li>
                <li>Utilized Swagger for API documentation and testing.</li>
                <li>Leveraged Postman for automated API testing and debugging.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>Aug. 2022 - March 2023</h5>
              <p><em>Tech1M -- United Kingdom (Remote)</em></p>
              <ul>
                <li>Assisted in front-end website development using BreeCMS.</li>
                <li>Collaborated with the marketing team to align on project goals.</li>
                <li>Built and maintained websites using HTML, CSS, and JavaScript.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
