import React from 'react';
import FreeCodeCampIcon from '../ui/icons/FreeCodeCampIcon';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div {...props} className={`${className}`}>
      <p className='font-bold italic inline'>FFC&nbsp;</p>
      <FreeCodeCampIcon className='inline-block font-bold italic' />
    </div>
  );
};

export default Logo;
