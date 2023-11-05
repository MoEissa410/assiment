"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CustomButton, Modal } from "@components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/store";
import { openBackdrop } from "@redux/features/backdropSlice";
function EmptyState() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="absolute top-[72px] left-[319px] w-[1193px] h-[910px] overflow-hidden flex flex-col items-start justify-start p-8 box-border">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start pt-[140px] px-0 pb-0 gap-[32px]">
        <Image
          width={20}
          height={20}
          className="relative w-16 h-16 overflow-hidden shrink-0"
          alt=""
          src="/buildings2-1.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[16px]">
          <div className="relative leading-[27px] font-semibold">
            No accounts
          </div>
          <div className="relative text-base leading-[24px] text-gray-600 text-center">
            <p className="m-0">Add a new account to start monitoring</p>
            <p className="m-0">them for KYC compliance purposes</p>
          </div>
        </div>
        <div className="rounded flex flex-row items-center justify-center py-3 px-6 gap-[8px]">
          <CustomButton
            containerStyles="relative leading-[27px] font-medium  bg-y-500"
            leftIcon="./Group.svg"
            handleClick={() => {
              dispatch(openBackdrop());
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EmptyState;
