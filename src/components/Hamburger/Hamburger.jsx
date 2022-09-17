import React from 'react'
import './Hamburger.css'

export default function Hamburger({color}) {
  return (
    <div className='Container'>
<svg className='hamburger' width="39" height="36" viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="39" height="6" fill={color}/>
<rect y="9" width="39" height="6" fill={color}/>
<rect y="18" width="39" height="6" fill={color}/>
</svg>

    </div>
  )
}
