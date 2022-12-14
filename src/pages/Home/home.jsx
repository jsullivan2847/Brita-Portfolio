import React from 'react'
import Content from '../../components/Content/Content'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
import './home.css'

export default function Home() {
    const color = '#DABC00'
    const textColor ='#FFFFFF'
    const image = "/images/Headers/Egg.jpg"
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
        <p className='about'>
        Seamstress and designer with experience in fine alterations
        </p>
    </div>
  )
}
