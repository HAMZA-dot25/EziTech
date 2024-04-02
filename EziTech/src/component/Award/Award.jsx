// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Award.css'
import president_img from '../../assets/President-of-pakistan-259x299.png'

const Award = () => {
  return (
    <div className='award py-5 '>
        <div className="heading">
            <h1>Best IT Services Award 2023</h1>
        </div>
        <div className='d-flex p-5 justify-content-center align-content-center '>
            <div className="president-image mx-lg-5  ">
                <img src={president_img} alt="" />
            </div>
            <div className="description mx-lg-5">
                <p><span>Ezitech Is affiliated With</span> Eziline Software House. 
                    Eziline has been awarded the prestigious Best Software House in IT sector award by the President of Pakistan. 
                    This is an incredible achievement and a testament to the hard work and dedication of the entire team at 
                    Eziline Software House. The award is a great recognition of the company’s 
                    achievements in the field of IT and serves as a major milestone in its journey towards success.</p>
                <p>This award is a huge source of motivation and inspiration for the entire team at Eziline Software House. 
                    <span>It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction.</span> 
                    The award acknowledges the hard work and 
                    of every member of the team who has contributed to the success of the company.</p>
                <p><span>Ismail Shah, the CEO of Eziline Software House Pvt Ltd,</span> received the Best Services Award in the IT sector 
                    from the <span>President of Pakistan, Dr. Arif Alvi,</span> 
                    in recognition of his remarkable contributions to the country’s technology industry.</p>

                <button>Eziline Profile</button>
            </div>
        </div>

      
    </div>
  )
}

export default Award
