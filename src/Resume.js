import React from 'react';
import Header from './Header';
import './assets/css/custom.css';
import './assets/css/style.css';
import './img/hero-bg.jpg';
import './assets/js/main';
const Home=()=>
{
  return(
    <div>
        <Header />
        <main id="main">
          <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Resume</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="resume-title">Summary</h3>
                  <div className="resume-item pb-0">
                    <h4>Shivam Verma</h4>
                    <p><em>I'm Shivam Verma, currently pursuing B.tech from MMMUT, Gorakhpur, in major of information technology.</em></p>
                    <p>
                    </p><ul>
                      <li>Contact No: <a href="tel:+919696034426">+919696034426</a></li>
                      <li>Email ID: <a href="mailto:shivam7052128830@gmail.com">shivam7052128830@gmail.com</a></li>
                      <li>Linkedin: <a href="https://www.linkedin.com/in/shivam7052/">https://www.linkedin.com/in/shivam7052/</a></li>
                    </ul>
                    <p />
                  </div>
                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>B.Tech (Information Technology)</h4>
                    <h5>2019 - 2023</h5>
                    <h5>CGPA: 8.35</h5>
                    <p><em>Madan Mohan Malaviya University of Technology, Gorakhpur</em></p>
                  </div>
                  <div className="resume-item">
                    <h4>Class X (UP BOARD)</h4>
                    <h5>2014 - 2015</h5>
                    <h5>PERCENTAGE: 82.6%</h5>
                    <p><em>Sri Subhash Inter College Paliya, Sultanpur</em></p>
                  </div>
                  <div className="resume-item">
                    <h4>Class XII (UP BOARD)</h4>
                    <h5>2016 - 2017</h5>
                    <h5>PERCENTAGE: 82.4%</h5>
                    <p><em>Sri Subhash Inter College Paliya, Sultanpur</em></p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="resume-title">Experience</h3>
                  <div className="resume-item">
                    <h4>Technical Blog writer Intern</h4>
                    <h5>January 2022 - May 2022</h5>
                    <p><em>Coding Ninjas</em></p>
                    <p>
                    </p><ul>
                      <li>Work with a team of 15+ members </li>
                      <li>Written more than 50 technical blogs till May 2022. </li>
                    </ul>
                    <p />
                  </div>
                  <h3 className="resume-title">Projects</h3>
                  <div className="resume-item">
                    <h4>Chat App</h4>
                    <p>
                    </p><ul>
                      <li><b>Project Link: <a href="https://github.com/shivam7052/chat-application" target="_blank"><i className="bi bi-box-arrow-up-right" /></a></b> </li>
                      <li>It's a simple real-time chat application similar to the messenger.</li>
                      <li>Html, CSS, and JavaScript are used for the front-end, PHP and MYSQL are used for the back-end. </li>
                    </ul>
                    <p />
                  </div>
                  <div className="resume-item">
                    <h4>Tic-Tac-Toe </h4>
                    <p>
                    </p><ul>
                      <li><b>Project Link: <a href="https://tic-tac-toe-gm.herokuapp.com/" target="_blank"><i className="bi bi-box-arrow-up-right" /></a></b> </li>
                      <li>Simple React app using React-Toastify and Reactstrap</li>
                    </ul>
                    <p />
                  </div>
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