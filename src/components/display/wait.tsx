import React from "react";
import Illustration from "@/components/illustration";

const Wait = () => {
  return (
    <div className="w-full h-full p-4 bg-ResultBg gap-3 flex flex-col justify-center items-center md:py-6 md:px-6 md:rounded-b-2xl lg:rounded-bl-[56px]">
      <Illustration />
      <h2 className="text-lg text-white">Results shown here</h2>
      <p className="text-center text-Slate-500">
        Complete the form and click the &quot;calculate repayments&quot; to see
        what your monthly repayments would be
      </p>
    </div>
  );
};

export default Wait;
