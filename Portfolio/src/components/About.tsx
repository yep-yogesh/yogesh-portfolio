import React, { useEffect, useRef, useState } from 'react';
import MotionWrapper from './MotionWrapper';
import { cn } from '../utils/cn';
import { FaLaptopCode, FaGraduationCap, FaTrophy } from 'react-icons/fa';

function About() {
    const ref = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({
        offsetTop: 0,
        offsetLeft: 0,
        clientWidth: 0,
        clientHeight: 0,
    });
    const [activeTab, setActiveTab] = useState<'about' | 'education' | 'achievements'>('about');
    const [hasOverflow, setHasOverflow] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);
        if (ref.current) {
            const { offsetTop, offsetLeft, clientWidth, clientHeight } = ref.current;
            setDimensions({ offsetTop, offsetLeft, clientWidth, clientHeight });
        }
    }, [ref]);

    useEffect(() => {
        if (contentRef.current && isMounted) {
            const checkOverflow = () => {
                const element = contentRef.current;
                if (element) {
                    // Add small delay to ensure accurate measurement
                    setTimeout(() => {
                        setHasOverflow(element.scrollHeight > element.clientHeight);
                    }, 50);
                }
            };
            
            checkOverflow();
            window.addEventListener('resize', checkOverflow);
            
            return () => {
                window.removeEventListener('resize', checkOverflow);
            };
        }
    }, [activeTab, isMounted]);

    const handleTabClick = (tab: 'about' | 'education' | 'achievements') => {
        setActiveTab(tab);
    };

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

    const description = (
        <div className="text-[#729762] font-quicksand text-[15px] leading-tight">
            <span className="font-extrabold">Yogesh</span> is a full-stack developer and UI/UX enthusiast based in Chennai, passionate about crafting real-time, interactive web apps with clean, scalable code and thoughtful design.
            He combines modern tech stacks with intuitive UI to deliver fast, seamless, and user-centered digital experiences.
        </div>
    );

    const edu = (
        <div className="text-[#729762] font-quicksand text-[15px] leading-tight">
            <div className="flex justify-between mb-1">
                <span className="font-extrabold">B Tech CSE WIP</span>
                <span className="font-bold mr-5">2024-28</span>
            </div>
            Pursuing B.Tech at <span className="font-bold">Vels Institute of Science, Technology and Advanced Studies</span>, Chennai campus — a forward-thinking curriculum that blends core CS with real-world product engineering and internship oppurtunities.
        </div>
    );

    const achie = (
        <div className="text-[#729762] font-quicksand text-[15px] leading-tight">
            <span className="font-bold">Acheivements</span><br />
            - Solved <span className="font-bold">150+</span> DSA problems on LeetCode & HackerRank.<br />
            - Ranked <span className="font-bold">1st</span> in SquadFusion Hackathon (Sep 2024) <br />- Earned IBM Web Dev Certification (Jun 2024). <br />- PromtRepo Hackathon Finalist – 70+ teams (Feb 2025)
        </div>
    );

    const content = {
        about: description,
        education: edu,
        achievements: achie
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
                About
            </MotionWrapper>
            <MotionWrapper className="z-40 bg-[#E7F0DC]" animation={animation}>
                <div className="absolute top-7 left-6">
                    <div className="flex gap-4">
                        <button 
                            onClick={() => handleTabClick('about')}
                            className={`w-12 h-12 rounded-full bg-[#729762] flex items-center justify-center transition-all duration-300 ${activeTab === 'about' ? 'ring-4 ring-[#729762] ring-opacity-50' : ''}`}
                        >
                            <FaLaptopCode className="text-[#E7F0DC] text-xl" />
                        </button>
                        <button 
                            onClick={() => handleTabClick('education')}
                            className={`w-12 h-12 rounded-full bg-[#729762] flex items-center justify-center transition-all duration-300 ${activeTab === 'education' ? 'ring-4 ring-[#729762] ring-opacity-50' : ''}`}
                        >
                            <FaGraduationCap className="text-[#E7F0DC] text-xl" />
                        </button>
                        <button 
                            onClick={() => handleTabClick('achievements')}
                            className={`w-12 h-12 rounded-full bg-[#729762] flex items-center justify-center transition-all duration-300 ${activeTab === 'achievements' ? 'ring-4 ring-[#729762] ring-opacity-50' : ''}`}
                        >
                            <FaTrophy className="text-[#E7F0DC] text-xl" />
                        </button>
                    </div>
                </div>

                <div 
                    ref={contentRef}
                    className={`absolute top-28 left-6 right-6 bottom-6 ${hasOverflow ? 'overflow-y-auto' : 'overflow-hidden'}`}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="h-full">
                        {content[activeTab]}
                    </div>
                </div>
            </MotionWrapper>
        </>
    );
}

export default About;