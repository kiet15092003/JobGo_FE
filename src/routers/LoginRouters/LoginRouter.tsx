import React from "react";
import { Navigate } from "react-router-dom";
import { HomePage } from "../../components/Pages/Home/HomePage";

interface LoginRouterProps{
    isAuth: boolean
}

export const LoginRouter : React.FC<LoginRouterProps> = ({
    isAuth
}) => {
    return (
        isAuth ? <HomePage/> : <Navigate to="/login"/> 
    )
}