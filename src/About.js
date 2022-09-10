import React, { useState } from 'react'
import { items } from './Data'
import { Link } from 'react-router-dom'

import Service from './Service'
const About = ({id}) => {
    const[palmOil,setPalmOil]=useState(items)
    
  return (
    <div>
      
      
        <h1>This is about our product in the marketing industry</h1>
        {palmOil.map((products)=>{
        return<Service key={products.id} {...products}></Service>
      
        })}
       <Link to={`/service/${id}`}>
      <button className='btn'>more detail</button>
      </Link> 
    </div>
  )
}

export default About