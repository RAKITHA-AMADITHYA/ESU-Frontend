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

function page() {
     const handleMapClick = () => {
        window.open(
            "https://www.google.com/maps/place/TextWare/@6.880146,79.85851,15z/data=!4m6!3m5!1s0x3ae25bd3ecd229b3:0xf4c98e4533f93349!8m2!3d6.8801458!4d79.8585096!16s%2Fg%2F11h4tn78x0?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
        );
    };

    return (
        <div className="min-h-screen bg-white">
            <SubHero/>
            <div className="relative w-full bg-white flex flex-col ">
                
            <div className="bg-[#aed6e0] mt-50 h-80"> {/* Corresponds to Box bgcolor="#E5F2FF" mt={2} */}
                <div className="w-auto  mt-0 md:mt-2 mx-2 md:mx-auto"> {/* Corresponds to Box sx={{width:..., mt:..., margin:...}} */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-2"> {/* Corresponds to Grid container spacing={2} sx={{mt: 2}} */}

          {/* Left Grid */}
                    <div className="w-full md:w-7/12 flex justify-center md:justify-end items-end md:-mt-[180px]" data-aos="fade-up"> 
                              <Image
                      src="/esu/common/studentImg.png"
                      alt="Students happily walking on campus"
                      width={900} // adjust size as needed
                      height={400}
                      priority
                      className="object-contain object-center lg:object-left"
                    />

          </div>

          {/* Right Grid  */}

          <div className="w-full md:w-5/12"> {/* Corresponds to Grid item xs={12} sm={7} */}
             <div className="w-full max-w-sm"> {/* Constrain width for readability */}
              <h2 className="text-4xl font-semibold -mt-12" data-aos="fade-right">
              Head <span className="text-[#00AECD]">Office</span>
              </h2>              <div className="mb-4">
                            <p className="font-sm mb-1 mt-5"data-aos="fade-right">Address</p>
                            <p className='font-bold'data-aos="fade-right">Head Office (Block E)</p>
                            <p className='font-bold'data-aos="fade-right">ESoft Metro Campus No.03,</p>
                            <p className='font-bold'data-aos="fade-right">De Fonseka Place, Colombo 4 Srilanka</p>
                          </div>
                          <div className="mb-4">
                            <p className="font-sm mb-1"data-aos="fade-right">Call Us on</p>
                            <a href="tel:+94117572572" className="text-xl font-bold hover:underline" data-aos="fade-right">+94 117 572 572</a>
                          </div>
                          <div>
                            <p className="font-sm mb-1" data-aos="fade-right">Email</p>
                            <a href="mailto:info@esoft.lk" className="text-xl font-bold hover:underline" data-aos="fade-right">info@esoft.lk</a>
                          </div>
                        </div>
                      </div>

         
        </div>
      </div>
    </div>








            
                {/* contact card section */}
                <div className='container mx-auto py-10 flex items-center justify-center flex-wrap gap-10 px-4 sm:px-10 mt-10' data-aos="fade-up">
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
                <div className='container mx-auto py-10 flex items-center justify-center flex-wrap gap-10 px-4 sm:px-10' data-aos="fade-up">
                    <MessageForm />
                </div>
            </div>
        </div>
    )
}

export default page
