import React, { useEffect } from "react";
import Chatmessae from "./Chatmessae";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatslice";
import { generateRandomnumber, randommessage } from "../utils/helper";

const Livechat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const t = setInterval(() => {
      //api poling

      dispatch(
        addmessage({
          name: generateRandomnumber(),
          message: randommessage(20)
        })
      );
    }, 2000);

    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <div>
        <h1 className=" w-[406px] h-10 text-left pt-2 pl-3 bg-white rounded-t-lg">
        Top chat
      </h1>
      </div>

      <div className="flex flex-col-reverse">
        {chatMessages.map((el, index) => (
          <Chatmessae key={index} name={el.name} message={el.message} />
        ))}
  
      </div>
    </div>
  );
};

export default Livechat;
