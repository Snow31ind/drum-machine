import React from 'react';

interface FreeCodeCampIconProps extends React.HTMLAttributes<HTMLElement> {}

const FreeCodeCampIcon = ({ className, ...props }: FreeCodeCampIconProps) => {
  return <i {...props} className={`fa fa-free-code-camp ${className}`}></i>;
};

export default FreeCodeCampIcon;
