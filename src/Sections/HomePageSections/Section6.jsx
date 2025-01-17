import React, { useRef } from 'react'
import { Button } from '../../Components/ui/Button'
import { motion, useInView } from 'framer-motion'

export const Section6 = () => {
  
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false,margin:"-50px" });

  return (
    <section className='relative bg-bg3 rounded-t-[20px] md:rounded-t-[40px] lg:rounded-t-[70px] z-[30] -mt-10 shadow-top pb-40 lg:pb-60 lg1:pb-80 pt-14 lg1:pt-32'> 
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
      className="flex flex-col items-center justify-center md:flex-row md:justify-between"
>
      <div className='flex justify-start items-start'>
              <h1 className="text-white text-[56px] md:text-[80px] lg:text-[100px] lg1:text-[140px] font-header-anton leading-none relative z-10 ">
                <span className="block text-center md:text-left font-ext rabold uppercase "
                >
                  Join
                </span>
                <span className="block  uppercase lg1:-mt-2 " style={{
                  WebkitTextStroke: '2px white',
                  color: 'transparent',
                  // filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                }}>
                  our
                   <span className=' ml-7 lg:ml-9 lg1:ml-10 '>Careers</span> 
                </span>
              </h1> 
      </div>
      <div className='  flex flex-col max-w-sm'>
<div className=' font-secondary-unbounded mt-5 md:mt-1 space-y-8 flex justify-end'>
              <div className=' '>
              <p className=' text-[16px] md:text-[18px] text-center md:text-left text-white leading-8 max-w-2xl '>Whether you're a gamer looking for your next obsession or a business looking to create interactive
experiences, we’d love to hear from you.
</p>
              </div>
            </div>
              <div className=' flex justify-center md:justify-start w-full  mt-7 '>
                <Button href={"#"} text={"Join us"} className={"  "} />
              </div>
      </div>
      </motion.div>
    </motion.div>
    </section>
  )
}
