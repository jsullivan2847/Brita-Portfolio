import React from 'react'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
import './home.css'

export default function Home() {
    const color = '#8E7966'
  return (
    <div className='page'>
        <Hamburger color={color}/>
        <Header color={color} text="Brita Van Tol"/>
    </div>
  )
}
