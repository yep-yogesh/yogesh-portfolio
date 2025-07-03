import { forwardRef, RefObject } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

const commonProps = cn(
    'flex items-center justify-center text-lg font-semibold',
    `rounded-3xl`,
    'overflow-hidden',
);

const props = () =>
    cva(commonProps, {
        variants: {
            variant: {
                default: `rounded-3xl absolute`,
                ref: 'w-full h-full rounded-3xl opacity-0',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    });

const MotionWrapper = forwardRef<
    HTMLDivElement,
    {
        animation?: object;
        asRef?: boolean;
        className?: string;
        children?: React.ReactNode;
    }
>(({ animation, asRef = false, className, children }, ref) => {
    return asRef ? (
        <div
            className={props()({ variant: 'ref' }) + ` ${className}`}
            ref={ref as RefObject<HTMLDivElement>}
        />
    ) : (
        <motion.div {...animation} className={props()() + ` ${className}`}>
            {children}
        </motion.div>
    );
});

export default MotionWrapper;
