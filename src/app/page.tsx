"use client";
import MortgageForm from "@/components/form";
import { useState } from "react";
export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <div className="text-Slate-700 text-xs max-w-[300px] md:max-w-[380px] lg:max-w-[700px] h-auto lg:h-1/2 ">
      <MortgageForm />
    </div>
  );
}
