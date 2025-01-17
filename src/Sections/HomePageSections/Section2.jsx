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
                <span className="block text-[42px] md:text-[60px] lg:text-[80px] uppercase hover:text-primary-hover cursor-pointer transition-all duration-300 "
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
        staggerChildren: 0.2,
      },
    },
  }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="containers  "
>
  <div className="pt-16 sm:pt-24 lg:pt-32 flex flex-wrap">
    {/* Left Section */}
    <div className="flex flex-col justify-start items-start w-full lg:w-5/12 pr-0 lg:pr-20 mb-10 lg:mb-0">
      <div>
        <img
          src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_deco.png"
          alt=""
          className="rotating max-w-full"
        />
      </div>
      <div className="font-secondary-unbounded mt-6 lg:mt-10 space-y-6 lg:space-y-10">
        <p className="text-[16px] sm:text-[18px] leading-6 lg:leading-8">
          We develop immersive games that integrate advanced technology with exceptional storytelling,
          delivering engaging and inspiring experiences for players of all demographics.
        </p>
        <p className="text-[14px] font-light text-subtle2">
          We are a passionate team of game developers, designers, and storytellers committed to delivering
          exceptional gaming experiences. With expertise in Unreal Engine and Unity, we craft visually
          stunning environments and engaging gameplay that leave a lasting impact.
        </p>
        <NextTabButton
          className="mt-5 sm:mt-7 capitalize"
          name="more about us"
          href="#"
        />
      </div>
      <div className="mt-10 lg:mt-20">
        <img
          src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img3.jpg"
          className="rounded-3xl max-w-full"
          alt=""
        />
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-col w-full lg:w-7/12">
      <div className="flex items-center lg1:justify-center">
        <h1 className="text-black font-header-anton leading-none relative z-10 md:text-[80px] lg:text-[100px] lg1:text-[140px]">
          <span className="block uppercase">Explore</span>
          <span
            className="block -mt-1 lg1:-mt-3"
            style={{
              WebkitTextStroke: "2px black",
              color: "transparent",
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
            }}
          >
            STUDIO
          </span>
        </h1>
      </div>
      <div className="relative -mt-8 sm:-mt-14 w-full">
        <img
          src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img2.jpg"
          alt=""
          className="rounded-2xl max-w-full object-cover"
        />
        <div className="absolute inset-0 -top-12 sm:-top-24 z-20">
          <div className="absolute -right-40 lg1:-right-14">
            <img
              src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img1.png"
              alt=""
              className=" lg:w-[70%] lg1:w-full "
            />
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute bottom-0">
            <img
              src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_vector.png"
              alt=""
              className="max-w-full"
            />
          </div>
        </div>
      </div>
      <div className=" -mt-2">
        <h1 className="text-[24px] font-header-anton text-black uppercase">
          come work with us!
        </h1>
        <p className="font-secondary-unbounded text-[13px] sm:text-[15px] text-subtle2">
          Learn more about our studios and positions
        </p>
      </div>
    </div>
  </div>
</motion.div>

    </section>
  )
}
