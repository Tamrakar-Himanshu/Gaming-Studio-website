import {Link} from "react-router-dom" 
import { ChevronDown, Heart, ShoppingCart, User } from 'lucide-react'

export function NavBar() {
  return (
    <nav className=" containers font-secondary-unbounded absolute top-12 left-0 right-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="">
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo-white.svg" alt="" />
          </div> 
        </Link>
        
        <div className="flex items-center  text-[12px] font-semibold ">
          <div className="hidden md:flex items-center space-x-8 text-white">
            <Link href="#" className="flex items-center">
              HOME <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-[#2CFFA4]">ABOUT US</Link>
            <Link href="#" className="hover:text-[#2CFFA4]">SERVICES</Link>
            <Link href="#" className="flex items-center">
              PROJECTS <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link href="#" className="flex items-center">
              BLOGS <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link href="#" className="flex items-center">
              PAGES <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
        </div>
          <div className="flex items-center space-x-4 text-white ">
            <button className="hover:text-[#2CFFA4]">
              <User className="h-6 w-6" />
            </button>
            <button className="hover:text-[#2CFFA4]">
              <Heart className="h-6 w-6" />
            </button>
            <button className="hover:text-[#2CFFA4]">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
      </div>
    </nav>
  )
}

