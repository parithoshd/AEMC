import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Userdetails.css"

const Userdetails = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        enrolledCourses: [{
            enrolledCourseID: "",
            enrolledCourseName: "",
            enrolledOn: "",
            grade: ""
        }]
    });

    const callUserDetailsPage = async () => {
        try {
            const response = await fetch("/userdetails", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await response.json();
            setUserData(data);

            if (!response.status === 200) {
                throw new Error(response.Error);
            }
        } catch (err) {
            console.log(err);
            navigate("/login");
        }
    };

    useEffect(() => {
        callUserDetailsPage();
    }, []);

    let value = 1
    return (
        <>

            <div className='m-5 p-3 d-flex justify-content-around userdetail-main'>
                {/* Name And Email */}
                <div className='userdetail-name-email'>
                    <h1 className='user-name'>{(userData.firstName) + " " + (userData.lastName)}</h1>
                    <h4 className='user-email'>{userData.email}</h4>
                </div>
                <br /><br />
                {/* Enrolled Courses */}
                {(userData.enrolledCourses).length > 0 ?
                    <table className="table table-hover w-75 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Enrolled On</th>
                                <th scope="col">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.enrolledCourses.map((enrolledCourse, index) => {
                                return (
                                    <tr key={index}>
                                        {/* <th scope="row">{enrolledCourse.enrolledCourseID}</th> */}
                                        <th scope="row">{value++}</th>
                                        <td>{enrolledCourse.enrolledCourseName}</td>
                                        <td>{(enrolledCourse.enrolledOn.slice(0, 10))}</td>
                                        <td>{enrolledCourse.grade}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    :
                    <div className='enrolled-course-msg'>Not enrolled to any of the courses yet</div>
                }
            </div>
        </>
    )
}

export default Userdetails