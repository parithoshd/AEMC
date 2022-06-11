import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Courses.css";
import Onecourse from "./Onecourse";

import WebDev from "./images/Web Dev.jpg";
import ML from "./images/ML.jpg";
import clang from "./images/c.png";
import cpp from "./images/cpp.jpg"

const Courses = () => {
  let thumbnails = [WebDev, ML, clang, cpp];

  const navigate = useNavigate();
  const [btnValue, setBtnValue] = useState("Enroll");
  const [courseData, setCourseData] = useState([
    {
      courseName: "",
      duration: "",
      cost: "",
      courseDescription: "",
      listOfContents: [],
      exam: [],
    },
  ]);

  const callCoursesPage = async () => {
    try {
      const response = await fetch("/courses", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      setCourseData(data);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  useEffect(() => {
    callCoursesPage();
  }, []);

  let i = 0;

  const handleClick = (newCourse) => {
    window.scrollTo(0, 0);
    <Onecourse course={newCourse} />;
  };
  return (
    <div className="Course-BG">
      <div className="section-title">
        <span className="sub-title">
          Go at your own pace
        </span>
        <h2 >
          India's Largest Selection Of Medical Coding Courses!
        </h2>
        <p >
          As our name says “Ask Experts Medical Coding Academy”, you can ask us
          anything and get an immediate and easy solution to that. Your focus
          with us will get you placement and also advanced knowledge on the
          latest technologies of the rapidly growing sectors in the medical
          coding.
        </p>
      </div>

      <div className="d-flex row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 m-5">
        {courseData.map((course, index) => {
          return (
            <div key={index} className="col d-flex">
              <div className="card h-100" id={index}>
                <img
                  src={thumbnails[i++]}
                  className="card-img-top"
                  alt="img"
                  height="50%"
                />
                <div className="card-body">
                  <NavLink
                    to={`/courses/${course._id}`}
                    onMouseOver={() => {
                      document.getElementById(index).style.border =
                        "1px solid black";
                      document.getElementById(index).style.transition = "0.5s";
                    }}
                    onMouseOut={() => {
                      document.getElementById(index).style.border = "none";
                      document.getElementById(index).style.transition = "0.5s";
                    }}
                    className="card-title text-decoration-none font-weight-bold"
                    onClick={() => handleClick(course)}
                  >
                    <span className="course-name-link">
                      {course.courseName.toUpperCase()}
                    </span>
                  </NavLink>
                  <p className="card-text">
                    {course.courseDescription.slice(0, 100).concat("...")}
                  </p>
                </div>
                <div className="d-flex card-footer justify-content-around">
                  <h6>DURATION: {course.duration}</h6>
                  <h6>COST: Rs {course.cost}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
