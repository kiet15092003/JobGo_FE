import React from "react";
import { Navigate } from "react-router-dom";
import { HomePage } from "../../components/Pages/Home/HomePage";
import MainLayout from "../../components/App/MainLayout/MainLayout";

interface LoginRouterProps{
    isAuth?: boolean
}

export const LoginRouter : React.FC<LoginRouterProps> = ({
    isAuth
}) => {
    return (
        isAuth ? <MainLayout/> : <Navigate to="/login"/> 
    )
}