import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material"
import bannerBackImg from "../../../assets/bubble-29 1.png"
import bannerImg from "../../../assets/banner.png"
import { SearchBox } from "../../Custom/SearchBox/SearchBox";
import Link from '@mui/material/Link';

export const BannerPage: React.FC = () => {
    const theme = useTheme();

    const normalSearchWords = [
        { label: 'Software developer', value: '1' },
        { label: 'Web developer', value: '2' },
        { label: 'Fullstack developer', value: '3' },
    ]

    return(
        <Grid container sx={{ position: 'relative' }} mb={3}>
            <Grid
                xs={8}
                container
                justifyContent="center"
                alignItems="center"
                style={{ height: '100vh' }}
                paddingRight={10}
            >
                <Grid maxWidth="600px" >
                    <Typography mb={3} variant="h2" sx={{ color: theme.palette.myTextColor.main, fontFamily: 'monospace', fontWeight: 500 }}>
                        The{' '}
                        <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 800 }}>
                            Easiest Way
                        </Box>{' '}
                        to Get Your New Job
                    </Typography>
                    <Typography mb={3}
                        sx={{ color: theme.palette.myTextColor.main }}
                        variant="h5"
                    >
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </Typography>
                    <SearchBox />
                    <Grid mt={3}>
                        <Typography
                            mr={2}
                            component="span"
                            sx={{
                                fontWeight: 800
                            }}
                        >
                            Popular Searches:
                        </Typography>
                        {
                            normalSearchWords.map((word) => (
                                <Link href="#" color="inherit" key={word.value}
                                    sx={{
                                        '&:hover': {
                                            color: '#7e57c2'
                                        }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            '&:hover': {
                                                color: '#7e57c2'
                                            }
                                        }} mr={1} component="span" color={theme.palette.myTextColor.main}>{word.label}</Typography>
                                </Link>
                            ))
                        }
                    </Grid>

                </Grid>
            </Grid>
            <Grid
                xs={4}
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundImage: `url(${bannerBackImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '66%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={bannerImg} style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>
        </Grid>
    )
}