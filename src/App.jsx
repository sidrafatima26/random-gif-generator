import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';
import Spinner from './components/Spinner';

export default function App() {
  return (
    <div className='overflow-x-hidden w-full h-screen flex flex-col background '>
      <h1 className='w-11/12 mx-auto text-center mt-[40px] ml-16 font-bold px-10 py-2 text-4xl text-black bg-white rounded-md '>RANDOM GIFS</h1>
      <div className='w-full flex flex-col items-center gap-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
