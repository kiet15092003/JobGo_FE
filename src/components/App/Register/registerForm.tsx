import { Checkbox, FormControlLabel, Grid, useTheme, Link as MuiLink, Typography } from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ValidationTextField from "../../Custom/TextField/ValidationTextField";
import NormalButton from "../../Custom/Button/NormalButton";
import { register } from "../../../services/account/accountService";
import { NormalSnackBar } from "../../Custom/Toast/NormalSnackBar";
import { Link as RouterLink, useNavigate } from "react-router-dom";

interface RegisterFormValues {
    name?: string,
    email?: string,
    password?: string,
    rePassword?: string,
}

export const RegisterForm: React.FC<RegisterFormValues> = ({

}) => {
    const theme = useTheme();
    const [message, setMessage] = useState<string | null>(null);
    const [checked, setChecked] = useState(true);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
        defaultValues: {
            name: "Elon Musk",
            email: "ElonMusk@gmail.com",
            password: "123456",
            rePassword: "123456"
        }
    });

    const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
        try {
            if (data.name && data.email && data.password && data.rePassword) {
                if (data.rePassword === data.password) {
                    await register(data.email, data.password)
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

    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
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
                    <Grid container style={{ width: '100%' }} spacing={3}>
                        <Grid 
                            item xs={6} 
                            container
                            justifyContent="center"
                            alignItems="flex-end"
                            direction="column"
                        >
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
                        </Grid>
                        <Grid
                            item xs={6} 
                            container
                            justifyContent="center"
                             alignItems="flex-start"
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
                            <Grid item mb={3}>
                                <ValidationTextField
                                    width="400px"
                                    variant='outlined'
                                    label='Phone number *'
                                    isPassword={0}
                                    control={control}
                                    name="phoneNum"
                                    rules={{
                                        required: "Full name is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]/,
                                            message: "Invalid full name",
                                        },
                                    }}
                                />
                            </Grid>
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
                        </Grid>
                    </Grid>
                    <Grid container mb={2} width="400px">
                        <Grid item xs={6} container>
                            <FormControlLabel
                                control={<Checkbox
                                    checked={checked}
                                    onChange={handleCheckChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Agree our terms"
                            />
                        </Grid>
                        <Grid item xs={6} container justifyContent="flex-end" alignItems="center">
                            <MuiLink
                                component={RouterLink}
                                to="/*"
                                color={theme.palette.primary.dark}
                                sx={{
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: "#1e88e5",
                                    },
                                }}
                            >
                                <Typography>Register as recruiter</Typography>
                            </MuiLink>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <NormalButton
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
            </form>
        </Grid>
    )
}