'use client'
import React from 'react'
import Image from 'next/image'
import SubHero from '@/components/heroSection/SubHero'
import MessageForm from '@/components/messageForm/MessageForm'
import ContactCard from '@/components/contactCard/ContactCard'
import { 
  Square, 
  Linkedin, 
  Camera, 
  MessageSquare, 
  PlusCircle 
} from 'lucide-react'

function ContactPage() {
    const handleMapClick = () => {
        window.open(
            "https://www.google.com/maps/place/TextWare/@6.880146,79.85851,15z/data=!4m6!3m5!1s0x3ae25bd3ecd229b3:0xf4c98e4533f93349!8m2!3d6.8801458!4d79.8585096!16s%2Fg%2F11h4tn78x0?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
        );
    };

    return (
        <div className="min-h-screen bg-white">
            <SubHero/>
            <div className="relative w-full bg-white flex flex-col">
                

                {/* Main Content Area: Image and Contact Box */}
                 <div className="relative w-full bg-white flex flex-col">
      {/* Top Section: "BUILDS Your Career With Us" Text and Social Icons */}
      <div className="w-full bg-white p-4 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Main Title */}
        <div>
            
        <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-extrabold text-[#02AEC9] ">
          BUILDS
        </h1>
         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#02AEC9] leading-tight mb-4 md:mb-0">
  <span className="text-[#383636] font-normal">
    Your Career With <span className="font-extrabold text-[#383636]">Us</span>
  </span>
</h2>

        </div>


        {/* Social Media Icons (using Lucide generic icons) */}
        <div className="flex items-center space-x-2">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
             className="p-3 text-gray-700 text-2xl hover:text-[#02AEC9] transition-colors duration-200">
            <Square /> {/* Generic icon for Facebook */}
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
             className="p-3 text-gray-700 text-2xl hover:text-[#02AEC9] transition-colors duration-200">
            <Linkedin /> {/* Lucide's LinkedIn icon */}
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
             className="p-3 text-gray-700 text-2xl hover:text-[#02AEC9] transition-colors duration-200">
            <Camera /> {/* Generic icon for Instagram */}
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
             className="p-3 text-gray-700 text-2xl hover:text-[#02AEC9] transition-colors duration-200">
            <MessageSquare /> {/* Generic icon for X/Twitter */}
          </a>
          <a href="#" // You can replace this with a relevant link or remove if not needed
             className="p-3 text-gray-700 text-2xl hover:text-[#02AEC9] transition-colors duration-200">
            <PlusCircle /> {/* Generic icon for Google Plus */}
          </a>
        </div>
      </div>

      {/* Main Content Area: Image Section and Contact Information Box */}
      {/* Uses a grid to control the layout for image and contact box */}
      <div className="relative flex-grow grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

          {/* Image Section (left side, taking ~7 columns on large screens) */}
          {/* The 'students.png' image is expected to include the blue bar as part of its content */}
          <div className="relative col-span-full lg:col-span-7 h-[400px] md:h-[500px] lg:h-auto z-20">
            <Image
              src="/esu/common/students.png" // Path to your student image
              alt="Students happily walking on campus"
              fill // Makes the image fill its parent container
              priority // Prioritizes loading this image for better LCP
              className="object-cover object-center" // Scales and crops to cover the area, centered
              sizes="(max-width: 1024px) 100vw, 70vw" // Helps Next.js optimize image sizes
            />
          </div>

          {/* Right Section: Head Office Contact Information */}
          <div className="col-span-full lg:col-span-5 bg-[#02AEC9] flex items-center justify-center p-8 md:p-12 text-white">
            <div className="w-full max-w-sm"> {/* Constrain width for readability */}
              <h2 className="text-3xl font-bold mb-6">Head Office</h2>
              <div className="mb-4">
                <p className="font-semibold mb-1">Address</p>
                <p>Head Office (Block E)</p>
                <p>ESoft Metro Campus No.03,</p>
                <p>De Fonseka Place, Colombo 4 Srilanka</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold mb-1">Call Us on</p>
                <a href="tel:+94117572572" className="text-xl font-bold hover:underline">+94 117 572 572</a>
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:info@esoft.lk" className="text-xl font-bold hover:underline">info@esoft.lk</a>
              </div>
            </div>
          </div>
      </div>
    </div>
                {/* contact card section */}
                <div className='container mx-auto py-10 flex items-center justify-center flex-wrap gap-10 px-4 sm:px-10 '>
                  {/* Certificate and Transcript */}
                  <ContactCard
                    title="Certificate and"
                    titleHighlight="Transcript"
                    addressLabel="Address"
                    addressContent={
                      <>
                        <p>Registrar</p>
                        <p>ESoft Metro Campus</p>
                        <p>No.03, De Fonseka Place,</p>
                        <p>Colombo 4, Srilanka</p>
                      </>
                    }
                    emailLabel="Email"
                    emailContent="verifications@esoft.lk"
                    callLabel="Call Us on"
                    callContent="+94 117 572 572"
                  />

                  {/* Complaints and Student Feedback card */}
                  <ContactCard
                    title="Complaints and"
                    titleHighlight="Student Feedback"
                    addressLabel="Address"
                    addressContent={
                      <>
                        <p>SRU Division</p>
                        <p>ESoft Metro Campus</p>
                        <p>No.03, De Fonseka Place,</p>
                        <p>Colombo 4, Srilanka</p>
                      </>
                    }
                    emailLabel="Email"
                    emailContent="SRU@esoft.lk"
                    callLabel="Call Us on"
                    callContent="+94 117 677 888"
                  />
                </div>
                {/*  Map Section  */}
                <div 
                    className='mt-10 w-full h-[400px]  overflow-hidden cursor-pointer' 
                    onClick={handleMapClick}
                    data-aos="fade-up"
                >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126752.54341683509!2d79.70567049726563!3d6.888568900000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bc303199601%3A0xae20e31365516d8b!2sESU%20(ESOFT%20Uni)%20Head%20Office!5e0!3m2!1sen!2slk!4v1749660674510!5m2!1sen!2slk" 
                        width="100%" 
                        height="450" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Contact Form Section */}
                <div className='container mx-auto py-10 flex items-center justify-center flex-wrap gap-10 px-4 sm:px-10'>
                    <MessageForm />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
