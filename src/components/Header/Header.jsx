import React from 'react'
import './Header.css'

export default function Header({text, textColor, color, image}) {
  console.log(image)
  const headerImg = {
    backgroundImage: 'url(' + image + ')',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div style={headerImg}className='header'>
        <div style={{backgroundColor: color}} className='text'>
            <h1 style={{color:textColor}}>{text}</h1>
        </div>
    </div>
  )
}
