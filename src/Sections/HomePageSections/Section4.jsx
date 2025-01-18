import React, { useRef } from 'react'
import { StickyScrollRevealDemo } from '../../Components/StickyScrollDemo'
import { Crown, Image, Swords, Wand } from 'lucide-react'
import { NextTabButton } from '../../Components/ui/NextTabButton'
import { Button } from '../../Components/ui/Button'
import { motion, useInView } from 'framer-motion'

export const Section4 = () => {

  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

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
    <section
    id='services'
    className='relative bg-bg2 rounded-t-[20px] md:rounded-t-[40px] lg:rounded-t-[70px]  pb-20 z-[20]'>
      <motion.div
       ref={ref}
       initial={"hidden"}
       animate={isInView?"visible":"hidden"}
       variants={{
         hidden: { opacity: 0, y: 150 },
         visible: { 
           opacity: 1, 
           y: 0,
           transition: {
             duration: 0.6,
             ease: "easeOut",
             staggerChildren: 0.2, // Stagger animations for child elements
           },
         },
       }}
      className=' containers '>
        <div className=' pt-16 flex flex-col-reverse items-center md:items-start justify-center md:flex-row md:justify-between'>
          <div className=' flex flex-col justify-center items-center space-y-10  md:max-w-xl max-w-sm  md:w-[40%] md:mt-0 mt-14'>
            {capabilities.map((capability)=> <CapabilitiesCard {...capability} /> )}  
          </div>
          <div className=' md:sticky top-60 lg:top-60 lg1:top-36 mt-0 md:mt-32 flex flex-col justify-center md:justify-end md:items-end md:w-[60.66%] '>
            <div className=' flex items-center justify-center'>
              <h1 className="text-black text-[56px] md:text-[80px] lg:text-[100px] lg1:text-[140px] font-header-anton  leading-none relative z-10 ">
                <span className="block text-center md:text-end font-ext rabold uppercase "
                >
                  OUR
                </span>
                <span className="block uppercase lg:-mt-2 " style={{
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
              <p className=' text-[18px] text-center items-end md:text-end flex font-mid leading-8 sm:pl-10 max-w-2xl '>Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
              </div>
            </div>
              <div className=' w-full flex justify-center md:justify-end mt-7 '>
                <Button href={"#"} text={"what we offer"} className={" bg-white "} />
              </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const CapabilitiesCard = ({svg, href, name, desc}) => {
  return <div className='  flex justify-center flex-col items-center'>
    <div className=' inline md1:flex gap-7 items-start'>
      <div className=' flex justify-center md:justify-start'>
      <div className=' -ml-4 md1:ml-0 flex w-fit bg-primary rounded-2xl scale-75 lg1:scale-100 p-4'>
        {svg}
      </div>
      </div>
      <div className=' flex items-center border-t-[5px] w-full border-primary mt-4 md1:mt-10'>
        <div>
          <h2 className=' font-header-anton text-[32px] lg1:text-[40px] uppercase mt-5 md1:mt-10 text-center md:text-start leading-tight'>{name}</h2>
          <p className=' font-secondary-unbounded text-center md:text-start text-[14px] text-subtle2 leading-6 mt-3'>{desc}</p>
          <div className='flex justify-center md:justify-start mt-10'>
            <NextTabButton name={"learn more"} href={href} className={" uppercase"} />
          </div>
        </div>
      </div>
    </div>
  </div>
}
