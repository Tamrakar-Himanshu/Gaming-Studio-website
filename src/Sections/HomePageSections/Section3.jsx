import { ArrowRight } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../Components/ui/Button'
import { motion, useInView } from 'framer-motion'

export const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = 0.9 + scrollPosition / 10000; 
      setScale(newScale < 1 ? 1 : newScale); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className=' relative bg-white rounded-t-[20px] md:rounded-t-[40px] lg:rounded-t-[70px]  border-black bo rder shadow-top z-[20]'>
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
        className=' containers'>
        <div className=' py-20 flex flex-col items-center justify-center md:flex-row md:justify-between'>
          {/* left part */}
          <div className=' flex flex-col justify-center md:justify-start md:items-start max-w-md md:w-[41.66%] lg:w-[41.66%] lg:pr-20 '>
            <div className=' flex items-center justify-center'>
              <h1 className="text-black text-[56px] md:text-[80px] lg:text-[100px] lg1:text-[140px]  font-header-anton  leading-none relative z-10 ">
                <span className="block text-center md:text-left font-ext rabold uppercase  "
                >
                  OUR
                </span>
                <span className="block-mt-3 " style={{
                  WebkitTextStroke: '2px black',
                  color: 'transparent',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                }}>
                  VISION
                </span>
              </h1>
            </div>
            <div className=' font-secondary-unbounded mt-10 space-y-8 '>
              <p className='text-center md:text-left text-[14px] font-thin text-subtle2 leading-6'>With constant effort and creativity, Gamico aspires to become the leading game studio in every category that participates in, create quality global products with hundreds of millions of downloads
              </p>
              <p className=' text-[18px] text-center md:text-left  font-mid leading-8 '>Our business philosophy is “Success will come to us naturally if we help others succeed”.</p>
<div className=' flex justify-center md:justify-start'>
              <Button href={"#"} text={"Let's talk"} />
</div>

            </div>
          </div>

          {/* right part */} 
          <div className=' relative flex justify-center w-[60%] items-center lg:mt-0 lg1:mg-0 md:mt-0 mt-32  '>
          <div>
              <img
                src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_img-9.png"
                alt=""
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.2s ease-out",
                }}
              />
            </div>
            <div className='  overflow-x-clip absolute inset-0 top-0 left-0 right-0'>
              <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_deco.png" alt="" className='rotating'
              />
            </div>
          </div>
          {/* imgage behind the avatar */}
          <div
  className="absolute hidden md:inline lg1:inline right-0 z-[-1] pl-[50%] md:pl-[58%] lg:pl-[60%] lg1:pl-[60%]"
>
  <div className="relative">
    <img
      src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_img-10.jpg"
      className=""
      width={580}
      alt=""
    />
  </div>
</div>

          <div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}