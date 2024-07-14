import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Link as MuiLink } from '@mui/material'
import NormalButton from '../../Custom/Button/NormalButton';
import GoogleIcon from '@mui/icons-material/Google';
import { LoginForm } from '../../App/Login/LoginForm';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';

interface LoginProps{
    onLogin : () => void;
}

const Login: React.FC<LoginProps> = ({onLogin}) => {
    
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
            <LoginForm onLogin={onLogin}/>
            <Grid container justifyContent="center" alignItems="center" mt={2}>
                <Typography color={theme.palette.myTextColor.main} display="flex" alignItems="center">
                    Don't have an account? &nbsp; 
                    <MuiLink
                        component={RouterLink}
                        to="/register"
                        color={theme.palette.primary.dark}
                        sx={{
                            textDecoration: 'none',
                            '&:hover': {
                            color: "#1e88e5",
                            },
                        }}
                        >
                        <Typography>Sign up</Typography>
                    </MuiLink>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Login