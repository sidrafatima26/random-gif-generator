import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('');
  
  const {gif,loading,fetchData} = useGif(tag);

  function handleClick(){
    fetchData(tag);
  }

  function handleChange(event){
    setTag(event.target.value);
  }

  return (
    <div className='flex flex-col items-center gap-5 p-[15px] w-1/2  bg-blue-400 rounded-lg border border-black'>
      <h1 className='uppercase font-bold text-3xl underline'> A Random {tag} GIF </h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt='randomgifs'/>)
      }
      <input value={tag} className='w-10/12 p-2 text-xl rounded-lg bg-blue-100 text-center' onChange={handleChange}></input>
      <button onClick={handleClick} className='w-10/12 p-2 text-xl rounded-lg bg-green-200'> Generate GIFS </button>
    </div>

  );
}
