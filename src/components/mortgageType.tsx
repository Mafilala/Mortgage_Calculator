import RadioInput from "@/components/radioInput";
import { FormikHelpers } from "formik";
import { FormValues } from "@/type";
type SetFieldValueType = FormikHelpers<FormValues>["setFieldValue"];
const MortgageType = ({
  setFieldValue,
  values,
  error,
}: {
  setFieldValue: SetFieldValueType;
  values: FormValues;
  error: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3>Mortgage Type</h3>
      <RadioInput
        label="Repayment"
        id={1}
        setValue={() => {
          setFieldValue("type", 1);
        }}
        value={values.type}
      />
      <RadioInput
        label="Interest Only"
        id={2}
        setValue={() => {
          setFieldValue("type", 2);
        }}
        value={values.type}
      />
      {error && <p className="text-Red">{error}</p>}
    </div>
  );
};

export default MortgageType;
