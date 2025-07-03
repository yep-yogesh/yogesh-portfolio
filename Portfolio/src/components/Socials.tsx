import React, { useEffect, useRef, useState } from 'react';
import MotionWrapper from './MotionWrapper';
import { cn } from '../utils/cn';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaFigma,
  FaCode,
} from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';


function Socials() {
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

  const socials = [
    { icon: <FaGithub size={28} />, name: 'GitHub', url: 'https://github.com/yep-yogesh' },
    { icon: <FaLinkedin size={28} />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/yogeshhhh/' },
    { icon: <FaFigma size={28} />, name: 'Figma', url: 'https://www.figma.com/@yogesh73' },
    { icon: <FaCode size={28} />, name: 'LeetCode', url: 'https://leetcode.com/u/yogeshhhhhh/' },
    { icon: <FaInstagram size={28} />, name: 'Instagram', url: 'https://www.instagram.com/yogeshh.png' }
  ];

  return (
    <>
      <MotionWrapper
        className={cn(
          'md:order-none md:col-span-4 md:row-span-1',
          'order-7 sm:col-span-12 sm:row-span-1'
        )}
        asRef={true}
        ref={ref}
      >
        Socials
      </MotionWrapper>

      <MotionWrapper
        className="z-40 bg-[#445538] flex items-center justify-center p-4"
        animation={animation}
      >
        <div className="flex gap-3 w-full justify-center flex-wrap">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className={cn(
                'group aspect-square w-16 rounded-[35%] shadow-md cursor-pointer',
                'transition-all duration-300 transform',
                'bg-[#E7F0DC] hover:bg-[#729762] relative overflow-hidden',
                'flex items-center justify-center'
              )}
            >
              <span className="text-[#729762] group-hover:text-[#E7F0DC] transition-all duration-300">
                {social.icon}
              </span>
            </a>
          ))}
          
          {/* Download Resume Button */}
          <a
            href="/Yogesh-Resume.pdf"
            download
            title="Download Resume"
            className={cn(
              'group aspect-square w-16 rounded-[35%] shadow-md cursor-pointer',
              'transition-all duration-300 transform',
              'bg-[#E7F0DC] hover:bg-[#729762] relative overflow-hidden',
              'flex items-center justify-center'
            )}
          >
            <span className="text-[#729762] group-hover:text-[#E7F0DC] transition-all duration-300">
              <FiDownload size={28} />
            </span>
          </a>
        </div>
      </MotionWrapper>
    </>
  );
}

export default Socials;