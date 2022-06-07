import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import './Onecourse.css'

import Coursecontent from "./Coursecontent"
import Coursedescription from './Coursedescription'
import Coursenotes from './Coursenotes'
import Coursetest from './Coursetest'
import Notloggedin from './Notloggedin'
import Notenrolled from './Notenrolled'
import { UserContext } from "./UserContextProvider";

const Onecourse = (props) => {
    const [activeTab, setActiveTab] = useState("Description")
    const { state, dispatch } = useContext(UserContext);

    var mini = true;

    function toggleSidebar() {
        if (mini) {
            console.log('opening sidebar');
            // document.getElementById('mySidebar').style.width = '180px';
            document.getElementById('main').style.marginLeft = '250px';
            document.getElementById('main').style.transition = '0.6s';
            mini = false;
        } else {
            console.log('closing sidebar');
            // document.getElementById('mySidebar').style.width = '200px';
            document.getElementById('main').style.marginLeft = '20px';
            document.getElementById('main').style.transition = '0.6s';
            mini = true;
        }
    }



    const Sidebar = () => {

        return (
            <>

                <nav className="main-menu" id='mySidebar' onMouseOver={() => toggleSidebar()} onMouseOut={() => toggleSidebar()}>
                    <ul>

                        <li className="sidebar-links" onClick={() => { setActiveTab("Description"); document.getElementById('main').style.marginLeft = '20px' }}>
                            <button className='li-btn d-flex'>
                                <i className='bx bxs-book-content fa-2x'></i>
                                Description
                            </button>

                        </li>
                        <li className="sidebar-links" onClick={() => { setActiveTab("Content"); document.getElementById('main').style.marginLeft = '20px' }}>
                            <button className='li-btn d-flex'>
                                <i className='bx bxs-notepad fa-2x' ></i>
                                Content
                            </button>

                        </li>
                        <li className="sidebar-links" onClick={() => { setActiveTab("Notes"); document.getElementById('main').style.marginLeft = '20px' }}>
                            <button className='li-btn d-flex'>
                                <i className='bx bxs-file-doc fa-2x'></i>
                                Notes
                            </button>

                        </li>
                        <li className="sidebar-links" onClick={() => { setActiveTab("Test"); document.getElementById('main').style.marginLeft = '20px' }}>
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
            <div id='main' className='Onecourse'>
                <Sidebar />


                <div className="component-grp">
                    {activeTab === "Description" && <Coursedescription />}
                    {activeTab === "Content" && <Coursecontent />}
                    {activeTab === "Notes" && (state ? <Coursenotes /> : <Notloggedin />)}
                    {activeTab === "Test" && (state ? <Coursetest /> : <Notloggedin />)}
                </div>
            </div>
        </>
    )
}

export default Onecourse