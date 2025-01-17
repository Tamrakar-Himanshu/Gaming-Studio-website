import React, { useRef } from 'react'
import { Button } from '../../Components/ui/Button'
import { motion, useInView } from 'framer-motion'

export const Section6 = () => {
  
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false,margin:"-50px" });

  return (
    <section className='relative bg-bg3 rounded-t-[70px] z-[30] -mt-10 shadow-top pb-80 pt-32'> 
    <motion.div
    className=' containers'>
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
      className=' flex items-end gap-40'>
      <div className=' flex justify-start items-start'>
              <h1 className="text-white  font-header-anton  leading-none relative z-10 ">
                <span className="block text-[140px] text- font-ext rabold uppercase "
                >
                  Join
                </span>
                <span className="block text-[140px] uppercase -mt-2 " style={{
                  WebkitTextStroke: '2px white',
                  color: 'transparent',
                  // filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                }}>
                  our
                   <span className=' ml-10 '>Careers</span> 
                </span>
              </h1> 
      </div>
      <div className='  flex flex-col '>
<div className=' font-secondary-unbounded mt-14 space-y-8 flex justify-end'>
              <div className=' '>
              <p className=' text-[18px] text-white font-mid leading-8 max-w-2xl '>Whether you're a gamer looking for your next obsession or a business looking to create interactive
experiences, we’d love to hear from you.
</p>
              </div>
            </div>
              <div className=' w-full  mt-7 '>
                <Button href={"#"} text={"Join us"} className={"  "} />
              </div>
      </div>
      </motion.div>
    </motion.div>
    </section>
  )
}
