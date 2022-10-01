import React from 'react';
import Header from './Header';
import { Link } from "react-router-dom";
import './assets/css/custom.css';
import './assets/css/style.css';
import './assets/img/about.jpg';
import './img/hero-bg.jpg';
import './assets/js/main';
const Home=()=>
{
  return(
    <div>
    <Header />
    <section id="hero" className="d-flex align-items-center">
      <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay={100}>
        <h1>Shivam Verma</h1>
        <h2>I'm a Competitive Programmer &amp; Web Developer</h2>
        <Link to="/about" className="btn-about">About Me</Link>
      </div>
    </section>
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  </div>
  );
}
export default Home;