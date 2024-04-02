// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Internships.css'
import header_img from '../../assets/images6.jpeg'
import development_img from '../../assets/devlopment123.png'
import designing_img from '../../assets/designing.png'
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import markiting_img from '../../assets/social-media-1-63x63.png'
import flutter_img from "../../assets/Flutter-Development.jpg"
import machine_img from '../../assets/artificial-intelligence.png'
import mern_img from '../../assets/archtecture.png'

const InternShips = () => {
  return (
    <div className='internships'>
        <h1 className='my-5'>Perfect Intenships For You</h1>
        <div className="cardItems">
            <div className='intercards'>
                <div className="cardHeader">
                    <div className="cardName">
                        <img className='headerImage' src={header_img} alt="" />
                        <div className="imageText d-flex">
                            <h1>HTML,CSS <br />JavaScript</h1>
                            
                            <img className='develmentImg' src={development_img} alt="" />
                            <hr/>
                        </div>
                        
                        <p className='imageTextP'>Ezitech Insitute</p>
                        
                    </div>
                    

                </div>
                <div className="cardDescription mt-1">
                    <div className="employment d-flex align-items-center mt-1">
                        <div className='iconBorder'><PersonIcon/></div>
                        <p className='pt-3 ms-2 '>Employment -</p>
                        <span className='p-1'>Hybrid</span>
                    </div>
                    <div className="location d-flex align-items-center mt-1">
                        <div className=' iconBorder'><LocationOnIcon/></div>
                        <p className='pt-3 ms-2 '>Location -</p>
                        <span className='p-1'> Rawalpindi</span>
                    </div>
                    <div className="jobType d-flex align-items-center mt-1">
                        <div className='iconBorder'><BusinessCenterIcon/></div>
                        <p className='pt-3 ms-2 '>Job Type -</p>
                        <span className='p-1'>Full Time</span>
                        <span className='p-1 ms-2'>Part Time</span>
                    </div>

                </div>
                <button className='readBtn' >Read More</button>
            </div>



            <div className='intercards'>
                <div className="cardHeader">
                    <div className="cardName">
                        <img className='headerImage' src={header_img} alt="" />
                        <div className="imageText d-flex">
                            <h1>Graphic <br />Designing</h1>
                            
                            <img className='develmentImg' src={designing_img} alt="" />
                            <hr/>
                        </div>
                        <p className='imageTextP'>Ezitech Insitute</p>
                        
                    </div>
                    

                </div>
                <div className="cardDescription mt-1">
                    <div className="employment d-flex align-items-center mt-1">
                        <div className='iconBorder'><PersonIcon/></div>
                        <p className='pt-3 ms-2 '>Employment -</p>
                        <span className='p-1'>Hybrid</span>
                    </div>
                    <div className="location d-flex align-items-center mt-1">
                        <div className=' iconBorder'><LocationOnIcon/></div>
                        <p className='pt-3 ms-2 '>Location -</p>
                        <span className='p-1'> Rawalpindi</span>
                    </div>
                    <div className="jobType d-flex align-items-center mt-1">
                        <div className='iconBorder'><BusinessCenterIcon/></div>
                        <p className='pt-3 ms-2 '>Job Type -</p>
                        <span className='p-1'>Full Time</span>
                        <span className='p-1 ms-2'>Part Time</span>
                    </div>

                </div>
                <button className='readBtn' >Read More</button>
            </div>




            <div className='intercards'>
                <div className="cardHeader">
                    <div className="cardName">
                        <img className='headerImage' src={header_img} alt="" />
                        <div className="imageText d-flex">
                            <h1>Digital <br />markiting</h1>
                            
                            <img className='develmentImg' src={markiting_img} alt="" />
                            <hr/>
                        </div>
                        <p className='imageTextP'>Ezitech Insitute</p>
                        
                    </div>
                    

                </div>
                <div className="cardDescription mt-1">
                    <div className="employment d-flex align-items-center mt-1">
                        <div className='iconBorder'><PersonIcon/></div>
                        <p className='pt-3 ms-2 '>Employment -</p>
                        <span className='p-1'>Hybrid</span>
                    </div>
                    <div className="location d-flex align-items-center mt-1">
                        <div className=' iconBorder'><LocationOnIcon/></div>
                        <p className='pt-3 ms-2 '>Location -</p>
                        <span className='p-1'> Rawalpindi</span>
                    </div>
                    <div className="jobType d-flex align-items-center mt-1">
                        <div className='iconBorder'><BusinessCenterIcon/></div>
                        <p className='pt-3 ms-2 '>Job Type -</p>
                        <span className='p-1'>Full Time</span>
                        <span className='p-1 ms-2'>Part Time</span>
                    </div>

                </div>
                <button className='readBtn' >Read More</button>
            </div>




            <div className='intercards'>
                <div className="cardHeader">
                    <div className="cardName">
                        <img className='headerImage' src={header_img} alt="" />
                        <div className="imageText d-flex">
                            <h4>Flutter <br />Development</h4>
                            
                            <img className='develmentImg' src={flutter_img} alt="" />
                            <hr/>
                        </div>
                        <p className='imageTextP'>Ezitech Insitute</p>
                        
                    </div>
                    

                </div>
                <div className="cardDescription mt-1">
                    <div className="employment d-flex align-items-center mt-1">
                        <div className='iconBorder'><PersonIcon/></div>
                        <p className='pt-3 ms-2 '>Employment -</p>
                        <span className='p-1'>Hybrid</span>
                    </div>
                    <div className="location d-flex align-items-center mt-1">
                        <div className=' iconBorder'><LocationOnIcon/></div>
                        <p className='pt-3 ms-2 '>Location -</p>
                        <span className='p-1'> Rawalpindi</span>
                    </div>
                    <div className="jobType d-flex align-items-center mt-1">
                        <div className='iconBorder'><BusinessCenterIcon/></div>
                        <p className='pt-3 ms-2 '>Job Type -</p>
                        <span className='p-1'>Full Time</span>
                        <span className='p-1 ms-2'>Part Time</span>
                    </div>

                </div>
                <button className='readBtn' >Read More</button>
            </div>




            <div className='intercards'>
                <div className="cardHeader">
                    <div className="cardName">
                        <img className='headerImage' src={header_img} alt="" />
                        <div className="imageText d-flex">
                            <h1>Machine <br />Learning</h1>
                            
                            <img className='develmentImg' src={machine_img} alt="" />
                            <hr/>
                        </div>
                        <p className='imageTextP'>Ezitech Insitute</p>
                        
                    </div>
                    

                </div>
                <div className="cardDescription mt-1">
                    <div className="employment d-flex align-items-center mt-1">
                        <div className='iconBorder'><PersonIcon/></div>
                        <p className='pt-3 ms-2 '>Employment -</p>
                        <span className='p-1'>Hybrid</span>
                    </div>
                    <div className="location d-flex align-items-center mt-1">
                        <div className=' iconBorder'><LocationOnIcon/></div>
                        <p className='pt-3 ms-2 '>Location -</p>
                        <span className='p-1'> Rawalpindi</span>
                    </div>
                    <div className="jobType d-flex align-items-center mt-1">
                        <div className='iconBorder'><BusinessCenterIcon/></div>
                        <p className='pt-3 ms-2 '>Job Type -</p>
                        <span className='p-1'>Full Time</span>
                        <span className='p-1 ms-2'>Part Time</span>
                    </div>

                </div>
                <button className='readBtn' >Read More</button>
            </div>


            <div className='intercards'>
                <div className="cardHeader">
                    <div className="cardName">
                        <img className='headerImage' src={header_img} alt="" />
                        <div className="imageText d-flex">
                            <h3>MERN<br />Development</h3>
                            
                            <img className='develmentImg' src={mern_img} alt="" />
                            <hr/>
                        </div>
                        <p className='imageTextP'>Ezitech Insitute</p>
                        
                    </div>
                    

                </div>
                <div className="cardDescription mt-1">
                    <div className="employment d-flex align-items-center mt-1">
                        <div className='iconBorder'><PersonIcon/></div>
                        <p className='pt-3 ms-2 '>Employment -</p>
                        <span className='p-1'>Hybrid</span>
                    </div>
                    <div className="location d-flex align-items-center mt-1">
                        <div className=' iconBorder'><LocationOnIcon/></div>
                        <p className='pt-3 ms-2 '>Location -</p>
                        <span className='p-1'> Rawalpindi</span>
                    </div>
                    <div className="jobType d-flex align-items-center mt-1">
                        <div className='iconBorder'><BusinessCenterIcon/></div>
                        <p className='pt-3 ms-2 '>Job Type -</p>
                        <span className='p-1'>Full Time</span>
                        <span className='p-1 ms-2'>Part Time</span>
                    </div>

                </div>
                <button className='readBtn' >Read More</button>
            </div>
        </div>
      
    </div>
  )
}

export default InternShips
