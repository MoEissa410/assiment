"use client";
import React from "react";
import { CustomButton } from "@components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/store";
import { closeBackdrop, openBackdrop } from "@redux/features/backdropSlice";
export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="absolute top-[0px] left-[319px] box-border w-[1129px] h-[72px] flex flex-row items-center justify-between py-0 px-8 text-5xl border-b-[1px] border-solid border-gray-200">
      <div className=" font-semibold">Monitored accounts</div>
      <div className="flex flex-row items-start justify-start text-lg ">
        <div className="rounded flex flex-row items-center justify-center ">
          <CustomButton
            leftIcon="./Group.svg"
            textStyles="relative font-medium"
            containerStyles="border-[1px] border-solid border-gray-300"
            handleClick={() => dispatch(openBackdrop())}
          />
        </div>
      </div>
    </div>
  );
}
