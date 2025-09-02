import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MotionWrapper from './MotionWrapper';
import { cn } from '../utils/cn';

function Intro() {
    const ref = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({
        offsetTop: 0,
        offsetLeft: 0,
        clientWidth: 0,
        clientHeight: 0,
    });

    useEffect(() => {
        if (ref.current) {
            const { offsetTop, offsetLeft, clientWidth, clientHeight } = ref.current;
            setDimensions({ offsetTop, offsetLeft, clientWidth, clientHeight });
        }
    }, [ref]);

    const techStack = [
        "React.js", "Tailwind", "JavaScript", "Node.js", 
        "Express", "MongoDB", "Firebase", "Socket.io", 
        "Figma", "Git", "Github", "Bruno", "API"
    ];
    const line2TechStack = [
        "Docker", "Postman", "Vite", "JWT",
        "HTML", "CSS", "Python", "Java",
        "C++", "Vercel", "Render", "Netlify","Vitest","Fuse.js","Typescript","Bruno",
    ];

    const seamlessTechStack = [...techStack, ...techStack, ...techStack];
    const seamlessLine2TechStack = [...line2TechStack, ...line2TechStack, ...line2TechStack];

    const animation = {
        initial: {
            top: '50%',
            left: '50%',
            width: '0px',
            height: '0px',
            transform: 'translate(-50%, -50%) scale(0)',
        },
        animate: {
            top: dimensions.offsetTop + dimensions.clientHeight,
            left: dimensions.offsetLeft,
            width: `${dimensions.clientWidth}px`,
            height: `${dimensions.clientHeight}px`,
            transform: 'translateY(-100%) scale(1)',
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
                className={cn(
                    'sm:col-span-8 sm:row-span-4',
                    'md:col-span-5 md:row-span-4',
                    'lg:col-span-5 lg:row-span-4',
                )}
                asRef={true}
                ref={ref}
            >
                Intro
            </MotionWrapper>

            <MotionWrapper
                className="z-40 bg-[#E7F0DC] font-playfair text-[#729762] leading-tight p-6"
                animation={animation}
            >
                <motion.div
                    className="absolute top-3 right-4 w-20 h-20"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <img
                        src="/sym.png"
                        alt="Symbol"
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                <div className="absolute bottom-0 left-0 p-6 text-4xl font-medium">
                    Turning <em>imagination</em>
                    <br />
                    into interactive reality.
                    
                    <div className="mt-4 w-full space-y-2 overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#E7F0DC] via-[#E7F0DC]/70 to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#E7F0DC] via-[#E7F0DC]/70 to-transparent z-10 pointer-events-none" />
                        
                        <motion.div
                            className="flex gap-2"
                            animate={{
                                x: ['-33.33%', '-66.66%'],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            {seamlessTechStack.map((tech, index) => (
                                <motion.div
                                    key={`line1-${tech}-${index}`}
                                    className="px-2 py-1 rounded-md bg-[#729762]/20 border-2 border-[#729762]/40 text-xs whitespace-nowrap"
                                    whileHover={{
                                        backgroundColor: '#729762',
                                        color: '#F5F5DC',
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </motion.div>
                        
                        <motion.div
                            className="flex gap-2"
                            animate={{
                                x: ['-66.66%', '-33.33%'],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            {seamlessLine2TechStack.map((tech, index) => (
                                <motion.div
                                    key={`line2-${tech}-${index}`}
                                    className="px-2 py-1 rounded-md bg-[#729762]/20 border-2 border-[#729762]/40 text-xs whitespace-nowrap"
                                    whileHover={{
                                        backgroundColor: '#729762',
                                        color: '#F5F5DC',
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </MotionWrapper>
        </>
    );
}

export default Intro;