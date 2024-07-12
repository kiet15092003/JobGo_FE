import { Theme, useTheme } from "@emotion/react";
import { Button, ButtonProps, SxProps } from "@mui/material";
import React from "react";

interface NormalButtonProps extends ButtonProps{
    text: string;
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    startIcon?: React.ReactNode;
    sx?: SxProps<Theme>;
    padding? : string;
    textHoverColor: string;
    backgroundHoverColor? : string;
    borderHoverColor? : string;
    width? : string;
}

const NormalButton: React.FC<NormalButtonProps> = ({
    text,
    textColor,
    borderColor,
    backgroundColor,
    startIcon,
    sx,
    padding,
    textHoverColor,
    backgroundHoverColor,
    borderHoverColor,
    width,
    ...rest 
}) => {
    //const theme = useTheme();
    return(
        <Button 
            variant="outlined"
            sx={{
                // paddingTop : "10px",
                // paddingBottom : "10px",
                width: {width},
                paddingY: "10px",
                paddingX: padding,
                borderColor: borderColor,
                color: textColor,
                transition: 'transform 0.3s ease-in-out',
                backgroundColor: {backgroundColor},
                '&:hover': {
                    borderColor: borderHoverColor,
                    backgroundColor: backgroundHoverColor,
                    color: textHoverColor,
                    transform: 'translateY(-5px)',
                    
                },
                textTransform: 'none',
            }}
            startIcon={startIcon}
            {...rest}
        >
            {text}
        </Button>
    )
}

export default NormalButton