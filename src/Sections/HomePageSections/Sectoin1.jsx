 
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Sectoin1() {
  return (
    <section 
      
      className=" h-[170vh]  relative flex items-center"
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
      
      <div className="relative containers w-full  z-10">
        <div className="max-w-3x -mt-6  l">
          <h1 className="text-white  font-header-anton  leading-none">
            <span className="block text-[200px] font-ext rabold "  
            >
              WE MAKE
            </span>  
            <span className="block text-[200px] -mt-3 " style={{ 
              WebkitTextStroke: '2px white',
              color: 'transparent',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }}>
              <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_img-1.jpg" className=' inline  rounded-full -mt-4 mr-4' alt="" />
              GAMES
            </span>
          </h1>
          
          <p className="mt-6 font-secondary-unbounded text-[18px] leading-7 text-white max-w-2xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            An award-winning Prague-based indie game studio pushing the boundaries of narrative and serious games
          </p>
          
          <Link
            href="#"
            className="inline-flex font-header-anton items-center mt-12 px-10 py-5 bg-[#2CFFA4] text-black rounded-[4px] rounded-br-[35px] hover:bg-[#20CC83] transition-colors"
          >
            OUR PROJECTS
            <ArrowRight className="ml-2 h-5 w-5 -rotate-45 " />
          </Link>
        </div>
      </div>
    </section>
  )
}

