import * as Yup from "yup";

const validationSchema = Yup.object({
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .positive("Amount must be a positive number")
    .test(
      "is-decimal",
      "Amount must have at most 2 decimal places",
      (value) => {
        const match = (value + "").match(/^\d+(\.\d{1,2})?$/);
        return match !== null;
      }
    ),
  rate: Yup.number()
    .typeError("Rate must be a number")
    .required("Rate is required")
    .positive("Rate must be a positive number")
    .test("is-decimal", "Rate must have at most 2 decimal places", (value) => {
      const match = (value + "").match(/^\d+(\.\d{1,2})?$/);
      return match !== null;
    }),
  term: Yup.number()
    .typeError("Term must be an integer")
    .required("Term is required")
    .integer("Term must be an integer")
    .positive("Term must be a positive integer"),
  type: Yup.number().required("Type is required"),
});

export default validationSchema;
