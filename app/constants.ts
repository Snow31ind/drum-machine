import { IDrumPad } from './types/drum';

export type BankMode = 'on' | 'off';

export interface DrumPadSet {
  name: string;
  drumPads: IDrumPad[];
}

export const drumPadSets: Record<BankMode, DrumPadSet> = {
  off: {
    name: 'Heater Kit',
    drumPads: [
      {
        name: 'Heater 1',
        label: 'Q',
        source: '/drums/bank-off/Heater-1.mp3',
      },
      {
        name: 'Heater 2',
        label: 'W',
        source: '/drums/bank-off/Heater-2.mp3',
      },
      {
        name: 'Heater 3',
        label: 'E',
        source: '/drums/bank-off/Heater-3.mp3',
      },
      {
        name: 'Heater 4',
        label: 'A',
        source: '/drums/bank-off/Heater-4_1.mp3',
      },
      {
        name: 'Clap',
        label: 'S',
        source: '/drums/bank-off/Heater-6.mp3',
      },
      {
        name: 'Open HH',
        label: 'D',
        source: '/drums/bank-off/Dsc_Oh.mp3',
      },
      {
        name: "Kick n' Hat",
        label: 'Z',
        source: '/drums/bank-off/Kick_n_Hat.mp3',
      },
      {
        name: 'Kick',
        label: 'X',
        source: '/drums/bank-off/RP4_KICK_1.mp3',
      },
      {
        name: 'Closed HH',
        label: 'C',
        source: '/drums/bank-off/Cev_H2.mp3',
      },
    ],
  },
  on: {
    name: 'Smooth Piano Kit',
    drumPads: [
      {
        name: 'Chord 1',
        label: 'Q',
        source: '/drums/bank-on/Chord_1.mp3',
      },
      {
        name: 'Chord 2',
        label: 'W',
        source: '/drums/bank-on/Chord_2.mp3',
      },
      {
        name: 'Chord 3',
        label: 'E',
        source: '/drums/bank-on/Chord_3.mp3',
      },
      {
        name: 'Shaker',
        label: 'A',
        source: '/drums/bank-on/Give_us_a_light.mp3',
      },
      {
        name: 'Open HH',
        label: 'S',
        source: '/drums/bank-on/Dry_Ohh.mp3',
      },
      {
        name: 'Closed HH',
        label: 'D',
        source: '/drums/bank-on/Bld_H1.mp3',
      },
      {
        name: 'Punchy Kick',
        label: 'Z',
        source: '/drums/bank-on/punchy_kick_1.mp3',
      },
      {
        name: 'Side Stick',
        label: 'X',
        source: '/drums/bank-on/side_stick_1.mp3',
      },
      {
        name: 'Snare',
        label: 'C',
        source: '/drums/bank-on/Brk_Snr.mp3',
      },
    ],
  },
};
