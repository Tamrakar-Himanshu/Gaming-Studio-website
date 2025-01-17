import { ArrowRight } from 'lucide-react'
import React, { useRef } from 'react'
import { Button } from '../../Components/ui/Button'
import { motion, useInView } from 'framer-motion'

export const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false,margin:"-200px" });
  
  return (
    <section className=' relative bg-white rounded-t-[70px] border-black bo rder shadow-top z-[20]'> 
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
      className=' containers'>
      <div className=' pt-40 flex flex-grow flex-shrink w-full items-center  '>
        <div className=' flex flex-col justify-start items-start w-[41.66%] pr-20 '>
        <div className=' flex items-center justify-center'>
          <h1 className="text-black  font-header-anton  leading-none relative z-10 ">
            <span className="block text-[140px] font-ext rabold uppercase "  
            >
              OUR
            </span>  
            <span className="block text-[140px] -mt-3 " style={{ 
              WebkitTextStroke: '2px black',
              color: 'transparent',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }}> 
              VISION
            </span>
          </h1>
          </div>
            <div className=' font-secondary-unbounded mt-10 space-y-8 '>
              <p className=' text-[14px] font-thin text-subtle2 leading-6'>With constant effort and creativity, Gamico aspires to become the leading game studio in every category that participates in, create quality global products with hundreds of millions of downloads
</p>
              <p className=' text-[18px]  font-mid leading-8 '>Our business philosophy is “Success will come to us naturally if we help others succeed”.</p>

 <Button href={"#"} text={"Let's talk"} />

            </div> 
        </div>

        <div className=' relative flex justify-center w-[60%] items-center '>
          <div>
              <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_img-9.png" alt="" />
          </div>
          <div className='  overflow-x-clip absolute inset-0 top-0 left-0 right-0'>
              <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_deco.png" alt="" className='rotating'
              />
            </div>
        </div>
        <div className=' absolute right-0 z-[-1] '>
            <div className=' relative '>
              <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_img-10.jpg" className='' width={580} alt="" />
            </div>
        </div>
        <div>

        </div>
      </div>
      </motion.div>
    </section>
  )
}