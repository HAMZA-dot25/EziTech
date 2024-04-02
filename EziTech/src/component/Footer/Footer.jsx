// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import designing_img from '../../assets/designing.png'
import service_img from '../../assets/archtecture.png'
import footer_img from '../../assets/download4.jpeg'

const Footer = () => {
  return (
    <div className='footer mt-5 '>
        <div className="main mt-5 ">
            
            <div className="footerImg">
                <img src={footer_img} alt="" />
                <div className="title imagetxt">Its time to start investing in yourself</div>
            </div>
            
            <div className="allItems d-flex">
                <div className="about">
                    <h3>ABOUT</h3>
                    <p>Ezitech Institute provides a platform for newcomers to launch brtheir IT 
                     and freelancing careers. 
                        Our emphasis on practical information  technology courses that are career 
                        and work oriented makes us  the top computer institute in
                         Rawalpindi, Islamabad, Pakistan.</p>
                </div>
                <div className="popularCourse about">
                    <h3>POPULAR COURSES</h3>
                    <div className="course d-flex">
                        <img src={service_img} alt="" />
                        <div className="description ">
                            <h5>Online Mastermind 
                             Course ...</h5>
                            <p>by Husnain Ali</p>
                        </div>
                    </div>
                    <div className="course d-flex">
                    <img src={designing_img} alt="" />
                        <div className="description">
                            <h5>Online Mastermind 
                             Course ...</h5>
                            <p>by Husnain Ali</p>
                        </div>
                    </div>
                </div>
                <div className="pages about">
                    <h3 className='mb-3 ms-4'>PAGES</h3>
                    <ul className='ms-5'>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Internships</li>
                    </ul>
                </div>
                <div className="contactInformation about">
                    <h3>CONTACT</h3>
                    <div className="address d-flex">
                        <img src="" alt="" />
                        <p>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
                    </div>
                    <div className="contact d-flex">
                        <img src="" alt="" />
                        <p>+923455555396</p>
                    </div>
                    <div className="email d-flex">
                        <img src="" alt="" />
                        <p>Info@ezitech.org</p>
                    </div>
                </div>
                
            </div>
            <div className="copyrightText">
                <p>Copyright © 2024 Ezitech Institute | Design & Develop by 
                    <a href="">Eziline Software House</a>
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
