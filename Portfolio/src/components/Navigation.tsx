import React, { useEffect, useRef, useState } from 'react';
import MotionWrapper from './MotionWrapper';
import { cn } from '../utils/cn';
import { FiDownload } from 'react-icons/fi';

function Navigation() {
    const ref = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({
        offsetTop: 0,
        offsetLeft: 0,
        clientWidth: 0,
        clientHeight: 0,
    });

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
            top: dimensions.offsetTop + dimensions.clientHeight / 2,
            left: dimensions.offsetLeft + dimensions.clientWidth / 2,
            width: `${dimensions.clientWidth}px`,
            height: `${dimensions.clientHeight}px`,
            transform: 'translate(-50%, -50%) scale(1)',
        },
        transition: {
            top: { delay: 1.4, duration: 0.2 },
            left: { delay: 1.4, duration: 0.2 },
            transform: { delay: 1.4, duration: 0.4 },
            opacity: { delay: 1.2 },
        },
    };

    return (
        <>
            <MotionWrapper
                className={cn('col-span-12 row-span-1')}
                asRef={true}
                ref={ref}
            >
                Navigation
            </MotionWrapper>

            <MotionWrapper
                className="z-40 bg-[#E7F0DC] flex items-center justify-between px-6 py-4 font-playfair text-[#333]"
                animation={animation}
            >
                {/* Left: Name */}
                <div className="text-2xl text-[#729762] font-light">
                    <span className="font-bold">Yogeshwaran </span><span className="italic">Manivannan</span>
                </div>

                {/* Right: Resume download */}
                <a
                    href="/Yogesh-Resume.pdf"
                    download
                    className="text-sm px-4 py-2 rounded-md border border-[#729762] bg-[#729762] text-white hover:bg-transparent hover:text-[#729762] transition-all duration-300 flex items-center gap-2"
                >
                    <FiDownload className="text-base" />
                    Download Resume
                </a>
            </MotionWrapper>
        </>
    );
}

export default Navigation;