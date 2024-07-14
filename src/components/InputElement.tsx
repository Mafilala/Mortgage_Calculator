import React from "react";
import { CustomInputProps } from "@/type";
const CustomInput = ({
  label,
  name,
  onChange,
  onBlur,
  error,
  dir,
  symbol,
  value,
  className,
  ...props
}: CustomInputProps) => {
  return (
    <div className={`cursor-pointer w-full  flex flex-col `}>
      <label>{label}</label>
      <div
        className={` border ${
          error ? "border-Red text-Slate-100" : "border-Slate-700"
        }  rounded-[4px] h-[34px] w-full flex overflow-hidden `}
      >
        {dir == "left" && (
          <div className={` ${error ? "bg-Red" : "bg-Slate-100"}  h-full p-2 `}>
            {symbol}
          </div>
        )}
        <input
          id={name}
          name={name}
          type="text"
          value={value === 0 ? "" : value}
          onChange={onChange}
          onBlur={onBlur}
          className="min-w-0 px-2 border bg-none outline-none text-Slate-900 font-[500] text-sm flex-1"
        />
        {dir == "right" && (
          <div
            className={`${
              error ? "bg-Red" : "bg-Slate-100"
            } h-full  p-2 min-w-6`}
          >
            {symbol}
          </div>
        )}
      </div>
      {error && <p className="text-Red">{error}</p>}
    </div>
  );
};

export default CustomInput;
