import { cn } from './utils/cn';
import { useEffect, useRef, useState } from 'react';

import About from './components/About';
import Avatar from './components/Avatar';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Socials from './components/Socials';
import Work from './components/Work';

function App() {
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

    const avatarAnimation = {
        initial: {
            width: '400px',
            height: '600px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        animate: {
            width: dimensions.clientWidth,
            height: dimensions.clientHeight,
            top: dimensions.offsetTop,
            left: dimensions.offsetLeft,
            transform: 'translate(0%, 0%)',
        },
        transition: {
            width: { duration: 0.6 },
            height: { duration: 0.6 },
            top: { delay: 0.8, duration: 0.4 },
            left: { delay: 0.8, duration: 0.4 },
            transform: { delay: 0.8, duration: 0.4 },
            opacity: { delay: 0.6 },
        },
    };

    const scaleAnimation = {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 1,
        },
        transition: {
            duration: 1,
        },
    };

    return (
        <div
            className={cn(
                'h-screen w-full gap-4 bg-[#445538] p-6',
                'sm:grid sm:h-full sm:grid-cols-12 sm:grid-rows-8',
                'flex flex-col',
            )}
        >
            <Navigation/>
            <Intro />
            <Avatar asRef ref={ref} />
            <Avatar animation={avatarAnimation} />
            <Work />
            <About />
            <Contact />
            <Socials />
        </div>
    );
}

export default App;
