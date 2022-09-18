import React from 'react'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
import './projects.css'



export default function Projects() {
    const textColor = "#F7F7EC"
    const color = "#C7696A"
    const image = "/images/Projectss.jpeg"
  return (
    <div>
         <div className='Projects'>
      <Hamburger color={color}/>
      <Header image={image}color={color} textColor={textColor} text="Projects"/>
    </div>
    </div>
  )
}
