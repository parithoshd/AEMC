import React, { useState, useEffect } from 'react'
import "./Coursetest.css"
import { useNavigate } from 'react-router-dom';

const Coursetest = () => {
    const navigate = useNavigate()
    const [showResults, setShowResults] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showInstructions, setInstructions] = useState(true)
    const [disableChoice, setDisableChoice] = useState(false)
    const [disableBtn, setDisableBtn] = useState(true)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [buttonValue, setButtonValue] = useState("Next Question")

    // const examQuestions = [
    //     {
    //         question: "Question 1",
    //         choices: [
    //             { choice: "Option 1" },
    //             { choice: "Option 2" },
    //             { choice: "Option 3" },
    //             { choice: "Option 4" }
    //         ],
    //         answer: "Option 1"
    //     },
    //     {
    //         question: "Question 2",
    //         choices: [
    //             { choice: "Option 1" },
    //             { choice: "Option 2" },
    //             { choice: "Option 3" },
    //             { choice: "Option 4" }
    //         ],
    //         answer: "Option 2"
    //     },
    //     {
    //         question: "Question 3",
    //         choices: [
    //             { choice: "Option 1" },
    //             { choice: "Option 2" },
    //             { choice: "Option 3" },
    //             { choice: "Option 4" }
    //         ],
    //         answer: "Option 3"
    //     },
    //     {
    //         question: "Question 4",
    //         choices: [
    //             { choice: "Option 1" },
    //             { choice: "Option 2" },
    //             { choice: "Option 3" },
    //             { choice: "Option 4" }
    //         ],
    //         answer: "Option 4"
    //     },
    //     {
    //         question: "Question 5",
    //         choices: [
    //             { choice: "Option 1" },
    //             { choice: "Option 2" },
    //             { choice: "Option 3" },
    //             { choice: "Option 4" }
    //         ],
    //         answer: "Option 1"
    //     },
    //     {
    //         question: "Question 6",
    //         choices: [
    //             { choice: "Option 1" },
    //             { choice: "Option 2" },
    //             { choice: "Option 3" },
    //             { choice: "Option 4" }
    //         ],
    //         answer: "Option 2"
    //     },
    //     {
    //         question: "Question 7",
    //         choices: [
    //             { choice: "Option 1" },
    //             { choice: "Option 2" },
    //             { choice: "Option 3" },
    //             { choice: "Option 4" }
    //         ],
    //         answer: "Option 3"
    //     },
    //     {
    //         question: "Question 8",
    //         choices: [
    //             { choice: "Option 1" },
    //             { choice: "Option 2" },
    //             { choice: "Option 3" },
    //             { choice: "Option 4" }
    //         ],
    //         answer: "Option 4"
    //     },
    //     {
    //         question: "Question 9",
    //         choices: [
    //             { choice: "Option 1" },
    //             { choice: "Option 2" },
    //             { choice: "Option 3" },
    //             { choice: "Option 4" }
    //         ],
    //         answer: "Option 1"
    //     },
    //     {
    //         question: "Question 10",
    //         choices: [
    //             { choice: "Option 1" },
    //             { choice: "Option 2" },
    //             { choice: "Option 3" },
    //             { choice: "Option 4" }
    //         ],
    //         answer: "Option 2"
    //     }
    // ];

    // {
    //     "question": "Question 1",
    //     "choices": ["Option 1", "Option 2", "Option 3", "Option 4"],
    //     "answer": "Option 1"
    // },

    const [examQuestions, setExamQuestions] = useState([{
        question: "",
        choices: [],
        answer: ""
    }])



    const callTestPage = async () => {
        try {
            const course_id = (window.location.href).split("/")[4]
            // console.log(course_id);
            const response = await fetch(`/courses/test/${course_id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await response.json();
            setExamQuestions(data.exam)
            // console.log(newexamQuestions)

        } catch (err) {
            console.log(err)
            navigate('/courses')
        }
    }




    useEffect(() => {
        callTestPage()
    }, [])


    const Instructions = () => {
        return (
            <>
                <h1>Test Instructions</h1>
                <div className='instructions'>
                    <li>The test consists of 10 questions.</li>
                    <li>All the questions are mandatory.</li>
                    <li>All the questions are Multiple Choice Questions.(MCQs)</li>
                    <li>Each question has four options.</li>
                    <li>Choose the correct answer among the four.</li>
                    <li>The grade will be displayed after answering all the questions.</li>
                    <li>You can attempt the test only once.</li>
                    <li>DO NOT CLOSE THE WINDOW WHILE THE TEST IS GOING ON.</li>
                    <li>DO NOT CHANGE TABS WHILE THE TEST IS GOING ON.</li>
                </div>
                <button className='test-strt' onClick={() => setInstructions(false)}>START THE TEST</button>
            </>
        )
    }

    const handleOptionClick = (e, actualAnswer) => {
        let answerColor;
        if (e.target.id === actualAnswer) {
            answerColor = "lightgreen";
            setScore(score + 1)
            console.log(score);
        } else {
            answerColor = "red";
        }
        document.getElementById(e.target.id).style.backgroundColor = answerColor;
        document.getElementById(actualAnswer).style.backgroundColor = "#00e600";
        setSelectedAnswer(e.target.id)
        setDisableBtn(false)
        setDisableChoice(true);
    };

    const handleNextQuestion = (actualAnswer) => {
        if (currentQuestion + 1 === examQuestions.length - 1) {
            setButtonValue("Submit")
        }
        if (currentQuestion + 1 < examQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }

        document.getElementById(actualAnswer).style.backgroundColor = "#d3d3d3";
        document.getElementById(selectedAnswer).style.backgroundColor = "#d3d3d3";
        setDisableChoice(false)
        setDisableBtn(true)

    }


    return (
        <>
            {showInstructions ? <Instructions /> :

                <div className="test">
                    <h1>QUIZ</h1>

                    <h2>Score: {score}</h2>

                    {showResults ? (
                        <div className="final-results">
                            <h1>Final Results</h1>
                            <h2>
                                {score} out of {examQuestions.length} correct - (
                                {(score / examQuestions.length) * 100}%)
                            </h2>
                            <button className='custom-btn btn px-4 mx-3 my-2' onClick={() => navigate('/')}>Go to Home Page</button>
                        </div>
                    ) : (
                        <div className="question-card">
                            <h2>
                                Question: {currentQuestion + 1} out of {examQuestions.length}
                            </h2>
                            <h3 className="question-text">
                                {examQuestions[currentQuestion].question}
                            </h3>

                            <ul className="options">
                                {examQuestions[currentQuestion].choices.map((choice, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={"option " + (disableChoice && "disable-choice")}
                                            id={choice}
                                            onClick={(e) => handleOptionClick(e, examQuestions[currentQuestion].answer)}
                                        >
                                            {choice}
                                        </li>
                                    );
                                })}
                            </ul>
                            <button className={"next-question " + (disableBtn && "disable-choice")} onClick={() => handleNextQuestion(examQuestions[currentQuestion].answer)}>
                                {buttonValue}
                            </button>
                        </div>
                    )}
                </div>
            }
        </>
    );
}

export default Coursetest