import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Accordion, Card } from 'react-bootstrap'
import "./Coursecontent.css"
import Notloggedin from './Notloggedin';
import Notenrolled from './Notenrolled';

import { UserContext } from "./UserContextProvider";

const Coursecontent = () => {

    const [enrollAuth, setEnrollAuth] = useState(false)
    const [listOfContents, setListOfContents] = useState([{
        contentName: "",
        video_list: []
    }])
    const navigate = useNavigate()
    const callEnrollAuthPage = async () => {
        const course_id = (window.location.href).split("/")[4]
        try {
            const response = await fetch(`/courses/enrollAuth/${course_id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await response.json();

            if (data)
                setEnrollAuth(true)

        } catch (err) {
            console.log(err)
            navigate('/adn')
        }
    }

    const callContentPage = async () => {
        const course_id = (window.location.href).split("/")[4]
        try {
            const response = await fetch(`/courses/getContent/${course_id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await response.json();
            setListOfContents(data.listOfContents)

        } catch (err) {
            console.log(err)
            navigate('/adn')
        }
    }

    useEffect(() => {
        callContentPage()
        if (state) {
            callEnrollAuthPage()
        }
    }, [])

    const VideoStream = () => {
        return (
            <>
                <div className='flex-grow-1 m-3 border border-2'>
                    <div className='actual-video border border-2'>VIDEO DIV</div>
                </div>
            </>
        )
    }

    const { state, dispatch } = useContext(UserContext);
    return (
        <>
            <div className='d-flex'>
                <Content_list listOfContents={listOfContents} />
                {!state ? <Notloggedin /> : (!enrollAuth ? <Notenrolled /> : <VideoStream />)}
                <div>{enrollAuth}</div>
            </div>
        </>
    )
}

const Content_list = ({ listOfContents }) => {
    return (
        <>
            <Accordion defaultActiveKey="0" className='outer-div-content ms-5 border border-2 rounded'>
                {listOfContents.map((listOfContent, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>{listOfContent.contentName}</Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    {(listOfContent.video_list).map((video, index2) => {
                                        return (
                                            <li key={index2} className="list-group-item video-names">{video}</li>
                                        )
                                    })}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </>
    )
}

export default Coursecontent
