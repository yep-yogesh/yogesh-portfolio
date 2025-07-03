import React, { useRef, useEffect, useState } from 'react';
import MotionWrapper from './MotionWrapper';
import { cn } from '../utils/cn';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Guessync - Real-time music guessing game.',
    description: 'A fast-paced real-time game where players guess songs from a Spotify playlist with leaderboard, chat, and AI hints.',
    image: '/guessync.png',
    url: 'https://guessync.netlify.app',
    isLive: true
  },
  {
    title: 'Cryptiq - Futuristic crypto price converter.',
    description: 'A sleek, high-performance crypto converter with live pricing, intuitive UI, and instant currency swaps.',
    image: '/Cryptiq.png',
    url: '#',
    isLive: false
  },
  {
    title: "Cookin'",
    description: '',
    image: '/imagee.png',
    url: '#',
    isLive: false
  },
];

function Work() {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({
    offsetTop: 0,
    offsetLeft: 0,
    clientWidth: 0,
    clientHeight: 0,
  });

  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleTitleClick = (e, url, index) => {
    if (activeIndex === index && projects[index].isLive) {
      window.open(url, '_blank');
    } else {
      e.stopPropagation();
      setActiveIndex(index);
    }
  };

  return (
    <>
      <MotionWrapper
        className={cn(
          'md:order-none md:col-span-4 md:row-span-6',
          'order-6 sm:col-span-12 sm:row-span-4'
        )}
        asRef={true}
        ref={ref}
      >
        Work
      </MotionWrapper>

      <MotionWrapper 
        animation={animation} 
        className="z-40 bg-[#E7F0DC] overflow-hidden"
      >
        <div className="h-full flex flex-col">
          {projects.map((proj, index) => (
            <div
              key={index}
              className={cn(
                'transition-all duration-300 ease-in-out overflow-hidden',
                activeIndex === index ? 'flex-grow' : 'h-14 flex-shrink-0'
              )}
              onClick={() => {
                if (index !== activeIndex) setActiveIndex(index);
              }}
            >
              {index !== 0 && (
                <div className="h-[1px] bg-[#729762]" />
              )}

              <div className="px-6 py-4 flex justify-between items-center">
                <h3 
                  className={cn(
                    "text-[#729762] font-quicksand text-lg font-bold",
                    "cursor-pointer"
                  )}
                  onClick={(e) => handleTitleClick(e, proj.url, index)}
                >
                  {proj.title}
                </h3>
                {activeIndex === index && (
                  <a 
                    href={proj.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "text-[#729762] text-xl transition-colors",
                      proj.isLive ? "hover:text-[#5a7a4d]" : "opacity-50 cursor-default"
                    )}
                    onClick={(e) => {
                      if (!proj.isLive) e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>

              {activeIndex === index && (
                <div className="relative h-[calc(100%-56px)] w-full p-4 pt-0">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 overflow-hidden">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="min-h-full min-w-full object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
                      />
                    </div>
                    <div className="absolute inset-0 bg-[#729762] bg-opacity-0 hover:bg-opacity-80 transition duration-300 flex flex-col items-center justify-center p-6 rounded-lg opacity-0 hover:opacity-100">
                      <p className="text-white text-sm text-center mb-2">
                        {proj.description}
                      </p>
                      {proj.isLive ? (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-[#729762] text-sm rounded-lg font-medium hover:bg-opacity-90 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Visit Page
                        </a>
                      ) : (
                        <button
                          className="px-4 py-2 bg-white text-[#729762] text-sm rounded-lg font-medium opacity-50 cursor-default"
                          disabled
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </MotionWrapper>
    </>
  );
}

export default Work;