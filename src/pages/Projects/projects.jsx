import React from 'react'
import Hamburger from '../../components/Hamburger/Hamburger'
import Header from '../../components/Header/Header'
import Content from '../../components/Content/Content'
import Picture from '../../components/Picture/Picture'
import './projects.css'



export default function Projects() {
    const textColor = "#F7F7EC"
    const color = "#C7696A"
    const image = "/images/Headers/Projectss.jpeg"
  return (
    <div className='page'>
      <Hamburger color={color}/>
      <Header image={image}color={color} textColor={textColor} text="Projects"/>
      <Content>
        <Picture url="/images/Projects/BlackShirt.png"/>
        <Picture url="/images/Projects/BlackSkirt.png"/>
        <Picture url="/images/Projects/DarkJeans.jpg"/>
        <Picture url="/images/Projects/DarkJeans2.jpg"/>
        <Picture url="/images/Projects/Jeans.jpg"/>
        <Picture url="/images/Projects/Jeans2.jpg"/>
        <Picture url="/images/Projects/PatchworkPants.jpg"/>
        <Picture url="/images/Projects/PatchworkPants2.jpg"/>
        <Picture url="/images/Projects/GreenShirt.png"/>
        <Picture url="/images/Projects/Quilt1.png"/>
        <Picture url="/images/Projects/Quilt2.png"/>
        <Picture url="/images/Projects/QuiltGrande.png"/>
        <Picture url="/images/Projects/RedBag.png"/>
        <Picture url="/images/Projects/YellowBag.png"/>
        <Picture url="/images/Projects/YellowBag2.png"/>
        <Picture url="/images/Projects/Sheep.png"/>
        <Picture url="/images/Projects/Sheep2.jpg"/>
        <Picture url="/images/Projects/SheepTank.jpg"/>
        <Picture url="/images/Projects/SheepBag.jpg"/>
        <Picture url="/images/Projects/SheepCoat.jpg"/>
        <Picture url="/images/Projects/SheepCoat2.jpg"/>
        <Picture url="/images/Projects/Sweater.jpg"/>
        <Picture url="/images/Projects/UnderwearVariety.jpg"/>
        <Picture url="/images/Projects/Underwear.jpg"/>
        <Picture url="/images/Projects/Underwear2.jpg"/>
        <Picture url="/images/Projects/Underwear3.jpg"/>
        <Picture url="/images/Projects/WhiteCoat.png"/>
        <Picture url="/images/Projects/WhiteCoat2.png"/>
        <Picture url="/images/Projects/WhiteShirt.png"/>
        <Picture url="/images/Projects/WhiteTank.jpg"/>
      </Content>
    </div>
  )
}
