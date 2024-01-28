import { IDrumPad } from '@/app/types/drum';
import React, { useEffect, useRef } from 'react';

interface DrumPadProps
  extends Omit<React.AudioHTMLAttributes<HTMLAudioElement>, 'onClick'> {
  drumPad: IDrumPad;
  volume?: number;
  onClick?: (drumPad: IDrumPad) => void;
}

const DrumPad = ({ drumPad, onClick, volume = 1, ...props }: DrumPadProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudio = () => {
    onClick && onClick(drumPad);

    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div
      onClick={handlePlayAudio}
      className='flex items-center justify-center p-5 bg-[grey] shadow-[3px_3px_5px_0px_black] rounded cursor-pointer'>
      <audio {...props} ref={audioRef} src={drumPad.source}></audio>
      <p className='font-bold'>{drumPad.label}</p>
    </div>
  );
};

export default DrumPad;
