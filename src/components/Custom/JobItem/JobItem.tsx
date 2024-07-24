import { Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import img from "../../../assets/imageCompanyLogo.png"
import NormalButton from "../Button/NormalButton";

interface JobItemProps {
    imgURL: string; 
    companyName: string;
    city: string;
    country: string;
    jobName: string;
    timeType: number;
    timeCreated: string;
    description: string;
    skills: string[];
    salary: string;
}

export const JobItem: React.FC<JobItemProps> = ({
    imgURL, companyName, city, country, jobName, timeType, timeCreated, description, skills, salary
}) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Grid 
            width="300px" 
            container 
            direction="column" 
            padding={3}
            sx={{
                border: '1.5px solid',
                borderColor: '#E0E6F7',
                borderRadius: 2,
                backgroundColor: "#F8FAFF",
                color: 'text.secondary',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: "white"
                },
                
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Grid container direction="row" alignItems="center">
                <Grid item xs={2} mr={2}>
                    <img src={img} width="100%" height='auto' style={{ borderRadius: '4px' }}/>
                </Grid>
                <Grid>
                    <Typography variant="h6"fontWeight={800}> {companyName} </Typography>
                    <Grid direction="row" container>
                        <FmdGoodOutlinedIcon style={{color: "#A0B3C6", fontSize: 15, marginRight:5, marginTop: 3}}  />
                        <Typography fontSize={13} color={theme.palette.myTextColor.light}>
                            {city}, {country}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Typography variant="h6" fontWeight={800} mt={2}> {jobName} </Typography>
            <Grid container direction="row" mb={2}>
                <Grid item xs={6} container direction="row" alignItems="center">
                    <WorkOutlineOutlinedIcon style={{color: "#A0B3C6", fontSize: 15, marginRight:5, marginBottom: 3}} />
                    <Typography fontSize={13} color={theme.palette.myTextColor.light}>
                        {
                            timeType===1 ? 'Full time' : 'Part time'
                        }
                    </Typography>
                </Grid> 
                <Grid item xs={6} container direction="row">
                    <AccessTimeOutlinedIcon style={{color: "#A0B3C6", fontSize: 15, marginRight:5, marginTop: 3}} />
                    <Typography fontSize={13} color={theme.palette.myTextColor.light}>
                        {timeCreated}
                    </Typography>
                </Grid>
            </Grid>
            <Typography mb={2} fontSize={15}> {description} </Typography>
            {
                <Grid container spacing={2} direction="row">
                {skills.map((skill, index) => (
                    <Grid item key={index}>
                        <Grid
                            sx={{
                                backgroundColor: '#EFF3FC',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 1,
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    color: "#7e57c2"
                                }
                            }}
                        >
                            <Typography fontSize={12}>{skill}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            }
            <Grid container direction="row" alignItems="center" mt={2}>
                <Grid item xs={6}>
                    <Typography variant="h5" fontWeight={800} color="#7e57c2">$ {salary}</Typography>
                </Grid>
                <Grid item xs={6} container justifyContent="flex-end">
                    <NormalButton
                        text="Apply Now"
                        textColor={isHovered? "white" : "#7e57c2"} 
                        backgroundColor={isHovered ? "#7e57c2" : "#E0E6F7"}
                        borderColor="#E0E6F7"
                        isCanHover = {false}
                    >
                    </NormalButton>
                </Grid>
            </Grid>
        </Grid>
    );
};
