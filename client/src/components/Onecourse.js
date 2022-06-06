import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Onecourse.css'

import Coursecontent from "./Coursecontent"
import Coursedescription from './Coursedescription'
import Coursenotes from './Coursenotes'
import Coursetest from './Coursetest'
// import Sidebar from "./Sidebar"

const Onecourse = (props) => {
    const [activeTab, setActiveTab] = useState("Description")
    const [mini, setMini] = useState(true)
    // const [mainMenuExpanded, setMainMenuExpanded] = useState(false)
    // const [mainDiv, setMainDiv] = useState(false)

    // const toggleSidebar = () => {
    //     if (mini) {
    //         console.log("opening sidebar");
    //         setMainMenuExpanded(true)
    //         setMainDiv(true)
    //         setMini(false)
    //     } else {
    //         console.log("closing sidebar");
    //         setMainMenuExpanded(false)
    //         setMainDiv(false)
    //         setMini(true)
    //     }
    // }

    const Sidebar = () => {

        return (
            <>

                <nav className="main-menu">
                    <ul>

                        {/* <li className="" onClick={() => setActiveTab("Description")}>
                            <a href="#" >
                                <i className='bx bxs-book-content fa-2x'></i>
                                Description
                            </a>
                        </li>

                        <li className="" onClick={() => setActiveTab("Content")}>
                            <a href="#">
                                <i className='bx bxs-notepad fa-2x' ></i>
                                Content
                            </a>
                        </li>

                        <li className="" onClick={() => setActiveTab("Notes")}>
                            <a href="#">
                                <i className='bx bxs-file-doc fa-2x'></i>
                                Notes
                            </a>
                        </li>

                        <li className="" onClick={() => setActiveTab("Test")}>
                            <a href="#">
                                <i className='bx bxs-edit-alt fa-2x'></i>
                                Test
                            </a>

                        </li> */}

                        <li className="" onClick={() => setActiveTab("Description")}>
                            <button className='li-btn d-flex'>
                                <i className='bx bxs-book-content fa-2x'></i>
                                Description
                            </button>

                        </li>
                        <li className="" onClick={() => setActiveTab("Content")}>
                            <button className='li-btn d-flex'>
                                <i className='bx bxs-notepad fa-2x' ></i>
                                Content
                            </button>

                        </li>
                        <li className="" onClick={() => setActiveTab("Notes")}>
                            <button className='li-btn d-flex'>
                                <i className='bx bxs-file-doc fa-2x'></i>
                                Notes
                            </button>

                        </li>
                        <li className="" onClick={() => setActiveTab("Test")}>
                            <button className='li-btn d-flex'>
                                <i className='bx bxs-edit-alt fa-2x'></i>
                                Test
                            </button>

                        </li>

                    </ul>

                </nav>


            </>
        )
    }

    return (
        <>
            <div className='Onecourse'>
                <Sidebar />
                {/*   */}

                <div className="component-grp">
                    {activeTab === "Description" && <Coursedescription />}
                    {activeTab === "Content" && <Coursecontent />}
                    {activeTab === "Notes" && <Coursenotes />}
                    {activeTab === "Test" && <Coursetest />}
                </div>
            </div>
        </>
    )
}

export default Onecourse