import React from "react";
import "./Home.css";
import homeimg from "./images/home1.jpg";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-wrapper-content">
                <h1>Build Skills With Experts Any Time, Anywhere</h1>
                <p>
                  Ask Experts Medical Coding Academy is one of the best, tried
                  and trusted medical coding professional training provider in
                  Mysore, Karnataka. Our training method is completely different
                  to others as we focus more on innovative training methods
                  which further grabs engagement.
                </p>

                <a routerlink="/contact" className="default-btn" href="/contact">
                  <button type="button" className="btn btn-primary btn-lg">
                    <i className="fi fi-rr-user"></i> Get Started Now
                  </button>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="banner-wrap-image">
                <img src={homeimg} alt="image"></img>
              </div>
            </div>
          </div>
          <div className="banner-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-banner-box">
                  <div className="icon">
                    <i className="fi fi-rr-globe"></i>
                  </div>
                  <h3> Online Courses</h3>
                  <p>
                    We are now online with Learning Management System directly
                    to your home!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-banner-box">
                  <div className="icon">
                    <i className="fi fi-rr-users-alt"></i>
                  </div>
                  <h3> Expert Teachers</h3>
                  <p>
                    Our trainers know how to train you quickly, efficiently, and
                    at your own pace!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-banner-box">
                  <div className="icon">
                    <i className="fi fi-rr-infinity"></i>
                  </div>
                  <h3> Lifetime Access</h3>
                  <p>
                    Get our subscription for Professional Coder Certification
                    Training and get lifetime access!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title">
            <h2 id="about">About us</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
