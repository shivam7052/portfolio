import React from "react";
import { Link } from "react-router-dom";
import './assets/css/custom.css';
import './assets/css/style.css';
import './img/hero-bg.jpg';
import './assets/js/main';
const fun=()=>
{
    return (
        <header id="header" className="fixed-top">
          <div className="container-fluid d-flex justify-content-between align-items-center ">
            <h1 className="logo me-auto me-lg-0"><a href="index.html">✮𝓢𝓱𝓲𝓿𝓪𝓶</a></h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
              <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            <div className="header-social-links">
              <a href="https://www.codechef.com/users/shivam7052" target="_blank" className="linkico"><img src="https://img.icons8.com/ios-filled/50/000000/codechef.png" /></a>
              <a href="https://auth.geeksforgeeks.org/user/shivam7052" target="_blank" className="linkico"><img src="https://img.icons8.com/color/48/000000/GeeksforGeeks.png" /></a>
              <a href="https://leetcode.com/shivam7052/" target="_blank" className="linkico"><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" /></a>
              <a href="https://github.com/shivam7052" target="_blank" className="linkico"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" /></a>
              <a href="https://www.linkedin.com/in/shivam7052/" target="_blank" className="linkico"><img src="https://img.icons8.com/glyph-neue/64/000000/linkedin.png" /></a>
            </div>
          </div>
        </header>
    );
}
export default fun;