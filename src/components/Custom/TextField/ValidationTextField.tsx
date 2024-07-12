import { OutlinedTextFieldProps, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

interface ValidationTextFieldProps extends OutlinedTextFieldProps {
    label: string;
    helperText?: string;
    type?: string;
    isPassword: number;
    defaultValue?: string;
    //react - hook - form
    control: any;
    name: string;
    width? : string;
    rules?: object
}

const ValidationTextField: React.FC<ValidationTextFieldProps> = ({
    label,
    helperText,
    //type,
    variant = "outlined",
    isPassword,
    defaultValue,
    control,
    name,
    width,
    rules
}) => {
    return (
        <Controller
            rules={rules}
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    sx={{ width:{width} }}
                    {...field}
                    label={label}
                    variant={variant}
                    type={isPassword ? "password" : "text"}
                    error={!!error}
                    helperText={error ? error.message : helperText}
                />
            )}
        />
    )
}

export default ValidationTextField