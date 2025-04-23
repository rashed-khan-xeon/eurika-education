// components/Chip.tsx

import React from 'react';
import clsx from 'clsx';

type ChipProps = {
    label: string;
    color?: 'blue' | 'green' | 'yellow' | 'gray' | 'red' | 'green';
    className?: string;
};

const colorStyles = {
    blue: 'bg-blue-600 text-white',
    green: 'bg-green-600 text-white',
    yellow: 'bg-yellow-500 text-white',
    gray: 'bg-gray-500 text-white',
    red: 'bg-red-600 text-white',
};

const Chip: React.FC<ChipProps> = ({ label, color = 'gray', className }) => {
    return (
        <span
            className={clsx(
                'text-xs px-3 py-1 rounded-full font-medium shadow inline-block',
                colorStyles[color],
                className
            )}
        >
            {label}
        </span>
    );
};

export default Chip;
