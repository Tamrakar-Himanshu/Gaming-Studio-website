import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Heart, Menu, ShoppingCart, User, X } from "lucide-react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="containers font-secondary-unbounded absolute top-12 left-0 right-0 z-50 px-6 py-4">
      <div className="flex items-center lg:justify-between justify-center">
        <button
          className="lg:hidden absolute left-5 text-white hover:text-green-500"
          onClick={toggleMobileMenu}
        >
          <Menu size={28} />
        </button>
        {/* <div className="  justify-center flex"> */}
        <Link
          to="/"
          className="flex w-full items-center lg:justify-start justify-center"
        >
          <img
            src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo-white.svg"
            alt="Logo"
            className="h-10"
          />
        </Link>
        {/* </div> */}

        <div className=" hidden sm:flex  items-center space-x-4 text-white">
          <button className="hover:text-green-500">
            <User className="h-6 w-6" />
          </button>
          <button className="hover:text-green-500">
            <Heart className="h-6 w-6" />
          </button>
          <button className="hover:text-green-500">
            <ShoppingCart className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-center space-x-8 text-white text-[12px] font-semibold m-[-24px] pl-8">
        <Link to="#home" className="flex items-center hover:text-green-500">
          HOME
          {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
        </Link>
        <Link to="#about" className="hover:text-green-500">
          ABOUT US
        </Link>
        <Link to="#services" className="hover:text-green-500">
          SERVICES
        </Link>
        <Link to="#vision" className="flex items-center hover:text-green-500">
          PROJECTS
          {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
        </Link>
        {/* <Link to="#" className="flex items-center hover:text-green-500">
          BLOGS <ChevronDown className="ml-1 h-4 w-4" />
        </Link> */}
        {/* <Link to="#" className="flex items-center hover:text-green-500">
          PAGES <ChevronDown className="ml-1 h-4 w-4" />
        </Link> */}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen && (
          <div
            className={`w-[390px] h-full bg-white text-black py-8 px-6 relative `}
          >
            <button
              className="absolute top-5 right-5 text-black hover:text-green-500"
              onClick={toggleMobileMenu}
            >
              <X size={28} />
            </button>

            <div className="flex justify-center mb-10">
              <img
                src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo.svg"
                alt="Menu Logo"
                className="h-auto w-auto"
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-start justify-center h-full space-y-6 px-15 py-30 pb-[600px] text-black mt-32">
              <Link
                to="#home"
                className="text-green-500 text-sm"
                onClick={toggleMobileMenu}
              >
                HOME
              </Link>
              <Link
                to="#about"
                className="hover:text-green-500 text-sm font-semibold"
                onClick={toggleMobileMenu}
              >
                ABOUT US
              </Link>
              <Link
                to="#services"
                className="hover:text-green-500 text-sm font-semibold"
                onClick={toggleMobileMenu}
              >
                SERVICES
              </Link>
              <Link
                to="#vision"
                className="hover:text-green-500 text-sm font-semibold"
                onClick={toggleMobileMenu}
              >
                PROJECTS
              </Link>
              {/* <Link
              to="#"
              className="hover:text-green-500 text-sm font-semibold"
              onClick={toggleMobileMenu}
            >
              BLOGS
            </Link> */}
              {/* <Link
              to="#"
              className="hover:text-green-500 text-sm font-semibold"
              onClick={toggleMobileMenu}
            >
              PAGES
            </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
