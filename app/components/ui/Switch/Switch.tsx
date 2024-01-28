import React from 'react';

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  onChange: (checked: boolean) => void;
}

const Switch = ({
  label,
  checked,
  onChange,
  disabled = false,
}: SwitchProps) => {
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    onChange(newValue);
  };

  return (
    <div>
      <p className='font-bold'>{label}</p>
      <label className='p-1 inline-block bg-black w-[50px] h-[20px]'>
        <input
          type='checkbox'
          disabled={disabled}
          checked={checked}
          onChange={handleToggle}
          className='hidden peer'
        />
        <span className="absolute before:absolute before:content-[''] before:transition-transform before:w-[21px] before:h-[12px] before:bg-gray-500 peer-checked:before:translate-x-[21px] peer-checked:before:bg-[blue]"></span>
      </label>
    </div>
  );
};

export default Switch;
