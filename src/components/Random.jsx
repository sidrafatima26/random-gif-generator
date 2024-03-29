import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {

  const {gif, loading, fetchData} = useGif();
  
  function handleClick(){
    fetchData();
  }

  return (
    <div className='flex flex-col items-center gap-5 p-[15px] w-1/2  bg-green-400 rounded-lg border border-black'>
      <h1 className='uppercase font-bold text-3xl underline'> A Random GIF </h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt='randomgifs'/>)
      }
      
      <button onClick={handleClick} className='w-10/12 p-2 text-xl rounded-lg bg-green-200'> Generate GIFS </button>
    </div>  


  );
}
