"use client";
import React, { useState, useEffect } from 'react';
import { UsersRound, MessageSquareText, Anvil, Building, Handshake, MessageCircle, MessageSquare, Phone, PlusCircle, Target, ChevronDown, CreditCard, Users, GraduationCap } from 'lucide-react';
import SelectOption from "./SelectOption.jsx";
import { useRouter, usePathname } from "next/navigation";
import Image from 'next/image';
import {IconBrandWhatsapp} from '@tabler/icons-react';

const MobileMenuItem = ({ title, onClick, hasSubmenu, open, isActive }) => {
    return (
        <div className="border-b">
            <button 
                className={`flex justify-between items-center w-full py-2 px-4 ${isActive ? 'text-[#f78845]' : 'text-gray-600'} hover:text-[#f78845]`}
                onClick={onClick}
            >
                <span>{title}</span>
                {hasSubmenu && <ChevronDown className={`transform transition-transform ${open ? 'rotate-180' : ''}`} size={18} />}
            </button>
        </div>
    );
};

const MegaMenu = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const menuItems = [
        { id: '1', label: 'COURSES', route: '/' },
        { id: '2', label: 'FACULTIES', route: '/' },
        { id: '3', label: 'TRANSFER PROGRAMMES', route: '/' },
        { id: '4', label: 'BRANCH NETWORK', route: '/' },
        { id: '5', label: 'INTERNATIONAL PLACEMENTS', route: '/' },


    ];

    // const menuItems = [
    //     { id: 'home', label: 'Home', route: '/' },
    //     { id: 'services', label: 'Services', hasSubmenu: true },
    //     { id: 'company', label: 'Company', hasSubmenu: true },
    //     { id: 'contactUS', label: 'Contact Us', route: "/contact-us" },
    // ];

    const dropdownContent = {
        services: {
            image: "/service/dropdown.jpg",
            items: [
                { icon: <MessageSquare size={24} />, title: "SMS Services", description: "B2B and B2C messaging", route: "/service/sms-service" },
                { icon: <IconBrandWhatsapp size={24} />, title: "Whatsapp Services", description: "WhatsApp business API solution", route: "/service/whatsapp-service" },
                { icon: <Phone size={24} />, title: "Voice Services", description: "Voice messaging suite", route: "/service/voice-service" },
                { icon: <PlusCircle size={24} />, title: "Value Added Services", description: "Enhance messaging options", route: "/service/value-service" },
                { icon: <MessageCircle size={24} />, title: "Interactive Messaging", description: "Build interactivity to your message", route: "/service/interactive-service" },
                { icon: <Target size={24} />, title: "Lead Generation and CRM", description: "Missed Call based lead generation", route: "/service/crm-service" }
            ]
        },
        company: {
            image: "/company/companyDropdown.jpg",
            items: [
                { icon: <Building size={24} />, title: "Press", description: "Corporate news", route: "/" /* TODO: Update route */ },
                { icon: <UsersRound size={24} />, title: "About us", description: "Who we are", route: "/company/about-us" },
                { icon: <MessageSquareText size={24} />, title: "Testimonials", description: "Customer Feedbacks", route: "/" /* TODO: Update route */ },
                { icon: <Anvil size={24} />, title: "Careers", description: "Join with us", route: "/" /* TODO: Update route */ },
                { icon: <Handshake size={24} />, title: "Partners", description: "Corporate Partners", route: "/company/partners" },
            ]
        }
    };

    // Function to check if a route is active
    const isRouteActive = (route) => {
        if (route === '/') {
            return pathname === '/';
        }
        return pathname === route;
    };

    // Function to check if any service route is active
    const isServiceActive = () => {
        return dropdownContent.services.items.some(item => pathname.startsWith(item.route));
    };

    // Function to check if any company route is active
    const isCompanyActive = () => {
        return dropdownContent.company.items.some(item => pathname.startsWith(item.route));
    };

    const handleMenuToggle = (event, menu) => {
        if (activeMenu === menu) {
            setActiveMenu(null);
            setAnchorEl(null);
        } else {
            setActiveMenu(menu);
            setAnchorEl(event.currentTarget);
        }
    };

    const handleNavigate = (route) => {
        router.push(route);
        setActiveMenu(null);
        closeMobileMenu();
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setAnchorEl(null);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
        setAnchorEl(null);
    };

    const handleSubmenuToggle = (menuId) => {
        setOpenSubmenu(openSubmenu === menuId ? null : menuId);
    };

    return (
        <div>
    {/*Top Bar - Hide on small screens, show on large screens */}
    <div className="sticky bg-[#100B25] shadow-md text-white hidden lg:block"> {/* Added hidden lg:block */}
        <div className="grid grid-cols-12 w-full">
            <div className="col-span-8 p-4 flex gap-4 items-center text-sm">
                <h6>Home</h6>
                <div className="flex gap-2 items-center">
                    <h6>ABOUT US</h6>
                    {/* <ChevronDown Icon className="w-4 h-4 text-white" /> */}
                </div>
                <h6>STUDENTS LIFE</h6>
                <h6>CAREERS</h6>
                <h6>NEWS & EVENTS</h6>
                <h6>BLOGS</h6>
                <h6>RESEARCH</h6>
                <h6>SCHOLARSHIP</h6>
                <h6>CRS</h6>
                <h6>CONTACT US</h6>
            </div>
            <div className="col-span-4 p-4 text-sm flex gap-4 items-end justify-end">
                <div className="flex gap-2 items-center border-r border-white pr-2">
                    <CreditCard />
                    <h6>PAYMENTS</h6>
                </div>
                <div className="flex gap-2 items-center border-r border-white pr-2">
                    <Users />
                    <h6>STUDENTS</h6>
                </div>
                <div className="flex gap-2 items-center">
                    <GraduationCap />
                    <h6>ALUMNI</h6>
                </div>
            </div>
        </div>
    </div>


    <div className="sticky top-0 z-50 bg-[#00418F] shadow-md flex justify-center ">
        <div className="container flex justify-between items-center py-2">
            <div className="flex items-center">
                <Image
                    src="/esu/logos/ESULogo.png"
                    alt="Textware Logo"
                    width={97}
                    height={69}
                    className="object-contain cursor-pointer max-md:ml-5"
                    onClick={() => handleNavigate('/')}
                    priority // Header logo is likely an LCP candidate
                />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 items-center justify-center">
                {menuItems.map((item) => (
                    item.hasSubmenu ? (
                        <div key={item.id}>
                            <button
                                className={`flex items-center font-extrabold ${
                                    (item.id === 'services' && isServiceActive()) ||
                                    (item.id === 'company' && isCompanyActive()) ||
                                    activeMenu === item.id
                                        ? 'text-[#ffffff]'
                                        : 'text-white'
                                } hover:text-[#ffffff]`}
                                onClick={(event) => handleMenuToggle(event, item.id)}
                            >
                                {item.label}
                                <ChevronDown className={`ml-2 transition-transform ${activeMenu === item.id ? 'rotate-180' : ''}`} size={18} />
                            </button>
                        </div>
                    ) : (
                        <button
                            key={item.id}
                            className={`${isRouteActive(item.route) ? 'text-[#ffffff]' : 'text-gray-100'} hover:text-[#gray-300] text-md font-medium`}
                            onClick={() => handleNavigate(item.route)}
                        >
                            {item.label}
                        </button>
                    )
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden mr-5">
                <button className="text-white font-bold text-2xl" onClick={toggleMobileMenu}>
                    ☰
                </button>
            </div>
            <div className="hidden lg:flex gap-2">
                <button
                    className="text-md w-42 rounded-md h-12  bg-[#02AEC9] text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
                >
                    <span
                        className="absolute w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
                    ></span>
                    <span
                        className="absolute  w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
                    ></span>
                    Register Online
                </button>
            </div>
        </div>

        {/* Dropdown Menu */}
        {activeMenu && (
            <div className="absolute top-full left-0 w-auto bg-white rounded-md px-10 border-t-1 shadow-md b z-50 min-w-[1000px]" onMouseLeave={handleMouseLeave}>
                <div className="mx-auto py-4 grid grid-cols-3 gap-4 min-h-[300px]">
                    <div className={dropdownContent[activeMenu]?.image ? 'col-span-2' : 'col-span-3'}>
                        <div className="grid grid-cols-2 gap-3">
                            {dropdownContent[activeMenu]?.items.map((item, index) => (
                                <div key={index} className="">
                                    <SelectOption
                                        Icon={item.icon}
                                        Title={item.title}
                                        Description={item.description}
                                        onClick={() => handleNavigate(item.route)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    {dropdownContent[activeMenu]?.image && (
                        <div className="flex justify-center items-center w-full h-ful relative">
                            <Image src={dropdownContent[activeMenu].image} alt="Dropdown Image" className="object-contain" fill/>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-all">
                <div className="absolute top-0 left-0 w-4/5 bg-white p-4 h-full overflow-y-auto"> {/* Added overflow-y-auto */}
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200"> {/* Added pb-4 and border-b */}
                        <span className="text-xl font-bold text-[#00418F]">Menu</span> {/* Enhanced styling */}
                        <button onClick={closeMobileMenu} className="text-4xl font-light text-gray-500 hover:text-gray-700 transition-colors">×</button> {/* Larger, lighter 'x' */}
                    </div>

                    {/* Moved Top Bar Content into Mobile Drawer with improved styling */}
                    <div className="py-4"> {/* Added vertical padding */}
                        <div className="mb-6 p-3 bg-blue-50 rounded-lg shadow-sm"> {/* Soft blue background with shadow */}
                            <h6 className="text-lg font-semibold text-[#00418F] mb-3 border-b pb-2 border-blue-200">Quick Links</h6> {/* Stronger heading, border */}
                            <div className="flex flex-col gap-2"> {/* Changed to flex-col for better stacking */}
                                {['Home', 'ABOUT US', 'STUDENTS LIFE', 'CAREERS', 'NEWS & EVENTS', 'BLOGS', 'RESEARCH', 'SCHOLARSHIP', 'CRS', 'CONTACT US'].map((link, index) => (
                                    <button
                                        key={index}
                                        className="text-left py-2 px-3 text-gray-700 hover:bg-blue-100 rounded-md transition-colors"
                                        onClick={() => handleNavigate(`/${link.toLowerCase().replace(/\s/g, '-')}`)} // Example navigate, adjust as needed
                                    >
                                        {link}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-3 bg-blue-50 rounded-lg shadow-sm"> {/* Soft blue background with shadow */}
                            <h6 className="text-lg font-semibold text-[#00418F] mb-3 border-b pb-2 border-blue-200">Student & Alumni</h6> {/* Stronger heading, border */}
                            <div className="flex flex-col gap-2">
                                <button className="flex gap-3 items-center py-2 px-3 text-gray-700 hover:bg-blue-100 rounded-md transition-colors" onClick={() => handleNavigate('/payments')}>
                                    <CreditCard size={20} className="text-[#00418F]" /> {/* Larger icon, brand color */}
                                    <h6>PAYMENTS</h6>
                                </button>
                                <button className="flex gap-3 items-center py-2 px-3 text-gray-700 hover:bg-blue-100 rounded-md transition-colors" onClick={() => handleNavigate('/students')}>
                                    <Users size={20} className="text-[#00418F]" />
                                    <h6>STUDENTS</h6>
                                </button>
                                <button className="flex gap-3 items-center py-2 px-3 text-gray-700 hover:bg-blue-100 rounded-md transition-colors" onClick={() => handleNavigate('/alumni')}>
                                    <GraduationCap size={20} className="text-[#00418F]" />
                                    <h6>ALUMNI</h6>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* End of Moved Top Bar Content */}

                    {/* Main Menu Items (MobileMenuItem) */}
                    <div className="py-4 border-t border-gray-200 mt-4"> {/* Added top border and margin */}
                        {menuItems.map((item) => (
                            <React.Fragment key={item.id}>
                                <MobileMenuItem
                                    title={item.label}
                                    onClick={item.hasSubmenu ? () => handleSubmenuToggle(item.id) : () => handleNavigate(item.route)}
                                    hasSubmenu={item.hasSubmenu}
                                    open={openSubmenu === item.id}
                                    isActive={
                                        (item.id === 'home' && isRouteActive('/')) ||
                                        (item.id === 'services' && isServiceActive()) ||
                                        (item.id === 'company' && isCompanyActive()) ||
                                        (item.id === 'contactUS' && isRouteActive('/contact-us'))
                                    }
                                    // You might want to pass more styling props to MobileMenuItem
                                    // For example: `className="py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg"`
                                />
                                {item.hasSubmenu && openSubmenu === item.id && (
                                    <div className="pl-8 py-2 bg-gray-50 rounded-b-md"> {/* Increased padding, subtle background */}
                                        {dropdownContent[item.id]?.items.map((subItem, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleNavigate(subItem.route)}
                                                className={`block w-full text-left py-2 px-3 rounded-md ${isRouteActive(subItem.route) ? 'text-[#00418F] font-semibold bg-blue-100' : 'text-gray-700'} hover:bg-blue-100 transition-colors`}
                                            >
                                                {subItem.title}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Register Online Button (formerly TRY IT FREE) */}
                    <div className="mt-8 mb-4"> {/* Increased top margin, added bottom margin */}
                        <button
                            className="w-full h-14 bg-[#02AEC9] text-white font-bold text-lg rounded-full relative overflow-hidden group z-10
                                       hover:text-white duration-1000 shadow-lg transform hover:scale-105 transition-transform" // Enhanced button styling
                            onClick={() => handleNavigate("/")} // Or to a specific registration route
                        >
                            <span
                                className="absolute w-full h-full rounded-full group-hover:scale-100 scale-0 -z-10 origin-center transform transition-all duration-700 ease-out"
                                style={{ background: 'linear-gradient(45deg, #02AEC9, #007bff)' }} // Gradient background
                            ></span>
                            Register Online
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
</div>
    );
};

export default MegaMenu;