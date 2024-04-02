import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Award from './component/Award/Award'
import Work from './component/Work/Work'
import Technology from './component/Technologies/Technology'
import Course from './component/Courses/Course'
import InternShips from './component/Internships/InternShips'
import Footer from './component/Footer/Footer'



function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Award/>
      <Work/>
      <Technology/>
      <Course/>
      <InternShips/>
      <Footer/>
      
    </>
  )
}

export default App
