import React, { ElementType, memo } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

interface ArrowButtonProps {
  btn: "prev" | "next";
  disabled: boolean;
  //   icon: ElementType;
  direction: "left" | "right";
  onclick: (direction: "left" | "right") => void;
}
const ArrowButton = memo(
  ({
    btn = "prev",
    disabled = false,
    direction = "left",
    onclick,
  }: ArrowButtonProps) => {
    return (
      <button
        key={btn}
        type="button"
        disabled={disabled}
        className={`${btn} arrow-btn border`}
        onClick={() => onclick(direction)}
      >
        {btn == "prev" ? <GrPrevious /> : <GrNext />}
      </button>
    );
  },
);

export default ArrowButton;
