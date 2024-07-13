export interface CustomInputProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
  type?: string;
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
