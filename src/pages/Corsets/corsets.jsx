import React from 'react'
import Content from '../../components/Content/Content'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
import Picture from '../../components/Picture/Picture'
import './corsets.css'

export default function Corsets() {
  const color = "#6A2F25"
  const textColor = "#A7A698"
  const image = "/images/Headers/CorsetHeader.jpg"
  return (
    <div className='page'>
      <Hamburger color={color}/>
      <Header image={image}color={color} textColor={textColor} text="Corsets"/>
      <Content>
        <Picture url="/images/Corsets/Silver1.jpg"/>
        <Picture url="/images/Corsets/Silver2.jpg"/>
        <Picture url="/images/Corsets/Red1.jpg"/>
        <Picture url="/images/Corsets/Red2.jpg"/>
        <Picture url="/images/Corsets/Green1.png"/>
        <Picture url="/images/Corsets/Green2.png"/>
        <Picture url="/images/Corsets/new1.png"/>
        <Picture url="/images/Corsets/new2.png"/>
        <Picture url="/images/Corsets/new3.png"/>
        <Picture url="/images/Corsets/new4.png"/>
        <Picture url="/images/Corsets/Camo.png"/>
        <Picture url="/images/Corsets/White1.png"/>
        <Picture url="/images/Corsets/White2.png"/>
      </Content>
    </div>
  )
}
