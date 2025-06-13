'use client'
import ContactCard from '@/components/contactCard/ContactCard'
import SubHero from '@/components/heroSection/SubHero'
import MessageForm from '@/components/messageForm/MessageForm'
import Image from 'next/image'

function page() {
    return (
        <div className="min-h-screen bg-white">
            <SubHero/>
            <div className="relative w-full flex flex-col ">
                
              <div>
 
            <div className='w-full h-[80vh] max-md:h-[100vh]   relative flex items-center justify-center'>
 
                <div className='flex w-[90%] h-full  max-md:flex-col'>
                    <div className="relative w-[60%] max-md:w-full h-full z-50" data-aos="fade-up">
 
                        {/* leftt */}
 
                        <Image
                            src="/esu/common/studentImg.png"
                            alt="Students happily walking on campus"
                            fill
                            className="object-contain "
                        />
                        {/* right */}
 
 
                    </div>
                    <div className="w-full md:w-[40%]  flex justify-center items-center z-50"> {/* Corresponds to Grid item xs={12} sm={7} */}
                        <div className="w-full "> {/* Constrain width for readability */}
                            <h2 className="text-4xl font-semibold " data-aos="fade-right">
                                Head <span className="text-[#00AECD]">Office</span>
                            </h2>
                            <div className="relative md:top-5">
                                <p className="font-sm mt-2  " data-aos="fade-right">Address</p>
                                <p className='font-bold' data-aos="fade-right">Head Office (Block E)</p>
                                <p className='font-bold' data-aos="fade-right">ESoft Metro Campus No.03,</p>
                                <p className='font-bold mb-2' data-aos="fade-right">De Fonseka Place, Colombo 4 Srilanka</p>
 
                                <div className="">
                                    <p className="font-sm " data-aos="fade-right">Call Us on</p>
                                    <a href="tel:+94117572572" className="text-xl mb-2 font-bold hover:underline" data-aos="fade-right">+94 117 572 572</a>
                                </div>
                                <div>
                                    <p className="font-sm " data-aos="fade-right">Email</p>
                                    <a href="mailto:info@esoft.lk" className="text-xl font-bold hover:underline" data-aos="fade-right">info@esoft.lk</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className='bg-[#aed6e0] absolute  w-full h-[53%] max-md:mt-0 mt-[90px] max-md:h-full'>
 
                </div>
            </div>
 
 
        </div>








            
                {/* contact card section */}
                <div className='container mx-auto py-10 flex items-center justify-center flex-wrap gap-10 px-4 sm:px-10 mt-20' data-aos="fade-up">
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
