"use client";

import { AppDispatch } from "@redux/store";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const BackDrop = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  // use this to close if i click out
  useEffect(() => {}, []);
  // dialog css
  return (
    <div className="relative w-full h-full overflow-hidden text-left text-5xl text-gray-900 font-button-large ">
      <div className="absolute top-[0px] left-[0px] bg-darkslategray  [backdrop-filter:blur(4px)] w-[1512px] h-[982px] overflow-hidden" />
      {children}
    </div>
  );
};

export default BackDrop;
