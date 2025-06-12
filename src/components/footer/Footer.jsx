"use client";

import { CONTACT_DETAILS, IMPORTANT_LINKS, QUICK_LINKS, SOCIAL_LINKS, } from '@/lib/constant';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-react';
import {
  PlusCircle
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Footer = () => {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  const getSocialIcon = (iconName) => {
    const icons = {
      facebook: <IconBrandFacebook />,
      linkedin: <IconBrandLinkedin />,
      instagram: <IconBrandInstagram />,
      twitter: <IconBrandTwitter />,
      plus: <PlusCircle />,
    };
    return icons[iconName] || null;
  };

  return (
    <>
      <div className='w-full bg-[#02AEC9] px-4 md:px-20 py-3 flex flex-col md:flex-row items-center justify-between'>
        <div className="text-white font-bold text-2xl md:text-3xl lg:text-2xl mb-2 md:mb-0">
          <h1>#ESULife</h1>
        </div>
        <div className="flex bg-[#016879] rounded-lg shadow-lg overflow-hidden">
          {SOCIAL_LINKS.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 md:p-3 text-white text-xl md:text-2xl border-l border-[#005160] first:border-l-0 hover:bg-teal-700 transition-colors duration-200"
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#1A1A3A] text-white pt-8  px-4 md:px-20 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-lg mb-2 text-[#02AEC9]">CONTACT DETAILS</h3>
                <div>
                  <span>Hotline Number</span>
                  <p className="text-sm font-bold ">{CONTACT_DETAILS.hotline}</p>
                </div>
                <div className=" mt-4">
                  <span>Email</span>
                  <p className="text-sm font-semibold ">{CONTACT_DETAILS.email}</p>
                </div>
                <div className="flex items-start mt-4">
                  <div>
                    <span>Head Office (Block E)</span>
                    {CONTACT_DETAILS.address.map((line, index) => (
                      <p key={index} className="text-sm font-semibold">{line}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <h3 className="font-bold text-lg mb-2 ">AWARDS</h3>
                  <Image
                    src={CONTACT_DETAILS.awardsImage}
                    alt="Award Logo"
                    width={100}
                    height={100}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-[#02AEC9]">QUICK LINKS</h3>
                <ul className="space-y-2 text-sm">
                  {QUICK_LINKS.map((link, index) => (
                    <li key={index}>
                      <a onClick={() => handleNavigate(link.path)} className="hover:text-[#02AEC9] cursor-pointer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-[#02AEC9]">IMPORTANT LINKS</h3>
                <ul className="space-y-2 text-sm">
                  {IMPORTANT_LINKS.map((link, index) => (
                    <li key={index}>
                      <a onClick={() => handleNavigate(link.path)} className="hover:text-[#02AEC9] cursor-pointer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

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

      <div className="w-full bg-[#02AEC9] text-white text-center py-3 text-sm px-4">
        <p>
          Copyright © 2025 <span className="font-bold">ESU METRO CAMPUS</span>. All rights reserved.
          Website Designed And Developed By: <span className="font-bold">Web Lankan</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
