import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    return (
        <nav className="bg-[#F2F6F7]">
            <div className="flex items-center justify-between h-24  px-24 max-w-1440 mx-auto">
                {/* Logo and Title */}
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                        <span className="text-primary font-inter font-bold text-xl 2xl:text-3xl">
                            Hireoid
                        </span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="font-inter font-medium text-gray 2xl:text-lg flex items-center gap-8">
                    {/* Solutions */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div
                                className="font-inter font-medium text-gray 2xl:text-lg flex items-center gap-8"
                                style={{ cursor: 'pointer' }}
                            >
                                Solutions
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-80 font-inter font-medium text-lg dropdown-content"
                            style={{
                                paddingTop: '24px', paddingBottom: '24px', paddingRight: '24px', paddingLeft: '24px', borderRadius: "20px", backgroundColor: '#fff',
                            }}
                        >
                            <DropdownMenuGroup>
                                <DropdownMenuItem className="mb-4">
                                    <Link to="/screening-matching-onboarding">
                                        Screening, Matching, Onboarding
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="mb-4">
                                <Link to="/integrated-staffing">
                                    Integrated Staffing
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="mb-4">
                                    Global Payroll
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* Industries */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div
                                className="font-inter font-medium text-gray 2xl:text-lg flex items-center gap-8"
                                style={{ cursor: 'pointer' }}
                            >
                                Industries
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-80 font-inter font-medium text-lg"
                            style={{ paddingTop: '24px', paddingBottom: '24px', paddingRight: '24px', paddingLeft: '24px', borderRadius: "20px" }}
                        >
                            <DropdownMenuGroup>
                                <DropdownMenuItem className="mb-4">
                                    <Link to="/retail-and-e-commerce">
                                        Retail & E-commerce
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="mb-4">
                                    <Link to="/heathcare">
                                        Healthcare
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="mb-4">
                                    <Link to="/travel-and-hospitality">
                                        Travel & Hospitality
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="mb-4">
                                    <Link to="/transportation">
                                        Transportation
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="mb-4">
                                    <Link to="/technology">
                                        Technology
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link to="/artificial-intelligence-and-machine-learning">
                                        Artificial Intelligence & Machine Learning
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* Resources */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div
                                className="font-inter font-medium text-gray 2xl:text-lg flex items-center gap-8"
                                style={{ cursor: 'pointer' }}
                            >
                                Resources
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-48 font-inter font-medium text-lg"
                            style={{ paddingTop: '24px', paddingBottom: '24px', paddingRight: '24px', paddingLeft: '24px', borderRadius: "20px" }}
                        >
                            <DropdownMenuGroup>
                                <DropdownMenuItem className="mb-4">
                                    Blogs
                                </DropdownMenuItem>
                                <DropdownMenuItem className="mb-4">
                                    <Link to="/affiliate-program">
                                    Affiliate Program
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* About us */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div
                                className="font-inter font-medium text-gray 2xl:text-lg flex items-center gap-8"
                                style={{ cursor: 'pointer' }}
                            >
                                About us
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-40 font-inter font-medium text-lg"
                            style={{ paddingTop: '24px', paddingBottom: '24px', paddingRight: '24px', paddingLeft: '24px', borderRadius: "20px" }}
                        >
                            <DropdownMenuGroup>
                                <DropdownMenuItem className="mb-4">
                                    Why Hireoid
                                </DropdownMenuItem>
                                <DropdownMenuItem className="mb-4">
                                    Impact
                                </DropdownMenuItem>
                                <DropdownMenuItem className="mb-4">
                                    Careers
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
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
        </nav>
    );
}

export default Navbar;
