import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constant";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap justify-evenly">
      {videos.map((el) => (
        <Link to={"/watch?v=" + el.id}>
          <Videocard info={el} key={el.id} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
