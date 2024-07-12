import { useTheme } from '@emotion/react';
import { Grid, Typography } from '@mui/material'
import NormalButton from '../../Custom/Button/NormalButton';
import GoogleIcon from '@mui/icons-material/Google';
import ValidationTextField from '../../Custom/TextField/ValidationTextField';
import { LoginForm } from '../../App/Login/LoginForm';

const Login = () => {
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
                    Welcome back!
                </Typography>
                <Typography
                    variant='h3'
                    textAlign="center"
                    fontWeight="bold"
                    color={theme.palette.text.primary}
                >
                    Member Login
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
                    text='Sign in with Google'
                    startIcon={<GoogleIcon/>}
                    textColor={theme.palette.text.primary}
                    borderColor={theme.palette.myTextColor.light}
                    borderHoverColor={theme.palette.myTextColor.light}
                    textHoverColor={theme.palette.primary.main} 
                    padding='120px'
                />
            </Grid>
            {/* <Grid container spacing={3} paddingX="145px"
                justifyContent="center"
                alignItems="center"
                mt={1}>
                <Grid item xs>
                    <hr
                        style={{ width: "100%", borderTop: "1px solid lightgrey" }}
                    ></hr>
                </Grid>
                <Grid item xs={5}>
                    <Typography
                        textAlign="center"
                        color={theme.palette.myTextColor.light}
                    >
                        or continue with
                    </Typography>
                </Grid>
                <Grid item xs>
                    <hr
                        style={{ width: "100%", borderTop: "1px solid lightgrey" }}
                    ></hr>
                </Grid>
            </Grid> */}
            <LoginForm/>
        </Grid>
    )
}

export default Login