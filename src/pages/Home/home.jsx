import React from 'react'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
import './home.css'

export default function Home() {
    const color = '#2c2c2c'
    const textColor ='#DABC00'
    const image = "/images/Egg.jpg"
    const headerImg = {
    backgroundImage: 'url(' + image + ')',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }
  return (
    <div style={headerImg} className='page'>
        <Hamburger color={color}/>
        <Header color={color} textColor={textColor} text="Brita Van Tol"/>
    </div>
  )
}
