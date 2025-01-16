import React from 'react'
import { StickyScrollRevealDemo } from '../../Components/StickyScrollDemo'
import { Crown, Image, Swords, Wand } from 'lucide-react'
import { NextTabButton } from '../../Components/ui/NextTabButton'
import { Button } from '../../Components/ui/Button'

export const Section4 = () => {

  const capabilities =  [
    {
      svg:<Swords size={70} className=' text-white' />,
      name:"game development",
      desc:"From concept to launch, we develop high-quality games across genres using cutting-edge tools like Unreal Engine and Unity. Our focus is on creating immersive, interactive experiences that players love.",
      href:"#",
    },
    {
      svg:<Wand size={70} className=' text-white' />,
      name:"Virtual Reality (VR)",
      desc:"Step into the future with our cutting-edge VR games and simulations. Experience gaming like never before with realistic motion and lifelike graphics.",
      href:"#",
    },
    {
      svg:<Image size={70} className=' text-white' />,
      name:"Custom Game Solutions",
      desc:"Have a game idea? We bring your vision to life with tailored solutions that suit your needs.",
      href:"#",
    },
    {
      svg:<Crown size={70} className=' text-white' />,
      name:"Interactive Experiences",
      desc:"Beyond gaming, we craft interactive applications for education, entertainment, and beyond, blending creativity with technology.",
      href:"#",
    },
  ]

  return (
    <section className='relative bg-bg2 rounded-t-[70px] z-[20]'>
      <div className=' containers '>
        <div className='pt-16 flex items-start'>
          <div className=' flex flex-col space-y-10 w-[40%]'>
            {capabilities.map((capability)=> <CapabilitiesCard {...capability} /> )} 
 
          </div>
          <div className=' sticky top-52 mt-32 flex flex-col justify-end items-end w-[60.66%] '>
            <div className=' flex items-center justify-center'>
              <h1 className="text-black  font-header-anton  leading-none relative z-10 ">
                <span className="block text-[140px] text-end font-ext rabold uppercase "
                >
                  OUR
                </span>
                <span className="block text-[140px] uppercase -mt-2 " style={{
                  WebkitTextStroke: '2px black',
                  color: 'transparent',
                  // filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                }}>
                  capabilities
                </span>
              </h1>
            </div>
            <div className=' font-secondary-unbounded mt-14 space-y-8 flex justify-end'>
              <div className=' '>
              <p className=' text-[18px] items-end text-end flex font-mid leading-8 pl-10 max-w-2xl '>Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
              </div>
            </div>
              <div className=' w-full flex justify-end mt-7 '>
                <Button href={"#"} text={"what we offer"} className={" bg-white "} />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CapabilitiesCard = ({svg, href, name, desc}) => {
  return <div className=' flex flex-col items-cen ter'>
    <div className=' flex gap-7 items-start'>
      <div className=' bg-primary rounded-2xl p-4'>
        {svg}
      </div>
      <div className=' flex items-center border-t-[5px] w-full border-primary mt-10'>
        <div>
          <h2 className=' font-header-anton text-[40px] uppercase mt-10  leading-tight'>{name}</h2>
          <p className=' font-secondary-unbounded text-[14px] text-subtle2 leading-6 mt-3'>{desc}</p>
          <div className=' mt-10'>
            <NextTabButton name={"learn more"} href={href} className={" uppercase"} />
          </div>
        </div>
      </div>
    </div>
  </div>
}