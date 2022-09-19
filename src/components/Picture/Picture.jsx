import React from 'react'
import './Picture.css'

export default function Picture({url}) {
  return (
    <>
            <img className="pic" src={url} alt=""/>
            <p className='cap'>caption</p>
    </>
  )
}
