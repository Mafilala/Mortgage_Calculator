"use client";
import React, { useRef } from "react";
import { Formik, Form, FormikProps } from "formik";
import validationSchema from "@/validationSchema";
import CustomInput from "./InputElement";
import Submitbutton from "./submitbutton";
import MortgageType from "@/components/mortgageType";
import Wait from "./display/wait";
import Result from "./display/result";
import { FormikHelpers, FormValues } from "@/type";
const MortgageForm = () => {
  const formikRef = useRef<FormikProps<FormValues>>(null);
  const [isResult, setIsResult] = React.useState(false);
  const initialValues = {
    amount: 0,
    rate: 0,
    term: 0,
    type: 0,
  };

  const onSubmit = (values: FormValues, { setSubmitting }: FormikHelpers) => {
    setIsResult(true);
    setSubmitting(false);
  };

  const handleClearAll = () => {
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
        handleSubmit,
      }) => {
        const hasErrors = Object.keys(errors).length > 0;
        return (
          <Form className="flex flex-col gap-4  lg:grid lg:grid-cols-2 w-full  lg:h-full">
            <div className="flex flex-col justify-between gap-2 lg:justify-evenly lg:p-2">
              <div className="md:flex md:justify-between">
                <h1 className="text-lg text-Slate-900">Mortgage Calculator</h1>
                <button
                  className="border-none text-[10px] mb-4 md:mb-0"
                  onClick={handleClearAll}
                >
                  <span className="underline">Clear All</span>
                </button>
              </div>
              <CustomInput
                className=""
                dir="left"
                symbol="£"
                label="Mortgage Amount"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.amount && errors.amount ? errors.amount : ""}
              />
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <CustomInput
                  className=""
                  dir="right"
                  symbol="years"
                  label="Mortgage Term"
                  name="term"
                  value={values.term}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.term && errors.term ? errors.term : ""}
                />
                <CustomInput
                  className=""
                  dir="right"
                  symbol="%"
                  label="Mortgage Rate"
                  name="rate"
                  value={values.rate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.rate && errors.rate ? errors.rate : ""}
                />
              </div>
              <MortgageType
                setFieldValue={setFieldValue}
                values={values}
                error={touched.type && errors.type ? errors.type : ""}
              />

              <Submitbutton onClick={handleSubmit} />
            </div>

            <div className="">
              {isResult && !hasErrors ? (
                <Result
                  principal={values.amount}
                  annualInterestRate={values.rate}
                  loanTermInYears={values.term}
                  type={values.type}
                />
              ) : (
                <Wait />
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MortgageForm;
