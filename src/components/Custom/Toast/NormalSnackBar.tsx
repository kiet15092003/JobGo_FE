import { Alert, Snackbar, SnackbarProps } from "@mui/material";
import React from "react";

interface NormalSnackBarProps extends SnackbarProps {
    severity: 'success' | 'error' | 'info' | 'warning';
    text: string,
    open: boolean,
    onSnackBarClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
}

export const NormalSnackBar: React.FC<NormalSnackBarProps> = ({ 
    severity,
    text,
    open,
    onSnackBarClose,
    ...rest
}) => { 
    return (
        <Snackbar 
            open={open} 
            autoHideDuration={3000} 
            onClose={onSnackBarClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
            <Alert
                onClose={onSnackBarClose}
                severity= {severity}
                variant="filled"
                
                sx={{ width: '100%' }}
            >
                {text}
            </Alert>
        </Snackbar>
    )
}