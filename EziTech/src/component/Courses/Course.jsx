// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Course.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import flutter_Img from '../../assets/Flutter-Development.jpg'
import development_img from '../../assets/app-development-511x511.png'
import designing_img from '../../assets/web-design-511x511.png'
import service_img from '../../assets/web-services-511x511.png'
import StarOutline from '@mui/icons-material/StarOutline';

import { Pagination } from '@mui/material'

const Course = () => {
  return (
    <>
    <div className='courses'>
      <h1>Recommended Courses</h1>
      <div className="flexItems d-flex justify-content-center ">
        <div className="items">
            <div className="courseImage">
                <img src={development_img} alt="" />
                <div className="courseDescription">
                    <span className='mx-5'>development</span>
                    <h6 className='mt-2'>Development Complete Course <br />
                    With Projects</h6>
                    <div className='durationView d-flex w-100 p-2   '>
                        <div className='courseDuration d-flex'>
                            <span><AccessTimeIcon/></span>
                            <span className='px-1'>6 Month</span>    
                        </div>
                        <div className="courseView d-flex ms-5 ">
                            <span><VisibilityIcon/></span>
                            <span className='px-1'>701</span>
                        </div>
                    </div>
                </div>
                <span className='borderLine'></span>
                <div className="details d-flex">
                    <div className="courseRating d-flex text-align-center">
                        <div className="stars">
                            <StarOutline/><StarOutline/><StarOutline/><StarOutline/><StarOutline/>
                        </div>
                        <div className="numbers pt-1 ms-1 ">0.5</div>
                    </div>
                    <div className="coursePrice ms-2 pt-1 fw-bolder ">
                        <span>PKR 37,000 </span>
                    </div>
                </div>
            </div>
        </div>

        <div className="items">
            <div className="courseImage">
                <img src={service_img} alt="" />
                <div className="courseDescription">
                    <span className='mx-5'>desingnig</span>
                    <h6 className='mt-2'>Adobe Illustrator Complete Course <br />
                    With Projects</h6>
                    <div className='durationView d-flex w-100 p-2   '>
                        <div className='courseDuration d-flex'>
                            <span><AccessTimeIcon/></span>
                            <span className='px-1'>6 Month</span>    
                        </div>
                        <div className="courseView d-flex ms-5 ">
                            <span><VisibilityIcon/></span>
                            <span className='px-1'>701</span>
                        </div>
                    </div>
                </div>
                <span className='borderLine'></span>
                <div className="details d-flex">
                    <div className="courseRating d-flex text-align-center">
                        <div className="stars">
                            <StarOutline/><StarOutline/><StarOutline/><StarOutline/><StarOutline/>
                        </div>
                        <div className="numbers pt-1 ms-1 ">0.5</div>
                    </div>
                    <div className="coursePrice ms-2 pt-1 fw-bolder ">
                        <span>PKR 37,000 </span>
                    </div>
                </div>
            </div>
        </div>

        <div className="items">
            <div className="courseImage">
                <img src={flutter_Img} alt="" />
                <div className="courseDescription">
                    <span className='mx-5'>IOS & ANd</span>
                    <h6 className='mt-2'>Flutter Complete Course <br />
                    With Projects</h6>
                    <div className='durationView d-flex w-100 p-2   '>
                        <div className='courseDuration d-flex'>
                            <span><AccessTimeIcon/></span>
                            <span className='px-1'>6 Month</span>    
                        </div>
                        <div className="courseView d-flex ms-5 ">
                            <span><VisibilityIcon/></span>
                            <span className='px-1'>701</span>
                        </div>
                    </div>
                </div>
                <span className='borderLine'></span>
                <div className="details d-flex">
                    <div className="courseRating d-flex text-align-center">
                        <div className="stars">
                            <StarOutline/><StarOutline/><StarOutline/><StarOutline/><StarOutline/>
                        </div>
                        <div className="numbers pt-1 ms-1 ">0.5</div>
                    </div>
                    <div className="coursePrice ms-2 pt-1 fw-bolder ">
                        <span>PKR 37,000 </span>
                    </div>
                </div>
            </div>
        </div>

        <div className="items">
            <div className="courseImage">
                <img src={designing_img} alt="" />
                <div className="courseDescription">
                    <span className='mx-5'>designing</span>
                    <h6 className='mt-2'>Front End Complete Course <br />
                    With Projects</h6>
                    <div className='durationView d-flex w-100 p-2   '>
                        <div className='courseDuration d-flex'>
                            <span><AccessTimeIcon/></span>
                            <span className='px-1'>6 Month</span>    
                        </div>
                        <div className="courseView d-flex ms-5 ">
                            <span><VisibilityIcon/></span>
                            <span className='px-1'>701</span>
                        </div>
                    </div>
                </div>
                <span className='borderLine'></span>
                <div className="details d-flex">
                    <div className="courseRating d-flex text-align-center">
                        <div className="stars">
                            <StarOutline/><StarOutline/><StarOutline/><StarOutline/><StarOutline/>
                        </div>
                        <div className="numbers pt-1 ms-1 ">0.5</div>
                    </div>
                    <div className="coursePrice ms-2 pt-1 fw-bolder ">
                        <span>PKR 37,000 </span>
                    </div>
                </div>
            </div>
        </div>
    
      </div>


      
    </div>

    
    <div className="pagination">
        <Pagination count={10} shape='rounded' variant="outlined" color="primary" />
    </div>
    

    </>
  )
}

export default Course
