import React from 'react'
import { Sectoin1 } from '../Sections/HomePageSections/Sectoin1'
import { NavBar } from '../Components/common/Navbar'
import { Section2 } from '../Sections/HomePageSections/Section2'
import { Section3 } from '../Sections/HomePageSections/Section3'
import { Section4 } from '../Sections/HomePageSections/Section4'

export const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Sectoin1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}
