import React, { useState } from "react";
import logo from "../assets/logo/logo.png"; // Update path to your logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Update based on your dropdown component setup

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#F2F6F7]">
      <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 px-4 sm:px-8 lg:px-24 max-w-1440 mx-auto">
        {/* Logo and Title */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <span className="text-primary font-inter font-bold text-lg sm:text-xl lg:text-3xl">
              Hireoid
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex font-inter font-medium text-gray lg:text-lg items-center gap-8">
          {/* Solutions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">Solutions</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 font-inter font-medium text-lg dropdown-content">
              <DropdownMenuGroup>
                <DropdownMenuItem className="mb-4">
                  <Link to="/screening-matching-onboarding">Screening, Matching, Onboarding</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-4">
                  <Link to="/integrated-staffing">Integrated Staffing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-4">
                  <Link to="/global-payrol">Global Payroll</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Industries Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">Industries</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              <DropdownMenuGroup>
                <DropdownMenuItem className="mb-4">
                  <Link to="/retail-and-e-commerce">Retail & E-commerce</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-4">
                  <Link to="/heathcare">Healthcare</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-4">
                  <Link to="/travel-and-hospitality">Travel & Hospitality</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-4">
                  <Link to="/transportation">Transportation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-4">
                  <Link to="/technology">Technology</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-4">
                  <Link to="/travel-and-hospitality">Travel & Hospitality</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-4">
                  <Link to="/artificial-intelligence-and-machine-learning">Artificial Intelligence & Machine Learning</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Desktop Links */}
          <Link to="/about-us" className="cursor-pointer">
            About Us
          </Link>
          <Link to="/contact" className="cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button className="p-2 focus:outline-none" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/join-us" className="bg-white w-[83px] h-[40px] rounded-full font-medium flex items-center justify-center hover:text-primary">
            Join us
          </Link>
          <Link to="/mm" className="bg-white w-[83px] h-[40px] border border-primary rounded-full font-medium flex items-center justify-center hover:text-primary">
            Login
          </Link>
          <Link to="/kk" className="bg-primary w-[201px] h-[40px] text-white rounded-full flex items-center justify-center hover:text-gray">
            <span>Schedule a demo</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="font-inter font-medium text-gray text-base p-4 space-y-4">
            <li>
              <Link to="/screening-matching-onboarding" onClick={toggleMobileMenu}>
                Screening, Matching, Onboarding
              </Link>
            </li>
            <li>
              <Link to="/integrated-staffing" onClick={toggleMobileMenu}>
                Integrated Staffing
              </Link>
            </li>
            <li>
              <Link to="/global-payrol" onClick={toggleMobileMenu}>
                Global Payroll
              </Link>
            </li>
            <li>
              <Link to="/retail-and-e-commerce" onClick={toggleMobileMenu}>
                Retail & E-commerce
              </Link>
            </li>
            <li>
              <Link to="/heathcare" onClick={toggleMobileMenu}>
                Healthcare
              </Link>
            </li>
            <li>
              <Link to="/travel-and-hospitality" onClick={toggleMobileMenu}>
               Travel and hospitality
              </Link>
            </li>
            <li>
              <Link to="/transportation" onClick={toggleMobileMenu}>
                Transportation
              </Link>
            </li>
            <li>
              <Link to="/technology" onClick={toggleMobileMenu}>
                Technology
              </Link>
            </li>
            <li>
              <Link to="/travel-and-hospitality" onClick={toggleMobileMenu}>
                Travel and hospitality
              </Link>
            </li>
            <li>
              <Link to="/artificial-intelligence-and-machine-learning" onClick={toggleMobileMenu}>
                Artificial Intelligence & Machine Learning
              </Link>
            </li>
            <li>
              <Link to="/join-us" onClick={toggleMobileMenu}>
                Join us
              </Link>
            </li>
            <li>
              <Link to="/mm" onClick={toggleMobileMenu}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/kk" className="text-primary" onClick={toggleMobileMenu}>
                Schedule a demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
