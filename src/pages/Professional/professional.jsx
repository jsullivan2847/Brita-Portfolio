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
        <Picture url="/images/Professional/BlueLace.png" cap="Alterations performed at Monique Lhuillier"/>
        <Picture url="/images/Professional/FloralDress.png" cap="Alterations performed at Monique Lhuillier"/>
        <Picture url="/images/Professional/FloralDress2.png" cap="Alterations performed at Monique Lhuillier"/>
        <Picture url="/images/Professional/FloralDress3.png" cap="Alterations performed at Monique Lhuillier"/>
        <Picture url="/images/Professional/RedLeather.png" cap="Made for Helena Eisenhart"/>
        <Picture url="/images/Professional/BlackLeather2.png" cap="Made for Helena Eisenhart"/>
        <Picture url="/images/Professional/Stiches.png" cap="Made for Helena Eisenhart"/>
        <Picture url="/images/Professional/Stiches2.png" cap="Made for Helena Eisenhart"/>
        <Picture url="/images/Professional/Strings.png" cap="Made for Helena Eisenhart"/>
        <Picture url="/images/Professional/Strings2.png" cap="Made for Helena Eisenhart"/>
        <Picture url="/images/Professional/WhiteDress.png" cap="Alterations performed at Monique Lhuillier"/>
        <Picture url="/images/Professional/WhiteLace.png" cap="Alterations performed at Monique Lhuillier"/>
      </Content>
    </div>
  )
}
