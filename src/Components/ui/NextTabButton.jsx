import { ArrowRight } from 'lucide-react'
import React from 'react'

export const NextTabButton = ({className,name, href}) => {
  return (
    <a href={href}>
      <button  className={` ${className} hover:text-primary  transition-all duration-300 group font-header-anton text-[16px]`}>
 {name} <ArrowRight className='-rotate-45 inline text-primary group-hover:rotate-0 transition-all group-hover:text-primary duration-500'/>  
      </button>
    </a>
  )
}
