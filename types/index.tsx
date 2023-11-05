import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title?: string;
  leftIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface ModalProps {
  isVisible: boolean;
}
