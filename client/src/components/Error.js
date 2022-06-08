import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="alert alert-danger warning-msg" role="alert">
                <h4 className="alert-heading">404 NOT FOUND</h4>
                <p>We can't seem to find the page you're looking for. The requested page has either been moved to a different location or it does not exist. Please go to <span className='fw-bolder'>Home Page</span> to choose a new direction.</p>
                <hr />
                <Link to="/">
                    <button type="button" className="mb-0 btn btn-danger">
                        Home Page
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Error