import { Grid, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { SkillButton } from '../../Custom/SkillButton/SkillButton';
import { JobItem } from '../../Custom/JobItem/JobItem';

export const JobOfTheDay: React.FC = () => {
    const theme = useTheme();
    const data = [
        "Backend Developer", "Frontend Developer", "React JS", "Fullstack Developer", "MySQL"
    ]
    const [selectedSkill, setSelectedSkill] = useState<string>("Backend Developer")

    const onClickSkillBtn = (skill: string) => {
        setSelectedSkill(skill)
    }

    const jobData = [
        {
            imgURL: '../../../assets/imgSkill.png',
            companyName: 'Company A',
            city: 'HCM City',
            country: 'VN',
            jobName: 'Full stack Developer',
            timeType: 1,
            timeCreated: '4 mins ago',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.',
            salary: '500'
        },
        {
            imgURL: '../../../assets/imgSkill.png',
            companyName: 'Company A',
            city: 'HCM City',
            country: 'VN',
            jobName: 'Full stack Developer',
            timeType: 1,
            timeCreated: '4 mins ago',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.',
            salary: '500'
        },
        {
            imgURL: '../../../assets/imgSkill.png',
            companyName: 'Company A',
            city: 'HCM City',
            country: 'VN',
            jobName: 'Full stack Developer',
            timeType: 1,
            timeCreated: '4 mins ago',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.',
            salary: '500'
        },
        {
            imgURL: '../../../assets/imgSkill.png',
            companyName: 'Company A',
            city: 'HCM City',
            country: 'VN',
            jobName: 'Full stack Developer',
            timeType: 1,
            timeCreated: '4 mins ago',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.',
            salary: '500'
        },
    ];
    const itemsPerRow = 4;
    const maxRows = 2;
    const maxItemsToDisplay = itemsPerRow * maxRows;
    const displayedJobs = jobData.slice(0, maxItemsToDisplay);
    return (
        <Grid container justifyContent="center" alignItems="center" direction="column" mb={3}>
            <Typography
                variant="h3"
                mb={3}
                sx={{
                    fontWeight: 800
                }}
            >
                Jobs of the day
            </Typography>
            <Typography mb={3}
                sx={{ color: theme.palette.myTextColor.main }}
                variant="h5"
            >
                Search and connect with the right candidates faster.
            </Typography>
            <Grid container direction='row' justifyContent="space-around" mb={3} paddingX={5}>
                {
                    data.map((skill, index) => (
                        <SkillButton
                            key={index}
                            skillName={skill}
                            selectedSkill={selectedSkill}
                            onClick={() => onClickSkillBtn(skill)}
                        />
                    ))
                }
            </Grid>

            <Grid container direction="row" paddingX={5} alignItems="center">
                {displayedJobs.map((job, index) => (
                    <Grid container justifyContent="center" item xs={12} sm={6} md={3} key={index}>
                        <JobItem
                            imgURL={job.imgURL}
                            companyName={job.companyName}
                            city={job.city}
                            country={job.country}
                            jobName={job.jobName}
                            timeType={job.timeType}
                            timeCreated={job.timeCreated}
                            description={job.description}
                            salary={job.salary}
                            skills={[
                                "Fullstack",
                                "Java",
                                "React"
                            ]}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}