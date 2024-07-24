import * as React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../AppBar/ResponsiveAppBar';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { BannerPage } from '../../Pages/Home/BannerPage';
import { JobByTypePage } from '../../Pages/Home/JobByTypePage';
import { JobOfTheDay } from '../../Pages/Home/JobOfTheDay';
import { HomePage } from '../../Pages/Home/HomePage';

const MainLayout: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <HomePage/>
    </>
  );
};

export default MainLayout;