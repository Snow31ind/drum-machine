import DrumMachine from './components/DrumMachine/DrumMachine';

export default function Home() {
  return (
    <main className='h-full'>
      <div id='root' className='h-full flex items-center justify-center'>
        <DrumMachine />
      </div>
    </main>
  );
}
