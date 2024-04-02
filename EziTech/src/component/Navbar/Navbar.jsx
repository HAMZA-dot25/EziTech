// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './Navbar.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo_icon from '../../assets/EZITECH-LOGO-white.png'

const Navbar = () => {
  const [menu, setmenu]= useState("home");
  return (
    <div className="Navbar">
      <div className="header  ">
        <div className="header-top">
          <div className="BarContainer d-flex">

            <div className=" barInfo d-flex align-content-center">
              <div className="phoneNumber px-4 text-light">+92 3455555396</div>
              <div className="address ps-4 text-light">Office #304-B Amna Plaza, Rawalpindi, Pakistan</div>
              <div className="timing ps-5 text-light">Mon - Fri 8.00 - 20.00</div>
            </div>

            
            <div className="social-icon">
                <div className="social-icon-container">
                  <ul className="d-flex ">
                    <a href=""><i className="text-light text-decoration-none px-1" aria-hidden="true"><FacebookRoundedIcon/></i></a>
                    <a href=""><i className="text-light text-decoration-none px-1" aria-hidden="true"><InstagramIcon/></i></a>
                    <a href=""><i className="text-light text-decoration-none px-1" aria-hidden="true"><LinkedInIcon/></i></a>
                    <a href=""><i className="text-light text-decoration-none px-1" aria-hidden="true"><YouTubeIcon/></i></a>
                    <a href=""><i className="text-light text-decoration-none px-1" aria-hidden="true"><WhatsAppIcon/></i></a>
                  </ul>
                </div>
            </div>

            <div className="loginContainer d-flex ">
                <div className="login loginRegister">
                    <a href="">Login</a>
                </div>
                    <span>|</span>
                <div className="register loginRegister">
                    <a href="">Register</a>
                </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="bottomContainer">
            <div className="row">
              <div className="d-flex">
                <div className="nav-logo ">
                  <a  href="" className="d-flex">
                    <img src={logo_icon} alt="EziTech" />
                    
                  </a>
                </div>
                <div className="nav-menu">
                    <ul className="nav-menu-item d-flex">
                      {console.log(menu)} 
                        <li onClick={()=>{setmenu("home")}}><a style={{textDecoration:'none'}}href='/'>Home</a>{menu==="home"?<hr/>:<></>}</li>
                        <li onClick={()=>{setmenu("about")}}><a style={{textDecoration:'none'}}href='/about'>AboutUs</a>{menu==="about"?<hr/>:<></>}</li>
                        <li onClick={()=>{setmenu("certification")}}><a style={{textDecoration:'none'}}href='/certification'>Certification</a>{menu==="certification"?<hr/>:<></>}</li>
                        <li onClick={()=>{setmenu("intern")}}><a style={{textDecoration:'none'}}href='/internsips'>Internships</a>{menu==="intern"?<hr/>:<></>}</li>
                        <li onClick={()=>{setmenu("seminar")}}><a style={{textDecoration:'none'}}href='/seminars'>Seminars</a>{menu==="seminar"?<hr/>:<></>}</li>
                        <li onClick={()=>{setmenu("portal")}}><a style={{textDecoration:'none'}}href='/portal'>Intern Portal</a>{menu==="portal"?<hr/>:<></>}</li>
                    
                    </ul>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
