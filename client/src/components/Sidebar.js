import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Sidebar.css"

const Sidebar = () => {

    return (
        <>

            <nav className="main-menu">
                <ul>
                    <li className=''>
                        <a href="#">
                            <i className='bx bxs-book-content fa-2x'></i>
                            <NavLink to="/" className="nav-text">
                                Description
                            </NavLink>
                        </a>

                    </li>

                    <li className="">
                        <a href="#">
                            <i className='bx bxs-notepad fa-2x' ></i>
                            <NavLink to="/" className="nav-text">
                                Contents
                            </NavLink>
                        </a>
                    </li>

                    <li className="">
                        <a href="#">
                            <i className='bx bxs-file-doc fa-2x'></i>
                            <NavLink to="/" className="nav-text">
                                Notes
                            </NavLink>
                        </a>
                    </li>

                    <li className="">
                        <a href="#">
                            <i className='bx bxs-edit-alt fa-2x'></i>
                            <NavLink to="/" className="nav-text">
                                Test
                            </NavLink>
                        </a>

                    </li>

                </ul>

            </nav>


        </>
    )
}

export default Sidebar