// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import ezi_code from '../../assets/white-lgooo-01.png'
import ezi_pos from '../../assets/white-ezipos.png'
import ezi_blog from '../../assets/EZIBLOGS-DG.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="herocontent">
        <h1 className="heading">Learn the fundamentals with our expert in Programing</h1>
        <h4 className="description">Utilize Effective Training to Reach Your Potential</h4>
        <input type="text" placeholder='Search Courses' />
        <p>Explore our more useful projects</p>
        <div className="logoes d-flex">
            <img src={ezi_code} className='codeImg' alt="" />
            <img src={ezi_pos} className='posImg' alt="" />
            <img src={ezi_blog} className='blogImg' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
