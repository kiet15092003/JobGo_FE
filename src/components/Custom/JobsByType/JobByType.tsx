import { Grid, Typography, useTheme } from "@mui/material"
import React from "react"
import ReactImg from "../../../assets/imgSkill.png"

interface JobByTypeProps{
    type: string
    numOfJobs: number
}

export const JobByType: React.FC<JobByTypeProps> = ({
    type,
    numOfJobs
}) => { 
    const theme = useTheme();
    return(
        <Grid
            mt={2}
            container
            padding={2}
            width="300px"
            sx={{
                cursor: "pointer",
                border: '1.5px solid',
                borderColor: '#EDEDEF',
                borderRadius: 2,
                bgcolor: 'background.paper',
                color: 'text.secondary',
                '&:hover':{
                    borderColor: '#C0D3F0',
                    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.12)',
                    transform: 'translateY(-5px)',
                }
            }}
        >
            <Grid
                item
                container
                xs={3}
                justifyContent="center"
                alignItems="center"
            >
                <img src={ReactImg} style={{ maxWidth: '80%', height: 'auto' }}></img>
            </Grid>
            <Grid
                item
                xs={9}
                paddingLeft={1}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 800,
                        '&:hover' : {
                            color: '#7e57c2'
                        }
                    }}
                >{type}</Typography>
                <Typography
                    color={theme.palette.myTextColor.main}
                    sx={{
                    '&:hover' : {
                        color: '#7e57c2'
                        }
                    }}
                >
                    <Typography component="span">
                        {numOfJobs} &nbsp;
                    </Typography>
                    Jobs Available
                </Typography>
            </Grid>
        </Grid>
    )
}