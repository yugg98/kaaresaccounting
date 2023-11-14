"use client";
import React, { useState } from "react";
import Leadform from "../LeadFormFlow";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { Popover } from "@headlessui/react";

const Buttonchat = () => {
  // const [data, setData] = useState(true);
  // className={data?"hidden":"none"}
  // onClick={()=>setData(data?false:true)}
  return (
    <div>
    <Popover >
      <Popover.Button className="fixed z-[10999] bottom-6 right-6 md:bottom-10 md:right-8 bg-black w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-700 hover:drop-shadow-2xl hover:scale-95 transition-all ease-in-out duration-150">
        <ChatBubbleLeftEllipsisIcon className="w-8 h-8" />
      </Popover.Button>
      <Popover.Panel focus={true}>
        <Leadform />
      </Popover.Panel>
      
    </Popover>
    </div>
  );
};

export default Buttonchat;
