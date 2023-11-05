"use client";

import Image from "next/image";

import { CustomButtonProps } from "@types";

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  leftIcon,
  handleClick,
}: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`relative rounded  w-full flex   py-3 px-16 box-border gap-[8px] text-left text-lg text-gray-900 font-button-large ${containerStyles}`}
    onClick={handleClick}
  >
    {leftIcon && (
      <div className="flex   relative right-[33px] w-6 h-6 overflow-hidden shrink-0">
        <Image src={leftIcon} alt="arrow_left" fill />
      </div>
    )}
    {title && <span className={`flex-1 ${textStyles}`}>{title}</span>}
  </button>
);

export default Button;
