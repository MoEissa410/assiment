"use client";
import React, { ChangeEvent, useState } from "react";
import { AppDispatch } from "../redux/store";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { closeBackdrop } from "@redux/features/backdropSlice";
import { CustomButton } from "@components";
import Link from "next/link";
const ModalDialog = () => {
  const [selectedOption, setSelectedOption] = useState<string>("private");
  const [selectedFruit, setSelectedFruit] = useState<string>("");
  //
  const dispatch = useDispatch<AppDispatch>();
  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleFruitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <div className=" dialog absolute top-[calc(50%_-_311px)] left-[calc(50%_-_320px)] rounded-2xl bg-base-white shadow-[0px_126px_35px_rgba(0,_0,_0,_0),_0px_81px_32px_rgba(0,_0,_0,_0.01),_0px_46px_27px_rgba(0,_0,_0,_0.05),_0px_20px_20px_rgba(0,_0,_0,_0.09),_0px_5px_11px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] w-[640px] overflow-hidden flex flex-col items-start justify-start p-8 box-border gap-[32px]">
      <div className="self-stretch flex flex-row items-center justify-between pt-0 px-0 pb-6 border-b-[1px] border-solid border-gray-200">
        <div className="relative font-semibold">Add a new account</div>
        <Image
          width={20}
          height={20}
          className="relative w-6 h-6 overflow-hidden shrink-0 hover:cursor-pointer"
          alt=""
          src="e-remove 1.svg"
          onClick={() => dispatch(closeBackdrop())}
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[32px] text-base font-body-default-regular">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <input
            type="radio"
            className="relative rounded-xl bg-base-white box-border w-5 h-5 border-[1px] border-solid border-gray-300"
            checked={selectedOption === "private"}
            onChange={() => handleRadioChange("private")}
          />
          <label className="relative leading-[24px]">Private person</label>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <input
            id="company"
            type="radio"
            className="relative rounded-xl bg-base-white box-border w-5 h-5 border-[6px] border-solid border-turquoise-500"
            checked={selectedOption === "compony"}
            onChange={() => handleRadioChange("compony")}
          />
          <label htmlFor="company" className="relative leading-[24px]">
            Company
          </label>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-6 gap-[40px] text-sm text-gray-600">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch relative leading-[21px] text-lg">
            Country of registration
          </div>
          <div className="self-stretch rounded bg-base-white flex flex-row items-center justify-start py-2.5 px-4 gap-[16px] text-base text-gray-900 border-[1px] border-solid border-gray-300">
            <select
              className="flex-1 relative leading-[24px] outline-none text-lg"
              id="fruits"
              name="fruits"
              onChange={handleFruitChange}
              value={selectedFruit}
            >
              <option value="">Value</option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
              <option value="orange">Orange</option>
              <option value="strawberry">Strawberry</option>
            </select>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch rounded bg-base-white overflow-hidden flex flex-col items-start justify-center py-2.5 px-4 text-lg text-gray-400 border-[1px] border-solid border-gray-300">
            <input
              type="text"
              placeholder="Search company"
              className=" w-full h-full outline-none relative leading-[24px]"
            />
          </div>
        </div>
        <div className="self-stretch rounded bg-lg-white overflow-hidden flex flex-col items-start justify-center py-2.5 px-4 text-base text-gray-400 border-[1px] border-solid border-gray-300">
          <input
            type="text"
            className="outline-none self-stretch rounded bg-base-white overflow-hidden "
          />
        </div>
      </div>
      <div className="rounded flex flex-row items-center justify-center py-3 px-6 gap-[8px]">
        <Link href="/accounts">
          <CustomButton
            containerStyles="relative leading-[27px] font-medium  bg-y-500"
            leftIcon="./Group.svg"
            handleClick={() => {
              dispatch(closeBackdrop());
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default ModalDialog;
