import { Checkbox, FormControlLabel, Grid, useTheme, Link as MuiLink, Typography } from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ValidationTextField from "../../Custom/TextField/ValidationTextField";
import NormalButton from "../../Custom/Button/NormalButton";
import { register } from "../../../services/userService/userService";
import { NormalSnackBar } from "../../Custom/Toast/NormalSnackBar";
import { Link as RouterLink, useNavigate } from "react-router-dom";

type RegisterFormValues = {
    name?: string,
    email?: string,
    password?: string,
    rePassword?: string,
    role?: number,
}

export const RegisterForm: React.FC<RegisterFormValues> = ({

}) => {
    const theme = useTheme();
    const [message, setMessage] = useState<string | null>(null);
    const [checkedTerm, setCheckedTerm] = useState(true);
    const [checkedRole, setCheckedRole] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
        defaultValues: {
            name: "Elon Musk",
            email: "ElonMusk@gmail.com",
            password: "123456",
            rePassword: "123456",
            role: 0
        }
    });

    const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
        try {
            if (data.name && data.email && data.password && data.rePassword) {
                if (data.rePassword === data.password) {
                    if (checkedRole){
                        await register(data.email, data.password, data.name, 1)
                    }
                    else {
                        await register(data.email, data.password, data.name, 0)
                    }
                    setMessage("Register successfully")
                    navigate("/login")
                    setOpen(true)
                } else {
                    setMessage("Invalid repeat password")
                    setOpen(true)
                }
            }
        } catch (error) {
            //console.log(error)
            if (error instanceof Error) {
                setMessage(error.message)
                setOpen(true)
            }
        }
    }

    const onCheckTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedTerm(event.target.checked);
    }

    const onCheckRole = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedRole(event.target.checked);
    }

    const onSnackBarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Grid
            container
            mt={3}
        >
            {
                message !== "success" && message && (
                    <NormalSnackBar
                        severity="error"
                        text={message}
                        open={open}
                        onSnackBarClose={onSnackBarClose}
                    />
                )
            }
            {
                message === "Register successfully" && (
                    <NormalSnackBar
                        severity="success"
                        text={message}
                        open={open}
                        onSnackBarClose={onSnackBarClose}
                    />
                )
            }
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <Grid
                    style={{ width: '100%' }}
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                >
                    
                    <Grid item mb={3}>
                        <ValidationTextField
                            width="400px"
                            variant='outlined'
                            label='Full name *'
                            isPassword={0}
                            control={control}
                            name="name"
                            rules={{
                                required: "Full name is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]/,
                                    message: "Invalid full name",
                                },
                            }}
                        />
                    </Grid>
                    <Grid
                        item mb={3}
                    >
                        <ValidationTextField
                            width="400px"
                            variant='outlined'
                            label='Email address *'
                            isPassword={0}
                            control={control}
                            name="email"
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email address",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item mb={3}>
                        <ValidationTextField
                            width="400px"
                            variant='outlined'
                            label='Password *'
                            isPassword={1}
                            control={control}
                            name="password"
                            rules={{
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item mb={3}>
                        <ValidationTextField
                            width="400px"
                            variant='outlined'
                            label='Re-Password *'
                            isPassword={1}
                            control={control}
                            name="rePassword"
                            rules={{
                                required: "Re-Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Re-Password must be at least 6 characters long",
                                },
                            }}
                        />
                    </Grid>
                    <Grid container mb={2} width="400px">
                        <Grid item xs={6} container>
                            <FormControlLabel
                                control={<Checkbox
                                    checked={checkedTerm}
                                    onChange={onCheckTerm}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                
                                />}
                                label="Agree our terms"
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        color: '#455a64',
                                    },
                                    '&:hover': {
                                        color: '#7e57c2',
                                    }
                                  }}
                            />
                        </Grid>
                        <Grid item xs={6} container justifyContent="flex-end" alignItems="center">
                            <FormControlLabel
                                control={<Checkbox
                                    checked={checkedRole}
                                    onChange={onCheckRole}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                
                                />}
                                label="You are recruiter"
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                    color: '#455a64',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <NormalButton
                    isCanHover = {true}

                            width="400px"
                            type="submit"
                            text='Submit & Register'
                            textColor='#ffffff'
                            textHoverColor='#ffffff'
                            backgroundColor={theme.palette.primary.dark}
                            borderColor={theme.palette.primary.dark}
                            borderHoverColor={theme.palette.primary.main}
                            backgroundHoverColor={theme.palette.primary.main}
                        />
                    </Grid>
                </Grid>
            </form >
        </Grid>
    )
}