import React from 'react'
import { Sectoin1 } from '../Sections/HomePageSections/Sectoin1'
import { NavBar } from '../Components/common/Navbar'
import { Section2 } from '../Sections/HomePageSections/Section2'

export const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Sectoin1/>
      <Section2/>
    </div>
  )
}
