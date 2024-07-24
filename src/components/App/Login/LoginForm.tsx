import { SubmitHandler, useForm } from "react-hook-form";
import NormalButton from "../../Custom/Button/NormalButton";
import ValidationTextField from "../../Custom/TextField/ValidationTextField";
import { useTheme } from '@mui/material/styles';
import { Checkbox, FormControlLabel, Grid, Typography, Link as MuiLink } from "@mui/material";
import { login } from "../../../services/userService/userService";
import { useState } from "react";
import { NormalSnackBar } from "../../Custom/Toast/NormalSnackBar";
import { Link as RouterLink, useNavigate } from 'react-router-dom';

interface FormValues {
    email?: string;
    password?: string;
    onLogin : () => void
}

export const LoginForm: React.FC<FormValues> = ({onLogin

}) => {
    const theme = useTheme();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [open, setOpen] = useState(true);
    const [checked, setChecked] = useState(true);
    const navigate = useNavigate();

    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            email: "ElonMusk@gmail.com",
            password: "123456"
        }
    });
    
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            if (data.email && data.password){
                await login(data.email, data.password);
                setErrorMessage("success");
                setOpen(true)
                onLogin()
                //Move to home
                navigate("/");
            }
        } catch (error){
            if (error instanceof Error) {
                setErrorMessage(error.message)
                setOpen(true)
            }
        }
    };

    const onSnackBarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Grid container mt={3} width="400px"
        >
            {errorMessage !== "success" && errorMessage && (
                <NormalSnackBar
                    severity="error"
                    text={errorMessage}
                    open = {open}
                    onSnackBarClose={onSnackBarClose}
                />
            )}
            {errorMessage === "success" && (
                <NormalSnackBar
                    severity="success"
                    text="Login successfully"
                    open = {open}
                    onSnackBarClose={onSnackBarClose}
                />
            )

            }
            <form onSubmit={handleSubmit(onSubmit)}
                style={{ width: '100%' }}>
                <Grid
                    style={{ width: '100%' }}
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column">
                    <Grid item mb={3}>
                        <ValidationTextField
                            width="400px"
                            variant='outlined'
                            label='Email address *'
                            isPassword={0}
                            defaultValue='abc@gmail.com'
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
                    <Grid item mb={2}>
                        <ValidationTextField
                            width="400px"
                            variant='outlined'
                            label='Password *'
                            isPassword={1}
                            defaultValue='123456'
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
                    <Grid container mb={2} width="100%">
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox
                                    checked={checked}
                                    onChange={handleCheckChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Remember me"
                            />
                        </Grid>
                        <Grid item xs={6} container justifyContent="flex-end" alignItems="center">
                            <MuiLink
                                component={RouterLink}
                                to="/"
                                color={theme.palette.primary.dark}
                                sx={{
                                    textDecoration: 'none',
                                    '&:hover': {
                                    color: "#7e57c2",
                                    },
                                }}
                                >
                                <Typography>Forgot password</Typography>
                            </MuiLink>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <NormalButton
                        isCanHover = {true}

                            width="400px"
                            type="submit"
                            text='Sign in'
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