import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.css'
const Footer = () => {
  return (
    <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>AEMC</h6>
          <p class="text-justify">Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!</p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Explore</h6>
          <ul class="footer-links">
            <li>                <NavLink className="nav-link active" aria-current="page" to="/" onClick={() => { window.scrollTo(0, 0) }}>
                  Home
                </NavLink></li>
            <li>                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      const anchor = document.querySelector("#about");
                      document
                        .querySelector("#about")
                        .scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 100)
                  }}
                >
                  About Us
                </NavLink></li>
            <li>                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                  onClick={() => { window.scrollTo(0, 0) }}
                >
                  Contact Us
                </NavLink></li>
            <li>                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/courses"
                  onClick={() => { window.scrollTo(0, 0) }}
                >
                  Courses
                </NavLink></li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3 address">
          <h6>Address</h6>
        <p>Ask Experts Medical Coding Academy Pvt Ltd</p>
        <p>No 316-P1 & 317-P1 Hebbal Industrial Area</p>
        <p>Mysore, Karnataka, India – 570026</p>
        <p>Phone Number: 8861866399</p>
        <p>Email: info@aemedicalcoding.com</p>
        </div>
      </div>
      
    </div>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">&copy; 2021 All rights reserved by AEMC
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a class="facebook" href="#"><i class="fi fi-brands-facebook"></i></a></li>
            <li><a class="twitter" href="#"><i class="fi fi-brands-twitter"></i></a></li>
            <li><a class="dribbble" href="#"><i class="fi fi-brands-youtube"></i></a></li>
            <li><a class="linkedin" href="#"><i class="fi fi-brands-instagram"></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
  )
}

export default Footer