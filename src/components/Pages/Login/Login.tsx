import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Link as MuiLink } from '@mui/material'
import NormalButton from '../../Custom/Button/NormalButton';
import GoogleIcon from '@mui/icons-material/Google';
import { LoginForm } from '../../App/Login/LoginForm';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';
import LoginImg from '../../../assets/login.png'

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {

    const theme = useTheme();

    return (
        <Grid container spacing={5} sx={{ position: 'relative' }}>
            <Grid
                item xs={8}
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
            >
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
                            isCanHover = {true}
                            width='400px'
                            text='Sign in with Google'
                            startIcon={<GoogleIcon />}
                            textColor={theme.palette.text.primary}
                            borderColor={theme.palette.myTextColor.light}
                            borderHoverColor={theme.palette.myTextColor.light}
                            textHoverColor={theme.palette.primary.main}
                            padding='120px'
                        />
                    </Grid>
                    <LoginForm onLogin={onLogin} />
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
            </Grid>
            <Grid
                item xs={4}
                container
                justifyContent="center"
                alignItems="flex-end"
                direction="column"
                sx={{
                    backgroundColor: '#7e57c2'
                }}
            >

            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '66%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={LoginImg} alt="Login" style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>
        </Grid>

    )
}

export default Login