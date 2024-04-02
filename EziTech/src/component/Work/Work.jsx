// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Work.css'
import signupImg from '../../assets/signupImg.jpeg'
import courseImg from '../../assets/courseImg.jpeg'
import learnImg from '../../assets/learnImg.jpeg'

const Work = () => {
  return (
    <div className='work'>
        <div className="heading">
            <h1>How it works?</h1>
        </div>
        <div>
            <div className="modules d-flex ">
                <div className="signUpModules imgeSize m-4 ">
                    <img src={signupImg} alt="" />
                    <h4>Sign up</h4>
                    <p>Enter your name, email, and contact details to get started. It truly is that simple!</p>
                </div>
                <div className="courseModules imgeSize m-4 ">
                <img src={courseImg} alt="" />
                    <h4>Select course</h4>
                    <p>Browse our extensive and ever-expanding variety of courses for professional development.</p>
                </div>
                <div className="learningModules imgeSize m-4">
                <img src={learnImg} alt="" />
                    <h4>Start Learning</h4>
                    <p>Do the tasks, and your teacher will evaluate them before providing you with thorough</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Work
