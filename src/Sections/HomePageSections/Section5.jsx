import { motion, useInView } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import React, { useRef, useState } from 'react'

export const Section5 = () => {
  const [isOpen, setIsOpen] = useState([1]);
  const [currentId, setCurrentId] = useState(1)
  const experience = ["Unreal Engine & Unity ","Cross-Platform Development"," Innovative Game Mechanics" ]
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const sideContent  = {
    '1':{
      id:"1",
      img:"https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_img-5.png",
      text:"Harnessing the power of Unreal Engine and Unity, we deliver photorealistic graphics, dynamiclighting, and seamless gameplay mechanics. Unity’s versatility allows us to create optimizedgames for mobile, desktop, VR, and more."
   },
    '2':{
      id:"2",
      img:"https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h5_img-2.png",
      text:"Our games are designed to perform on multiple platforms, ensuring accessibility and a wider audience reach."
    },
    '3':{
      id:"3",
      img:"https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_img-9.png",
      text:"From AI-driven characters to unique control systems, we innovate to keep gameplay fresh and exciting."
    },
  }

  const handleMouseEnter = (id) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[id] = true;
      return newState;
    });

    setCurrentId(id+1)
  };

  const handleMouseLeave = (id) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[id] = false;
      return newState;
    });
  };

  return (
    <section className='relative bg-bg2 h-[110vh] rounded-t-[70px] z-[30] -mt-10 shadow-top'>
      <motion.div 
       initial={{ opacity: 0, y: 0 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 0.6, ease: "easeOut" }}
      className=' containers'>
      <div className=' absolute inset-0 left-60 bg-bg-svg bg-no-repeat z-[-1] '> </div> 
      <div className='absolute inset-0 left-[75%] top-40 bg-bg-svg2 z-[-1] bg-no-repeat '></div>

     
        <div className=' flex justify-center pt-32'>
          <div className=' relative  z-20 '> 
          <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_dino.png" className='' alt="" />
          </div>
          <div className=' -ml-20 '>
        <h1  className="text-black  font-header-anton  leading-none relative z-10 "> 
        <span className="block text-[80px] font-ext text-center rabold uppercase "
                >
                  solid experience <br />of many years
                </span>
        </h1>
          </div>
        </div>
          
          <div className=' flex  gap-10 mt-2 items-center w-full'>
            <div className=' w-[61%]'>
            {experience.map((experience,idx)=><ExperienceCard key={idx} id={idx} name={experience} isOpen={isOpen[idx]} onEnter={()=>handleMouseEnter(idx)} onLeave={()=>handleMouseLeave(idx)} />)}
            </div>
            <motion.div
           ref={ref}
           className="flex overflow-hidden"
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, ease: "easeOut" }}
            >
          <ExperienceAvatar  imgId={sideContent[currentId].img} text={sideContent[currentId].text} />
            </motion.div>
          </div>
      </motion.div>

    </section>
  )
}

const ExperienceCard =  ({ isOpen, onLeave, onEnter ,name,id})=>{ 
  // const [isOpen, setIsOpent] = useState(false);

  return <div
  onMouseEnter={onEnter}
  onMouseLeave={onLeave}
  className={` ${isOpen?" text-primary":""} transition-all duration-300  font-header-anton text-[52px] flex cursor-pointer  `}>
     { !isOpen && <img src="/src/assets/arrow.svg" width={65} alt="" />}
    <motion.div
       initial={{ x: 0 }}
       animate={{ x: isOpen ? 0 : 30 }} // Adjust -50 to how far left you want it to move
       transition={{ type: "tween", duration: 0.3 }} // Smooth transition
       className=" flex items-center"
    >
      <h1 className=' uppercase'>
      {name}
      </h1>
    { isOpen&& <ArrowUp size={75} className='  transition-all rotate-45 text-primary'/>}
      </motion.div>
  </div>
}

const ExperienceAvatar = ({ imgId, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Animates only once when in view

  return (
    <motion.div
      ref={ref}
      className="flex items-start"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img width={360} src={imgId} alt="" />
      </motion.div>
      <motion.div
        className="w-[300px] p-8 text-[14px] leading-6 text-subtle2 font-secondary-unbounded bg-white rounded-2xl -ml-10"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p>{text}</p>
      </motion.div>
    </motion.div>
  );
};