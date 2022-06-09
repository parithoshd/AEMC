import React from 'react'
import "./Notenrolled.css"
import { Link } from 'react-router-dom'

const Notenrolled = () => {
    return (
        <>
            <div className="alert alert-info warning-msg" role="alert">
                <h4 className="alert-heading">Please Enroll to Continue</h4>
                <p>It looks like you haven't Enrolled to this course yet. Please <span className='fw-bolder'>Enroll</span> to Continue</p>
                <p>If enrolled, Please Wait while the Page is Loading...</p>
                <hr />
                <Link to="/courses">
                    <button type="button" className="mb-0 green-btn">
                        Enroll
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Notenrolled