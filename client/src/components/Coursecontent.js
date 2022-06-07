import React, { useContext } from 'react'
// import { NavLink } from 'react-router-dom'
import "./Coursecontent.css"
import Notloggedin from './Notloggedin';

import { UserContext } from "./UserContextProvider";

const Content = () => {
    const { state, dispatch } = useContext(UserContext);
    return (
        <>
            <div className='d-flex'>
                <Content_list />
                {!state ? <Notloggedin /> :
                    (
                        <div className='flex-grow-1 m-3 border border-2'>
                            <div className='actual-video border border-2'>VIDEO DIV</div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

const Content_list = () => {
    return (
        <>
            <div className="accordion outer-div-content ms-5 accordion-main border border-2 rounded" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button video-header" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Introduction
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show " aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item video-names">Introduction Video 1</li>
                                <li className="list-group-item video-names">Introduction Video 2</li>
                                <li className="list-group-item video-names">Introduction Video 3</li>
                                <li className="list-group-item video-names">Introduction Video 4</li>
                                <li className="list-group-item video-names">Introduction Video 5</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed video-header" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Advanced
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item video-names">Advanced Video 1</li>
                                <li className="list-group-item video-names">Advanced Video 2</li>
                                <li className="list-group-item video-names">Advanced Video 3</li>
                                <li className="list-group-item video-names">Advanced Video 4</li>
                                <li className="list-group-item video-names">Advanced Video 5</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed video-header" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Application
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item video-names">Application Video 1</li>
                                <li className="list-group-item video-names">Application Video 2</li>
                                <li className="list-group-item video-names">Application Video 3</li>
                                <li className="list-group-item video-names">Application Video 4</li>
                                <li className="list-group-item video-names">Application Video 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content