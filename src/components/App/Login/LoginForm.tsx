import { SubmitHandler, useForm } from "react-hook-form";
import NormalButton from "../../Custom/Button/NormalButton";
import ValidationTextField from "../../Custom/TextField/ValidationTextField";
import { useTheme } from "@emotion/react";
import { Grid } from "@mui/material";
import { WidthFull } from "@mui/icons-material";

interface FormValues {
    email: string;
    password: string;
}

export const LoginForm: React.FC<FormValues> = ({

}) => {
    const theme = useTheme();
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            email: "abc@gmail.com",
            password: "123456"
        }
    });
    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data);
    }
    return (
        <Grid container mt={3}
        >
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
                            label='Email address*'
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
                    <Grid item mb={3}>
                        <ValidationTextField
                            width="400px"
                            variant='outlined'
                            label='Password*'
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
                    <Grid item>
                        <NormalButton
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