import React from 'react';
import Header from './Header';

import './assets/css/custom.css';
import './assets/css/style.css';
import img from './assets/img/about.jpg';
import './img/hero-bg.jpg';
import './assets/js/main';
const Home=()=>
{
  return(
    <div>
    <Header />
    <main id="main">
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Competitive Programmer &amp; Web Developer</h3>
              <p className="fst-italic">
                I'm a IT student who is passionate about writing code, solving problems, Data Structures and Algorithms, and building software.
              </p>
              <div className="row">
                <div className="col-lg">
                  <ul>
                    <li>🔭 I’m currently a IT student at MMMUT, Gorakhpur.<br /></li>
                    <li>📚 I’m currently learning Front-end web development using React.<br /></li>
                    <li>⏩ I have solved more than 750+ DSA questions on various coding platform.<br /></li>
                    <li>👯 I’m looking for a software development internship.<br /></li>
                    <li>📫 How to reach me: Linkedin, Gmail.<br /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="row skills-content ">
            <div className="skillico">
              <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" className="skill-icon" />
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" className="skill-icon" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" className="skill-icon" />
              <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" className="skill-icon" />
            </div>
            <div className="skillico">
              <img src="https://img.shields.io/badge/PHP-474A8A?style=for-the-badge&logo=php&logoColor=white" className="skill-icon" />
              <img src="https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=react&logoColor=white" className="skill-icon" />
              <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" className="skill-icon" />
              <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" className="skill-icon" />          
            </div>
          </div>
        </div>
      </section>
    </main>
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  </div>
  );
}
export default Home;