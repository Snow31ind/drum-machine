'use client';

import { BankMode, drumPadSets } from '@/app/constants';
import { IDrumPad } from '@/app/types/drum';
import React, { useState } from 'react';
import Range from '../ui/Range/Range';
import Switch from '../ui/Switch/Switch';
import BoardText from './BoardText';
import DrumPad from './DrumPad';
import Logo from './Logo';

const DrumMachine = () => {
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [bankMode, setBankMode] = useState<BankMode>('off');
  const [volume, setVolume] = useState(0.3);
  const [boardText, setBoardText] = useState('');

  const drumPadSet = drumPadSets[bankMode];
  const drumPads = drumPadSet.drumPads;

  const handleClickDrumPad = (drumPad: IDrumPad) => {
    if (isPowerOn) {
      setBoardText(drumPad.name);
    }
  };

  const handleTogglePower = (value: boolean) => {
    if (!value) {
      setBoardText('');
    }

    setIsPowerOn(value);
  };

  const handleBankModeChange = (value: boolean) => {
    if (!value) {
      setBankMode('off');
      setBoardText(drumPadSets['off'].name);
    } else {
      setBankMode('on');
      setBoardText(drumPadSets['on'].name);
    }
  };

  const handleChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setBoardText(`Volume: ${Math.round(newVolume * 100)}`);
    setVolume(newVolume);
  };

  const handleStopVolumeChange = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setBoardText('');
  };

  return (
    <div className='flex w-[600px] max-w-[600px] border-[5px] border-[orange] bg-[#b3b3b3]'>
      <div className='flex-1 grid grid-cols-3 grid-rows-3 gap-2 p-5'>
        {drumPads.map((drumPad) => (
          <DrumPad
            key={drumPad.label}
            drumPad={drumPad}
            muted={!isPowerOn}
            volume={volume}
            onClick={handleClickDrumPad}
          />
        ))}
      </div>
      <div className='flex-1 p-3'>
        <div className='text-right'>
          <Logo />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Switch
            label='Power'
            checked={isPowerOn}
            onChange={handleTogglePower}
          />
          <BoardText text={boardText} />
          <Range
            min={0}
            max={1}
            step={0.01}
            disabled={!isPowerOn}
            value={volume}
            onChange={handleChangeVolume}
            onMouseUp={handleStopVolumeChange}
          />
          <Switch
            disabled={!isPowerOn}
            label='Bank'
            checked={bankMode === 'on'}
            onChange={handleBankModeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
