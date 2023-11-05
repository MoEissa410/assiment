"use client";
import React from "react";
import Image from "next/image";
export default function SideBar() {
  return (
    <div className="absolute top-[0px] left-[0px] bg-beige-50 box-border w-[319px] h-full overflow-hidden flex flex-col items-center justify-start border-r-[1px] border-solid border-gray-200">
      <div className="  self-stretch bg-base-white box-border h-[72px] flex flex-row items-center justify-start py-4 px-6 text-13xl border-b-[1px] border-solid border-gray-200">
        <div className=" hover:cursor-pointer relative font-semibold">BORD</div>
      </div>
      <div className="self-stretch flex-1  overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start py-4 px-0 border-b-[1px] border-solid border-gray-200">
          <div className="hover:cursor-pointer self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[16px]">
            <Image
              width={20}
              height={20}
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/home2-1.svg"
            />
            <div className="relative text-lg leading-[27px] font-medium font-button-large text-gray-900 text-left">
              Home
            </div>
          </div>
          <div className="hover:cursor-pointer  self-stretch bg-beige-200 flex flex-row items-center justify-start py-4 px-6 gap-[16px]">
            <Image
              width={20}
              height={20}
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/row-vertical 1.svg"
            />
            <div className="relative text-lg leading-[27px] font-medium font-button-large text-gray-900 text-left">
              Accounts
            </div>
          </div>
          <div className=" hover:cursor-pointer self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[16px]">
            <Image
              width={20}
              height={20}
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/sliderhorizontal11.svg"
            />
            <div className="relative text-lg leading-[27px] font-medium font-button-large text-gray-900 text-left">
              Workspaces
            </div>
          </div>
          <div className=" hover:cursor-pointer self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[16px]">
            <Image
              width={20}
              height={20}
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/useroctagon-1.svg"
            />
            <div className="relative text-lg leading-[27px] font-medium font-button-large text-gray-900 text-left">
              Account
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start px-0 py-4 border-t-[1px] border-solid border-gray-200">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className=" hover:cursor-pointer self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[16px]">
            <Image
              width={20}
              height={20}
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/lifebuoy-1.svg"
            />
            <div className="relative text-lg leading-[27px] font-medium font-button-large text-gray-900 text-left">
              Support
            </div>
          </div>
          <div className=" hover:cursor-pointer self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[16px]">
            <Image
              width={20}
              height={20}
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/logout1-2.svg"
            />
            <div className="relative text-lg leading-[27px] font-medium font-button-large text-gray-900 text-left">
              Log out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
