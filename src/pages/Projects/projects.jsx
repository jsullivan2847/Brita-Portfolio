import React from 'react'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
import './projects.css'



export default function Projects() {
    const textColor = "#F7F7EC"
    const color = "#A2465C"
    const image = "/images/Projects.jpg"
  return (
    <div>
         <div className='Projects'>
      <Hamburger color={textColor}/>
      <Header image={image}color={color} textColor={textColor} text="Projects"/>
    </div>
    </div>
  )
}
