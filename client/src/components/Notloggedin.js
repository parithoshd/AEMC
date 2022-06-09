import React from 'react'
import { Link } from 'react-router-dom'

import "./Notloggedin.css"

const Notloggedin = () => {
    return (
        <>
            <div className='outer-warning'>
                <div class="alert alert-info warning-msg" role="alert">
                    <h4 class="alert-heading">Please Log In to Continue</h4>
                    <p>It looks like you haven't logged in yet. Please Click on <span className='fw-bolder'>Log In</span> to Continue</p>
                    <hr />
                    <Link to="/login">
                        <button type="button" className="mb-0 green-btn">
                            Log In
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Notloggedin