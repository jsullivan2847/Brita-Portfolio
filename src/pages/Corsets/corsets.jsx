import React from 'react'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
import './corsets.css'

export default function Corsets() {
  const color = "#6A2F25"
  const textColor = "#A7A698"
  const image = "/images/CorsetHeader.jpg"
  return (
    <div className='corset'>
      <Hamburger color={color}/>
      <Header image={image}color={color} textColor={textColor} text="Corsets"/>
    </div>
  )
}
