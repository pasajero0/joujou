import { useField } from 'formik';
import { FCCType } from '@type/fc-with-children.type';
import { InputTypeEnum } from './input-type.enum';
import { TextField } from '@mui/material';
import type { BaseTextFieldProps } from '@mui/material';
import { ChangeEvent } from 'react';

export interface InputProps extends BaseTextFieldProps {
  name: string;
  type?: InputTypeEnum;
  disabled?: boolean;
  required?: boolean;
}

export const Input: FCCType<InputProps> = ({
  label,
  variant = 'outlined',
  name,
  type = InputTypeEnum.Text,
  disabled = false,
  required = false,
  ...props
}) => {
  const [field, { error }, { setError, setValue }] = useField<string>(name);
  const currentValue = field?.value ?? '';
  const hasError = error !== undefined;

  const handleBlur = () => {
    if (type === InputTypeEnum.Text) {
      setValue(currentValue.trim() ?? '');
    }
  };

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(type === InputTypeEnum.Number ? String(parseFloat(value)) : value);
    if (hasError) {
      setError(undefined);
    }
  };

  return (
    <TextField
      value={currentValue}
      label={label}
      variant={variant}
      type={type}
      required={required}
      disabled={disabled}
      error={hasError}
      helperText={error}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
      {...props}
    />
  );
};
