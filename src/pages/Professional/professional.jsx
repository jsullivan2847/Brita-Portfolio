import React from 'react'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'

export default function Professional() {
    const textColor = "#FFFFFF"
    const color = "#B0B0A1"
    const image = "/images/Professional.png"
  return (
    <div>
    <div className='Projects'>
 <Hamburger color={color}/>
 <Header image={image}color={color} textColor={textColor} text="Projects"/>
</div>
</div>
  )
}