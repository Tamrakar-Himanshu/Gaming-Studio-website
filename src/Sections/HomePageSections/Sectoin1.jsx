 
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../Components/ui/Button'
import { motion, MotionConfig, useInView } from 'framer-motion'
import { useRef } from 'react';

export function Sectoin1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section 
    
      className=" md:h-[140vh] lg:h-[160vh] lg1:h-[170vh]  relative flex items-center"
      style={{
        backgroundImage: 'url("https://demo2.wpopal.com/gamico/wp-content/uploads/2024/01/h1-bgvideo.jpg")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}j
    >
       {/* <video 
    autoplay 
    muted 
    loop 
    class="absolute top-0 left-0 w-full h-full object-cover  inset-0 z-[-1] ">
    <source src="/public/hero.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video> */}
      <div className="absolute inset-0 bg-black/30" />
   
      <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView?{ opacity: 1, y: 0 }:{}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative containers w-full  z-10">
        <div className="max-w-3x md:-mt-v60 lg:-mt-32 lg1:-mt-6  l">
          <h1 className="text-white md:text-[100px] lg:text-[140px] lg1:text-[200px] font-header-anton  leading-none">
            <span className="blockfont-ext rabold "  
            >
              WE MAKE
            </span>  
            <span className="block md:-mt-1 lg:-mt-2 lg1:-mt-3 " style={{ 
              WebkitTextStroke: '2px white',
              color: 'transparent',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }}>
              <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_img-1.jpg" className=' md:w-[150px] lg:w-[240px] lg1:w-fit inline  rounded-full -mt-4 mr-4 transition-all duration-300' alt="" />
              GAMES
            </span>
          </h1>
          
          <p className="mt-6 font-secondary-unbounded text-[18px] leading-7 text-white max-w-2xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            An award-winning Prague-based indie game studio pushing the boundaries of narrative and serious games
          </p>
          
       <Button text={"our projects"} className={" mt-14"} href="#" />

        </div>
      </motion.div> 
    </section>
  )
}

