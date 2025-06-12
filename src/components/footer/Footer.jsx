"use client";

import { Phone, MapPin, Mail, Square, Linkedin, Camera, MessageSquare, PlusCircle } from 'lucide-react'; // These are from lucide-react
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
  IconBrandTwitter, // Replaces Twitter for modern contexts
} from '@tabler/icons-react'; // These are from @tabler/icons-react
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <>
      {/* Top Bar: Logo and Social Icons */}
      <div className='w-full bg-[#02AEC9] px-4 md:px-20 py-3 flex flex-col md:flex-row items-center justify-between'>
        {/* Logo */}
        <div className="text-white font-bold text-2xl md:text-3xl lg:text-2xl mb-2 md:mb-0">
          <h1>#ESULife</h1>
        </div>

        {/* Social Icons - Using @tabler/icons-react for branded icons */}
        <div className="flex bg-[#016879] rounded-lg shadow-lg overflow-hidden">
          {/* Facebook - using a generic Lucide icon */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-center p-4 md:p-3 text-white text-xl md:text-2xl hover:bg-teal-700 transition-colors duration-200">
            <IconBrandFacebook /> {/* This is a generic square, not the Facebook 'f' logo */}
          </a>

          {/* LinkedIn - Lucide has a specific LinkedIn icon */}
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-center p-4 md:p-3 text-white text-xl md:text-2xl border-l border-[#005160] hover:bg-teal-700 transition-colors duration-200">
            <IconBrandLinkedin /> {/* This is the Lucide LinkedIn icon */}
          </a>

          {/* Instagram - using a generic Lucide icon */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-center p-4 md:p-3 text-white text-xl md:text-2xl border-l border-[#005160] hover:bg-teal-700 transition-colors duration-200">
            <IconBrandInstagram /> {/* This is a generic camera, not the Instagram logo */}
          </a>

          {/* X/Twitter - using a generic Lucide icon */}
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-center p-4 md:p-3 text-white text-xl md:text-2xl border-l border-[#005160] hover:bg-teal-700 transition-colors duration-200">
            <IconBrandTwitter /> {/* This is a generic message bubble, not the X logo */}
          </a>

          {/* Google Plus - using a generic Lucide icon */}
          <a href="#" // Replace with actual Google Plus link if available, though the platform is largely defunct
             className="flex items-center justify-center p-4 md:p-3 text-white text-xl md:text-2xl border-l border-[#005160] hover:bg-teal-700 transition-colors duration-200">
            <PlusCircle /> {/* This is a generic plus circle, not the G+ logo */}
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
<div className="w-full bg-[#1A1A3A] text-white pt-8  px-4 md:px-20 relative overflow-hidden">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
  {/* Left Side – 7 columns: Content */}
  <div className="lg:col-span-6 space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Contact Details */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg mb-2 text-[#02AEC9]">CONTACT DETAILS</h3>
        <div >
          <span>Hotline Number</span>
                  <p className="text-sm font-bold ">+94 117 572 572</p>

        </div>

        <div className=" mt-4">
          <span>Email</span>
        <p className="text-sm font-semibold ">info@esoft.lk</p>
        </div>

        <div className="flex items-start mt-4">
          <div>
            <span>Head Office (Block E)</span>
            <p className="text-sm font-semibold flex-wrap"> ESoft Metro Campus No.03,</p>
            <p className="text-sm font-semibold ">De Fonseka Place,</p>
            <p className="text-sm font-semibold ">Colombo 4, Sri Lanka.</p>
          </div>
        </div>

        <div className="mt-6 flex items-center space-x-4">
          <h3 className="font-bold text-lg mb-2 ">AWARDS</h3>
          <Image
            src="/esu/logos/bestweb.png"
            alt="Award Logo"
            width={100}
            height={100}
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-lg mb-4 text-[#02AEC9]">QUICK LINKS</h3>
        <ul className="space-y-2 text-sm">
          <li><a onClick={() => handleNavigate('/')} className="hover:text-[#02AEC9]">Home</a></li>
          <li><a onClick={() => handleNavigate('/student-life')} className="hover:text-[#02AEC9]">Student Life</a></li>
          <li><a onClick={() => handleNavigate('/about-us')} className="hover:text-[#02AEC9]">About Us</a></li>
          <li><a onClick={() => handleNavigate('/contact-us')} className="hover:text-[#02AEC9]">Contact Us</a></li>
          <li><a onClick={() => handleNavigate('/careers')} className="hover:text-[#02AEC9]">Careers</a></li>
          <li><a onClick={() => handleNavigate('/news-events')} className="hover:text-[#02AEC9]">News & Events</a></li>
          <li><a onClick={() => handleNavigate('/blogs')} className="hover:text-[#02AEC9]">Blogs</a></li>
          <li><a onClick={() => handleNavigate('/csr')} className="hover:text-[#02AEC9]">CSR</a></li>
        </ul>
      </div>

      {/* Important Links */}
      <div>
        <h3 className="font-bold text-lg mb-4 text-[#02AEC9]">IMPORTANT LINKS</h3>
        <ul className="space-y-2 text-sm">
          <li><a onClick={() => handleNavigate('/courses')} className="hover:text-[#02AEC9]">Courses</a></li>
          <li><a onClick={() => handleNavigate('/faculties')} className="hover:text-[#02AEC9]">Faculties</a></li>
          <li><a onClick={() => handleNavigate('/transfer-programmes')} className="hover:text-[#02AEC9]">Transfer Programmes</a></li>
          <li><a onClick={() => handleNavigate('/privacy-policy')} className="hover:text-[#02AEC9]">Privacy Policy</a></li>
          <li><a onClick={() => handleNavigate('/payment-policy')} className="hover:text-[#02AEC9]">Payment Policy</a></li>
          <li><a onClick={() => handleNavigate('/refund-policy')} className="hover:text-[#02AEC9]">Refund Policy</a></li>
          <li><a onClick={() => handleNavigate('/quality-policy')} className="hover:text-[#02AEC9]">Quality Policy</a></li>
          <li><a onClick={() => handleNavigate('/referrals')} className="hover:text-[#02AEC9]">Referrals</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Right Side – 5 columns: Watermark */}
  <div className="lg:col-span-6 flex items-center justify-end">
    <Image
      src="/esu/logos/esuFooter.png"
      alt="ESU Logo Watermark"
      width={600}
      height={483}
      className="object-contain mt-12"
    />
  </div>
</div>

      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#02AEC9] text-white text-center py-3 text-sm px-4">
        <p>Copyright © 2025 <span className="font-bold">ESU METRO CAMPUS</span>. All rights reserved. Website Designed And Developed By: <span className="font-bold">Web Lankan</span></p>
      </div>
    </>
  );
};

export default Footer;