import React from 'react';

interface RangeProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Range = ({ type, className, ...props }: RangeProps) => {
  return (
    <input
      {...props}
      type='range'
      className={`w-full bg-transparent appearance-none [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-sm [&::-moz-range-thumb]:bg-[blue] [&::-moz-range-thumb]:w-1.5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-track]:bg-[rgb(16,16,16)] [&::-moz-range-track]:shadow-[2px_2px_5px_0px_black] [&::-moz-range-track]:rounded [&::-moz-range-track]:h-1.5 ${className}`}
    />
  );
};

export default Range;
