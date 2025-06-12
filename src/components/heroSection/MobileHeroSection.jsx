'use client';
import Image from 'next/image';
import Phone from '../phone/Phone';
import { useIsClient } from '@/hooks/useIsClient';

function MobileHeroSection() {
    const isClient = useIsClient();
    return (
        <>
            <div className='w-full h-[650px] relative'>
                {/* Image is a self-closing tag or has no children when using fill */}
                <Image src='/backgrounds/homebg.png' alt='world map' fill={true} objectFit='cover' />

                {/* Content is positioned absolutely on top of the image */}
                <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center text-center pt-7'> {/* Changed mt-7 to pt-7 for padding */}
                    <h3 className='text-orange-500 text-3xl font-bold'>TEXTWARE</h3>
                    <h5 className='text-xl font-bold'>CORPORATE MESSAGING</h5>
                    <h5 className='text-xl font-bold'>SOLUTIONS</h5>
                    <div className='overflow-hidden mt-5'>
                        {isClient && <Phone />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileHeroSection;