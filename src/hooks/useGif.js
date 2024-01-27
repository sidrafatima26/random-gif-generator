import React,{useEffect, useState} from 'react';
import axios from 'axios';
//import Spinner from './Spinner';
//import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function useGif(tag){
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData(tag){
    setLoading(true);
    const {data} = await axios.get(tag ? tagUrl : randomUrl);
    const imgSource = data.data.images.downsized_large.url;
    console.log(imgSource);
    setGif(imgSource);
    setLoading(false);
  }

  useEffect( ()=> {
    fetchData();
  }, [] )

  return{gif, loading, fetchData};

}
