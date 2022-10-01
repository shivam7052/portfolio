import React from 'react';

import './assets/css/custom.css';
import './assets/css/style.css';
import './img/hero-bg.jpg';
import Header from './Header';
import './assets/js/main';
const Home=()=>
{
  return(
    <div>
      <Header />
    <main id="main">
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>Madan Mohan Malviya University Of Technology, Gorakhpur</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p><a href="mailto:shivam7052128830@gmail.com">shivam7052128830@gmail.com</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info">
                <div className="address">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p><a href="tel:+919696034426">+91-9696034426</a></p>
                </div>
                <div className="email">
                  <i className="bi bi-chat-right-dots" />
                  <h4>Social Profiles</h4>
                  <div className="header-social-links">
                    <p>
                      <a href="https://www.codechef.com/users/shivam7052" target="_blank" className="linkico"><img src="https://img.icons8.com/ios-filled/50/000000/codechef.png" /></a>
                      <a href="https://www.linkedin.com/in/shivam7052/" target="_blank" className="linkico"><img src="https://img.icons8.com/glyph-neue/64/000000/linkedin.png" /></a>
                      <a href="https://github.com/shivam7052" target="_blank" className="linkico"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" /></a>
                    </p>
                  </div>
                </div>
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