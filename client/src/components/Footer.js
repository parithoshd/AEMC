import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>AEMC</h6>
            <p className="text-justify">Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Explore</h6>
            <ul className="footer-links">
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

          <div className="col-xs-6 col-md-3 address">
            <h6>Address</h6>
            <p>Ask Experts Medical Coding Academy Pvt Ltd</p>
            <p>No 316-P1 & 317-P1 Hebbal Industrial Area</p>
            <p>Mysore, Karnataka, India – 570026</p>
            <p>Phone Number: 8861866399</p>
            <p>Email: info@aemedicalcoding.com</p>
          </div>
        </div>

      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">&copy; 2021 All rights reserved by AEMC
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fi fi-brands-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fi fi-brands-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fi fi-brands-youtube"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fi fi-brands-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer