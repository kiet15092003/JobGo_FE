import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface NormalButtonProps extends ButtonProps{
    text: string;
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    startIcon?: React.ReactNode;
    padding? : string;
    textHoverColor?: string;
    backgroundHoverColor? : string;
    borderHoverColor? : string;
    width? : string;
    isCanHover: boolean
}

const NormalButton: React.FC<NormalButtonProps> = ({
    text,
    textColor,
    borderColor,
    backgroundColor,
    startIcon,
    padding,
    textHoverColor,
    backgroundHoverColor,
    borderHoverColor,
    width,
    isCanHover
}) => {
    return(
        <Button 
            variant="outlined"
            sx={{
                width: {width},
                paddingY: "10px",
                paddingX: padding,
                borderColor: borderColor,
                color: textColor,
                transition: 'transform 0.3s ease-in-out',
                backgroundColor: {backgroundColor},
                '&:hover': isCanHover ? {
                    borderColor: borderHoverColor,
                    backgroundColor: backgroundHoverColor,
                    color: textHoverColor,
                    transform: 'translateY(-5px)',
                } : {},
                textTransform: 'none',
            }}
            startIcon={startIcon}
        >
            {text}
        </Button>
    )
}

export default NormalButton