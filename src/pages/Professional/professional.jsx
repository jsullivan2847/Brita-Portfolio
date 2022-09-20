import React from 'react'
import Content from '../../components/Content/Content'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
import Picture from '../../components/Picture/Picture'

export default function Professional() {
    const textColor = "#FFFFFF"
    const color = "#B0B0A1"
    const image = "/images/Headers/ProfExp.png"
  return (
    <div className='page'>
      <Hamburger color={color}/>
      <Header image={image}color={color} textColor={textColor} text="Projects"/>
      <Content>
        <Picture url="/images/Professional/BlackLeather.png"/>
        <Picture url="/images/Professional/BlueLace.png"/>
        <Picture url="/images/Professional/FloralDress.png"/>
        <Picture url="/images/Professional/FloralDress2.png"/>
        <Picture url="/images/Professional/FloralDress3.png"/>
        <Picture url="/images/Professional/RedLeather.png"/>
        <Picture url="/images/Professional/BlackLeather2.png"/>
        <Picture url="/images/Professional/Stiches.png"/>
        <Picture url="/images/Professional/Stiches2.png"/>
        <Picture url="/images/Professional/Strings.png"/>
        <Picture url="/images/Professional/Strings2.png"/>
        <Picture url="/images/Professional/WhiteDress.png"/>
        <Picture url="/images/Professional/WhiteLace.png"/>
      </Content>
    </div>
  )
}
