import { ArrowRight } from 'lucide-react'
import React, { useRef } from 'react'
import { NextTabButton } from '../../Components/ui/NextTabButton'
import { motion, useInView } from 'framer-motion'
import Marquee from "react-fast-marquee";


export const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  const marqueContent = ["game design","art design","multiplatform development","game development"]

  return (
    <section className=' relative bg-white h-s creen rounded-t-[70px] -mt-48 z-[20]'>
        <motion.div
          ref={ref}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
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
        className=' pt-32'>
          <Marquee delay={1}
          speed={123}
          direction='left'  
          pauseOnHover
          >
            {marqueContent.map((item)=>
          <div className=' flex justify-center items-center mx-5 gap-8 overflow-y-hidden'>
          <div>
              <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_deco.png" alt="" className='rotating'
              />
            </div>
            <div>
            <h1 className="text-black  font-header-anton  leading-none relative z-10 ">
                <span className="block text-[80px] uppercase hover:text-primary-hover cursor-pointer transition-all duration-300 "
                >
                  {item}
                </span> 
              </h1>
            </div>
          </div> 
            )}   
          </Marquee>
        </motion.div>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={isInView ? "visible" : "hidden"}
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=' containers'>
        <div

          className=' pt-32 flex flex-grow flex-shrink w-full  '>
          <div className=' flex flex-col justify-start items-start w-[41.66%] pr-20 '>
            <div>
              <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_deco.png" alt="" className='rotating'
              />
            </div>
            <div className=' font-secondary-unbounded mt-10 space-y-10 '>
              <p className=' text-[18px]  font-mid leading-8 '>We develop immersive games that integrate advanced technology with exceptional storytelling,
                delivering engaging and inspiring experiences for players of all demographics.</p>
              <p className=' text-[14px] font-thin text-subtle2'>We are a passionate team of game developers, designers, and storytellers committed to delivering
                exceptional gaming experiences. With expertise in Unreal Engine and Unity, we craft visually
                stunning environments and engaging gameplay that leave a lasting impact.
              </p>
              <NextTabButton className={" mt-7 capitalize"} name={"more about us"} href={"#"} />

            </div>
            <div className=' mt-20'>
              <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img3.jpg" className=' rounded-3xl' alt="" />
            </div>
          </div>

          <div className=' flex flex-col w-[58.33%] '>

            <div className=' flex items-center justify-center'>
              <h1 className="text-black  font-header-anton  leading-none relative z-10 ">
                <span className="block text-[140px] font-ext rabold uppercase "
                >
                  Explore
                </span>
                <span className="block text-[140px] -mt-3 " style={{
                  WebkitTextStroke: '2px black',
                  color: 'transparent',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                }}>
                  STUDIO
                </span>
              </h1>
            </div>
            <div className=' relative -mt-14 w-full'>
              <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img2.jpg" alt="" className=' rounded-2xl' />
              <div className=' absolute inset-0 -top-24 z-20'>
                <div className=' absolute -right-14'>
                  <img src="https://demo2.wpopal.com/gamico/wp-d/uploads/2023/12/h2_img1.png" alt="" />
                </div>
              </div>

              <div className=' absolute inset-0'>
                <div className=' absolute bottom-0'>
                  <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_vector.png" alt="" />
                </div>
              </div>
            </div>
            <div className=' -m    t-3'>
              <h1 className=' text-[j24px] font-header-anton text-black uppercase'>come work with us! </h1>
              <p className=' font-secondary-unbounded text-[15px] text-subtle2'>Learn more about our studios and positions</p>
            </div>
          </div>
          <div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}
