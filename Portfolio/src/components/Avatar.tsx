import { forwardRef, RefObject } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

const commonAvatarProps = cn(
    'flex items-center justify-center text-lg font-semibold',
    'rounded-3xl bg-secondary',
    'md:col-span-3 md:row-span-4',
    'sm:col-span-4 sm:row-span-4 sm:aspect-auto',
    'aspect-square min-h-36 overflow-hidden',
);

const avatarProps = cva(commonAvatarProps, {
    variants: {
        variant: {
            default: 'rounded-3xl bg-secondary absolute z-10',
            ref: 'w-full h-full rounded-3xl opacity-0',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

const Avatar = forwardRef<
    HTMLDivElement,
    { animation?: object; asRef?: boolean }
>(({ animation, asRef }, ref) => {
    if (asRef) {
        return (
            <div
                className={avatarProps({ variant: 'ref' })}
                ref={ref as RefObject<HTMLDivElement>}
            />
        );
    } else {
        return (
            <motion.div {...animation} className={avatarProps()}>
                                <img
                    src="/avatar.jpg" // or '/avatar.jpg' based on your file
                    alt="Avatar"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        );
    }
});

export default Avatar;
