interface BoardTextProps {
  text: string;
}

const BoardText = ({ text }: BoardTextProps) => {
  return (
    <div className='bg-[grey] w-40 h-10 flex items-center justify-center'>
      <p className='font-bold'>{text}</p>
    </div>
  );
};

export default BoardText;
