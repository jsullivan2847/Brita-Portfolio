import React from 'react'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'

export default function Professional() {
    const textColor = "#FFFFFF"
    const color = "#B0B0A1"
    const image = "/images/Headers/ProfExp.png"
  return (
    <div className='page'>
      <Hamburger color={color}/>
      <Header image={image}color={color} textColor={textColor} text="Projects"/>
    </div>
  )
}
