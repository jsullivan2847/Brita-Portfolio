import React from 'react'
import './Picture.css'

export default function Picture({url, cap}) {
  return (
    <>
            <img className="pic" src={url} alt=""/>
            <p className='cap'>{cap}</p>
    </>
  )
}
