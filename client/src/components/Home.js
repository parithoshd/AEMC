import React from "react";
import { Carousel } from "react-bootstrap";

import "./Home.css";

import homeimg from "./images/home1.jpg";
import aboutimag from "./images/medcodss.png";
import aboutus_image from "./images/aboutus_image.png";

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

                <a
                  routerlink="/contact"
                  className="default-btn"
                  href="/contact"
                >
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
        <div className="about-title-area">
          <div className="container">
            <h2>About us</h2>
          </div>
        </div>
        <div className="about-area ptb-25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                  <img src={aboutimag} id="aboutimg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <h2>
                    Your success of becoming a professional medical coder is
                    what AEMC aims at!
                  </h2>
                  <span id="about"></span>
                  <p>
                    The best medical coding academy with certified professional
                    trainers who are capable of teaching you from the scratch
                    and also nurture your knowledge. Our trainers have deserving
                    experience and are of high standards in terms of medical
                    coding to be in precise.
                  </p>
                  <p>
                    AEMC strives to enhance the skills of a medical coder to get
                    better opportunity in reputed companies in India as well as
                    abroad. We provide certification as the certified coders are
                    recognized internationally in the Healthcare Industry with
                    excellent career growth and salary package.
                  </p>
                  <ul className="features-list">
                    <li>
                      <span>
                        <i class="fi fi-rs-laptop"></i>
                        Remote Learning
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fi fi-ss-earnings"></i>
                        Self Development
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fi fi-rr-time-forward"></i>
                        Lifetime Access
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fi fi-rs-briefcase"></i>
                        Expert Instruction
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-area-two ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="about-content-box">
                  <h2>
                    Build Your Medical Coding Skills Online, Anytime with AEMC!
                  </h2>
                  <p>
                    <strong>Why choose AEMC?</strong>
                  </p>
                  <ul>
                    <li>
                      Medical coding certifications from AAPC are the gold
                      standard in the healthcare industry.
                    </li>
                    <li>
                      Certifications are nationally recognized by employers.
                    </li>
                    <li>
                      Experienced trainers with 10 years of real-time coding.
                    </li>
                    <li>
                      Our trainers have training experiences in corporate level
                      for coding training sessions for newbies.
                    </li>
                    <li>
                      Multiple certification and expertise in multi-specialty
                      medical coding.
                    </li>
                    <li>Individual attention to each and every trainees.</li>
                    <li>100% success rate for placement of trainees</li>
                    <li>Reputed and Multi National Company placements.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-img-box">
                  <img src={aboutus_image} alt=" image " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-area ptb-100">
          <h1>Course Reviews</h1>
          <Carousel>
            <Carousel.Item>
              <div className="caritem ptb-25">
                <p>
                I have very much enjoyed this course.. it was just what I was looking for. I will be seeking employment first just to get my feet wet. At some point I want to start my own business. I will be contacting you when that time comes. Thank you for this experience! You really went way above my expectations.
                </p>
                <h5> Teisha David</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="caritem ptb-25">
                <p> This is a well outlined course that is plain and simple that could help anyone get into this business. The teaching method is unique and suitable for everyone to understand the ideals of the course. I highly recommend this course! You won’t be alone – the support is terrific!</p>
                <h5>Shelly Anju</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="caritem ptb-25">
                <p>This course is one of the best formatted courses I have ever seen. It is a great refresher for even the most experienced! Wonderful course! Love the outline and content. Very up to date information covered. I highly recommend it to all staff and managers. Everyone should take this course!</p>
                <h5>Alisha Raghava</h5>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
