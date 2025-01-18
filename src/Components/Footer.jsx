import {   ArrowUp } from 'lucide-react'
import { Button } from "../Components/ui/Button" 
import { NextTabButton } from "../Components/ui/NextTabButton" 
import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'


export default function Footer() {
  const scrollToTop = () => {
    console.log("inside scroll......");
    
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false,margin:"-50px" });

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const xPosition = (scrollPosition % 300) - 250; // Adjust range as needed
      controls.start({ x: xPosition });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <footer className="bg-bg3 -mt-20 shadow-top2 z-50 rounded-t-[20px]  md:rounded-t-[40px] lg:rounded-t-[70px] text-subtle2 font-secondary-unbounded pt-20 relative">
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
      className="containers px-4">
        <div className=" flex justify-between flex-wrap ">
          {/* Company Info */}
          <div className=" lg:max-w-sm w-full lg:w-[40%] flex flex-col items-center  md:inline justify-center ">
            <a href="/" className="text-2xl font-bold text-white flex items-center gap-2">
             <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo_light.svg" alt="" />
            </a>
            <p className="text-sm leading-relaxed border-b md:text-left text-center border-subtle pb-5 mt-6">
              Qamico is an independent game studio making original games for PC, consoles, and mobile platforms.
            </p>
            <div className="flex items-center -ml-7">
              <img src="/flat.png" width={100} className=' inline' alt="" />
              <p className="text-sm leading-relaxed ">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
            </div>
          </div>
          <div className=' flex flex-col md:flex-row justify-center md:justify-between items-center  w-full lg:w-[60%]  md:text-left text-center'>
          {/* Say Hello */}
          <div className="md:space-y-6 md:mt-0 mt-5 ">
            <h3 className="text-[16px] font-bold text-white">Say Hello</h3>
            <div className=" space-y-2 md:space-y-3">
              <p className="text-sm">hello@example.com</p>
              <p className="text-sm text-white">+123 888 000 33</p>
              <p>
             <a href="" className=' text-primary   underline uppercase font-semibold text-[12px] mt-10'>chat with us</a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="md:space-y-6 md:mt-0 mt-5">
            <h3 className="text-[16px] font-bold text-white">Social</h3>
            <div className=" space-y-2 md:space-y-3">
              {["facebook","twitter","linkedin","instagram"].map((item)=><Links name={item} />)} 
            </div>
          </div>

          {/* Newsletter */}
          <div className=' md:mt-0 mt-5'>

          <div className=" flex sm:inline-block justify-center  items-center flex-col  max-w-sm">
            <h3 className=" text-[16px] font-bold texce text-white">Newsletter</h3>
            <p className="text-sm mt-2 md:mt-6 ">
              Get notified about updates and be the first to get early access to new episodes.
            </p>
          </div>
            <div className=" mt-10 flex justify-between border-b border-subtle pb-2">
               <input type="text" className=' outline-none bg-transparent text-[12px]' name="" id="" placeholder='Email address' />
               <NextTabButton name={"subscribe"} className={"uppercase"} />
            </div>
          </div>
          </div>
        </div>

        {/* Divider with Game Controller */}
        <div className="relative my-12 mt-40 sm:mt-24">
          <motion.div
         className="absolute left-1/2 -translate-x-1/2 -top-20"
         animate={controls}
         initial={{ x: 0 }}
         transition={{ type: 'spring', stiffness: 50 }}
          >

            <img
              src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/ft-img.png"
              alt="Game Controller" 
              className=" w-[140px] sm:w-[200px]  object-contain"
            />
          </motion.div>
          <hr className="border-[3px]" />
        </div>


        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm md:mt-0 mt-5">
            © 2024 <span className="text-emerald-400">Qamico</span>. All rights reserved
          </p>
          <nav className="flex gap-3 sm:gap-5">
            {['home', 'news', 'projects', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`/${item}`}
                className="text-sm hover:text-primary-hover  text-subtle transition-colors"
              >
                {item}{ item!=="contact" && <span  className=' ml-3 sm:ml-5'>|</span>}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className=" fixed  hidden sm:flex justify-center items-center bottom-8 right-8 w-16 h-16 rounded-full bg-primary hover:bg-primary-hover text-black"
        aria-label="Scroll to top"
      >
        <ArrowUp className=" flex justify-center items-center w-6 h-6 text-white" />
      </button>
    </footer>
  )
}

const Links = ({name}) => {
  return <a href="#" className=" text-[14px] block text-sm hover:text-primary-hover duration-300 transition-colors capitalize font-thin">
  {name}
</a>
}
