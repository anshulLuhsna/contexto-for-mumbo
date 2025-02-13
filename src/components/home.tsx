// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='text-center mt-8'>CONTEXTO</h1>
      <Link to="/game" className='mt-8 text-4xl'>PLAY</Link>
    </div>
  );
};

export default Home;

