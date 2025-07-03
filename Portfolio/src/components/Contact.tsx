import React, { useEffect, useRef, useState } from 'react';
import MotionWrapper from './MotionWrapper';
import { cn } from '../utils/cn';

function Contact() {
    const ref = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({
        offsetTop: 0,
        offsetLeft: 0,
        clientWidth: 0,
        clientHeight: 0,
    });
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        if (ref.current) {
            const { offsetTop, offsetLeft, clientWidth, clientHeight } =
                ref.current;
            setDimensions({ offsetTop, offsetLeft, clientWidth, clientHeight });
        }
    }, [ref]);

    const animation = {
        initial: {
            top: '50%',
            left: '50%',
            width: '0px',
            height: '0px',
            transform: 'translate(-50%, -50%) scale(0)',
        },
        animate: {
            top: dimensions.offsetTop,
            left: dimensions.offsetLeft,
            width: `${dimensions.clientWidth}px`,
            height: `${dimensions.clientHeight}px`,
            transform: 'scale(1)',
        },
        transition: {
            top: { delay: 1.4, duration: 0.2 },
            left: { delay: 1.4, duration: 0.2 },
            transform: { delay: 1.4, duration: 0.4 },
            opacity: { delay: 1.2 },
        },
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <>
            <MotionWrapper
                className={cn(
                    'md:col-span-4 md:row-span-3',
                    'sm:col-span-6 sm:row-span-3',
                )}
                asRef={true}
                ref={ref}
            >
                Contact
            </MotionWrapper>
            <MotionWrapper
                className={`z-40 bg-[#729762] top-25 p-6`}
                animation={animation}
            >
                {/* Front: Top content (visible when not flipped) */}
                <div className={`absolute top-5 left-6 transition-all duration-500 ${isFlipped ? 'opacity-0 rotate-y-90' : 'opacity-100'}`}>
                    <div className="text-[#E7F0DC] font-quicksand text-[15px] leading-tight">
                        Open to opportunities<br />Let's connect!
                    </div>
                </div>

                {/* Back: Top content (visible when flipped) */}
                <div className={`absolute top-5 left-6 transition-all duration-500 ${isFlipped ? 'opacity-100' : 'opacity-0 rotate-y-90'}`}>
                    <div className="font-quicksand text-[#E7F0DC] text-2xl">
                         Let’s connect
                        {/* <span className="italic font-quicksand text-2xl"> Connect</span> */}
                    </div>
                </div>
                
                {/* Top-right arrow icon */}
                <div 
                    className="absolute top-2.5 right-4 cursor-pointer"
                    onClick={handleFlip}
                >
                    <img
                        src="/arrow.svg"
                        alt="Arrow"
                        className={`w-10 h-10 transition-transform duration-300 ease-out hover:scale-125 ${isFlipped ? 'rotate-180' : ''}`}
                    />
                </div>

                {/* Front: Main content */}
                <div className={`font-playfair mt-[160px] mr-[250px] text-[#E7F0DC] transition-all cursor-pointer duration-500 ${isFlipped ? 'opacity-0 rotate-y-90 absolute' : 'opacity-100'}`}onClick={handleFlip}>
                    <span className="text-4xl">Contact </span>
                    <span className="italic text-4xl">me</span>
                </div>

                {/* Back: Contact Details */}
                <div className={`mt-[60px] transition-all duration-500 ${isFlipped ? 'opacity-100' : 'opacity-0 rotate-y-90 absolute'}`}>
                    <div className="font-quicksand text-[#E7F0DC] space-y-4">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>yogeshwaranmanivannan1@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>+91 9840369869</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Chennai, India</span>
                        </div>
                    </div>
                </div>
            </MotionWrapper>
        </>
    );
}

export default Contact;