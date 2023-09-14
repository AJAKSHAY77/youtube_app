import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/appslice'
import { useSearchParams } from 'react-router-dom'

const Watchpage = () => {
    const [searchparam] = useSearchParams()
    console.log(searchparam.get("v"));
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closemenu())
    },[])
  return (
    <div className="px-5">
      <iframe
        width="1100"
        height="600"
        src={"https://www.youtube.com/embed/"+searchparam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Watchpage