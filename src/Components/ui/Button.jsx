import { ArrowRight } from 'lucide-react'
import React from 'react'

export const Button = ({className,href,text,onclick}) => {
  return (
    <div
    onClick={onclick}
    >
        <a
            href={href}
            className={` ${className} inline-flex font-header-anton items-center px-12 py-5 bg-primary text-black rounded-[4px] rounded-br-[25px] hover:bg-black transition-all duration-300 hover:text-white group uppercase  hover:rounded-br-[4px]`}
          >
            {text}
            <ArrowRight className="ml-2 h-5 w-5 -rotate-45 transition-all duration-500 group-hover:rotate-0" />
          </a>
    </div>
  )
}
