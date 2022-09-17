import React from 'react'
import './Header.css'

export default function Header({text, color}) {
  return (
    <div className='header'>
        <div style={{backgroundColor: color}} className='text'>
            <h1>{text}</h1>
        </div>
    </div>
  )
}
