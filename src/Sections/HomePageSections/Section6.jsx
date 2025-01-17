import React from 'react'
import { Button } from '../../Components/ui/Button'

export const Section6 = () => {
  return (
    <section className='relative bg-bg3 h-[110vh] rounded-t-[70px] z-[30] -mt-10 shadow-top pt-32'> 
    <div className=' containers'>
      <div className=' flex items-end gap-40'>
      <div className=' flex justify-start items-start'>
              <h1 className="text-white  font-header-anton  leading-none relative z-10 ">
                <span className="block text-[140px] text- font-ext rabold uppercase "
                >
                  OUR
                </span>
                <span className="block text-[140px] uppercase -mt-2 " style={{
                  WebkitTextStroke: '2px white',
                  color: 'transparent',
                  // filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                }}>
                  capabilities
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
                <Button href={"#"} text={"what we offer"} className={"  "} />
              </div>
      </div>
      </div>
    </div>
    </section>
  )
}
