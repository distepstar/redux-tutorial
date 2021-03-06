import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

interface IProps {
  acceptZero?: boolean;
  variant?: "outlined" | "filled" | "standard";
  value: number | string | undefined;
}

type TextFieldWithValidationProps = IProps & TextFieldProps;

const RepoFormField: React.FC<TextFieldWithValidationProps> = ({
  acceptZero = false,
  name,
  value,
  id,
  label,
  type = "number",
  required = false,
  onChange,
  size = "small",
  variant = "outlined",
  disabled = false,
}): JSX.Element => {
  const isValidInput = () =>
    acceptZero && value === 0 ? Boolean(value.toString()) : Boolean(value);
  return (
    <TextField
      error={!isValidInput}
      name={name}
      id={id}
      label={label}
      value={value}
      type={type}
      variant={variant}
      fullWidth
      size={size}
      required={required}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export { RepoFormField };
