import React from "react";
import styles from "./display.module.css";
const Result = ({
  principal,
  annualInterestRate,
  loanTermInYears,
  type,
}: {
  principal: number;
  annualInterestRate: number;
  loanTermInYears: number;
  type: number;
}) => {
  function formatNumberWithCommas(number:number):string {
    return new Intl.NumberFormat('en-US').format(number);
  }
  let resultText = "Your monthly repayments";
  let totalText = "Total you'll repay over the term";
  function calculateMonthlyPayment():string {
    let monthlyPrincipal = principal / loanTermInYears / 12;
    let monthlyInterestRate = annualInterestRate / 12 / 100;
    let numberOfPayments = loanTermInYears * 12;
    let monthlyPayment =
      (principal *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    const interest = monthlyPayment - monthlyPrincipal;
    if (type == 2) {
      resultText = "Your monthly interest payment";
      totalText = "Total interest you'll pay over the term";
      return interest.toFixed(2);
    }
    return monthlyPayment.toFixed(2);
  }
  let result = calculateMonthlyPayment();

  let total = (parseFloat(result) * 12 * loanTermInYears).toFixed(
    2
  );

  total = formatNumberWithCommas(parseFloat(total))
  result = formatNumberWithCommas(parseFloat(result));

  return (
    <div className="h-full bg-ResultBg py-4 px-3 md:py-6 md:px-6 md:rounded-b-2xl flex flex-col gap-4 lg:pb-16 lg:rounded-bl-[56px]">
      <h2 className="text-lg text-white">Your results</h2>
      <p className="text-xs text-Slate-300">
        Your result are shown below based on the information you provided to
        adjust the result, edit the form and click the &quot;calculate
        repayments&quot; again
      </p>
      <div
        className={`bg-DarkBg px-2 py-3 flex flex-col justify-center gap-2 rounded text-Slate-300 ${styles["lime-shadow"]} md:p-4`}
      >
        <p>{resultText} </p>
        <h2 className="text-3xl text-Lime">{`£${result}`}</h2>
        <div className="w-full h-[1px] bg-Slate-900"></div>
        <p>{totalText}</p>total
        <h3 className="text-lg text-white">{`£${total}`}</h3>
      </div>
    </div>
  );
};

export default Result;
