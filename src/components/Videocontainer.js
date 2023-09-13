import React, { useEffect } from 'react'
import { VIDEO_API } from '../utils/constant'

const Videocontainer = () => {
  useEffect(() => {
    getvideos()
  },[])
  
  const getvideos = async () => {
    try {
      const data = await fetch(VIDEO_API);
    const json = await data.json()
    console.log(json);
    } catch {
      console.log("erro aa gai bhai");
  }
  }

  return (
    <div>Videocontainer</div>
  )
}

export default Videocontainer