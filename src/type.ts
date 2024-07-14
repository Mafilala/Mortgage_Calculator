export interface CustomInputProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: number;
  error?: string;
  type?: number;
  dir: string;
  symbol: string;
  className: string;
}

export interface RadioInputPros {
  label: string;
  id: number;
  value: number;
  setValue: (newValue: number) => void;
}

export interface FormValues {
  amount: number;
  rate: number;
  term: number;
  type: number;
}

export interface FormikHelpers {
  setSubmitting: (isSubmitting: boolean) => void;
}
