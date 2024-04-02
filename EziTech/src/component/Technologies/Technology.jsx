// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Technology.css'
import data_tech from '../../assets/technology'

const Technology = () => {
  return (
    <div className='technolpogy'>
        <h1 >What new trends and technology will <br />you discover?</h1>
        <p >Todays technology is developing quickly, and our new technological 
        trends are enabling and <br /> advancing, speeding up the pace of development.</p>

        <div className="technologyIcons">
            {data_tech.map((item)=>{
                // eslint-disable-next-line react/jsx-key
                return <div>
                            <div className="gridItem">
                                <img src={item.image} alt="" />
                                <h5>{item.name}</h5>
                            </div>
                        </div>
            })}
            
        </div>
      
    </div>
  )
}

export default Technology
