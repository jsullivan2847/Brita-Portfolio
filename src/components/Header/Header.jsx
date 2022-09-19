import React from 'react'
import './Header.css'

export default function Header({text, textColor, color, image}) {
  console.log(image)
  const headerImg = {
    backgroundImage: 'url(' + image + ')',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  return (
    <div style={headerImg}className='header'>
        <div style={{backgroundColor: color}} className='text'>
            <h1 style={{color:textColor}}>{text}</h1>
        </div>
    </div>
  )
}
