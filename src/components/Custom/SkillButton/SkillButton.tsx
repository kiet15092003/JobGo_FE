import { Grid, Typography, useTheme } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react"
import ReactImg from "../../../assets/imgSkill.png"

interface SkillButtonProps {
    skillName : string
    selectedSkill : string
    onClick: () => void
}

export const SkillButton : React.FC<SkillButtonProps> = ({
    skillName,
    selectedSkill,
    onClick
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isChoosed, setIsChoosed] = useState(false);

    useEffect(() => {
        setIsChoosed(selectedSkill === skillName);
    }, [selectedSkill, skillName]);

    const onHover = () => {
        setIsHovered(true)
    }

    const onUnHover = () => {
        setIsHovered(false)
    }

    return(
        <Grid
            mt={2}
            container
            width="220px"
            padding={1}
            justifyContent="center"
            alignItems="center"
            onMouseEnter = {onHover}
            onMouseLeave = {onUnHover}
            onClick = {onClick}
            sx={{
                border: '1.5px solid',
                borderColor: (isHovered || isChoosed)? '#7e57c2' : '#EDEDEF',
                borderRadius: 2,
                bgcolor: 'background.paper',
                color: 'text.secondary',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                
            }}
        >
            <Grid item xs={2}>
                <img src={ReactImg} style={{ maxWidth: '100%', height: 'auto' }}></img>    
            </Grid>
            <Grid ml={2}>
                <Typography 
                    sx={{ 
                        fontWeight: 650,
                        color: (isHovered || isChoosed)? "#7e57c2" : "#455a64",
                        transition: 'color 0.3s ease' 
                    }}
                >
                    {skillName}               
                </Typography>
            </Grid>   
        </Grid>
    )
}