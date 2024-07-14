import React from "react";
import Calculator from "./calculator";
import { FormikHandlers } from "formik";

type HandleSubmit = FormikHandlers["handleSubmit"];
const Submitbutton = ({ onClick }: { onClick: HandleSubmit }) => {
  return (
    <div
      onClick={() => onClick()}
      className="w-full flex justify-center items-center rounded-3xl bg-Lime h-9 cursor-pointer md:w-1/2 lg:w-2/3"
    >
      <Calculator />
      <input
        name="Calculate"
        value="Calculate Repayments"
        type="submit"
        className="border-none outline-none mx-2 text-Slate-900 font-[500] text-xs"
      />
    </div>
  );
};

export default Submitbutton;
