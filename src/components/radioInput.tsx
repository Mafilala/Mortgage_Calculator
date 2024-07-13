import React from "react";
import { RadioInputPros } from "@/type";
const RadioInput = ({ label, id, value, setValue }: RadioInputPros) => {
  const clickHandler = () => {
    setValue(id);
  };
  return (
    <div
      onClick={clickHandler}
      className={`cursor-pointer border hover:border-Lime rounded-[4px] h-[34px] flex items-center overflow-hidden shadow-inputShadow 
    ${id == value ? "bg-LightLime border-Lime" : "border-Slate-700 "}`}
    >
      <div className="w-[14px] h-[14px] m-2 rounded-[50%] border border-Slate-500 flex justify-center items-center">
        {id == value && <div className="w-2 h-2 rounded-[50%] bg-Lime"></div>}
      </div>
      <span>{label}</span>
    </div>
  );
};

export default RadioInput;
