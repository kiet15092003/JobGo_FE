import { Grid, Typography, useTheme, Link as MuiLink } from "@mui/material"
import NormalButton from "../../Custom/Button/NormalButton";
import GoogleIcon from '@mui/icons-material/Google';
import { RegisterForm } from "../../App/Register/registerForm";
import { Link as RouterLink } from 'react-router-dom';


export const Register = () => {
    const theme = useTheme();
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
        >
            <Grid>
                <Typography
                    variant='h6'
                    textAlign="center"
                    mb={2}
                    color={theme.palette.primary.main}
                >
                    Register
                </Typography>
                <Typography
                    variant='h3'
                    textAlign="center"
                    fontWeight="bold"
                    color={theme.palette.text.primary}
                >
                    Start for free Today
                </Typography>
                <Typography
                    textAlign="center"
                    mb={3}
                    color={theme.palette.text.secondary}
                >
                    Access to all features. No credit card required.
                </Typography>
            </Grid>
            <Grid>
                <NormalButton
                    width='400px'
                    text='Sign up with Google'
                    startIcon={<GoogleIcon/>}
                    textColor={theme.palette.text.primary}
                    borderColor={theme.palette.myTextColor.light}
                    borderHoverColor={theme.palette.myTextColor.light}
                    textHoverColor={theme.palette.primary.main} 
                    padding='120px'
                />
            </Grid>
            <RegisterForm/>
            <Grid container justifyContent="center" alignItems="center" mt={2}>
                <Typography color={theme.palette.myTextColor.main} display="flex" alignItems="center">
                    Already have an account? &nbsp; 
                    <MuiLink
                        component={RouterLink}
                        to="/login"
                        color={theme.palette.primary.dark}
                        sx={{
                            textDecoration: 'none',
                            '&:hover': {
                            color: "#1e88e5",
                            },
                        }}
                        >
                        <Typography>Sign in</Typography>
                    </MuiLink>
                </Typography>
            </Grid>
        </Grid>
    )
}