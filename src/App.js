import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Error from './Error'
import Service from "./Service"
import Footer from './Footer'
import Navbar from './Navbar'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route path="service/:id" element={<Service/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
     
    </Router>
  )
}

export default App
