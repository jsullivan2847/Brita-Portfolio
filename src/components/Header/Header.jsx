import React from 'react'
import './Header.css'

export default function Header({text}) {
  return (
    <div className='header'>
        <div className='text'>
            {text}
        </div>
    </div>
  )
}
