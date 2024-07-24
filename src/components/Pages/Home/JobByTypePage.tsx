import { Grid, Typography, useTheme } from "@mui/material"
import Slider from "react-slick";
import { JobByType } from "../../Custom/JobsByType/JobByType";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const JobByTypePage: React.FC = () => {
    const theme = useTheme()
    const data = [
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
        { 'type': 'Web developer', 'numOfJobs': 500 },
    ]
    const settings = {
        infinite: true,
        speed: 2000,
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Grid container justifyContent="center" alignItems="center" direction="column" mb={3}>
            <Typography
                variant="h3"
                mb={3}
                sx={{
                    fontWeight: 800
                }}
            >
                Browse by category
            </Typography>
            <Typography mb={4}
                sx={{ color: theme.palette.myTextColor.main }}
                variant="h5"
            >
                Find the job that’s perfect for you. about 800+ new jobs everyday
            </Typography>
            <Grid width="90%">
                <Slider {...settings}>
                    {data.map((job) => (
                        <JobByType type={job.type} numOfJobs={job.numOfJobs} />
                    ))}
                </Slider>                
            </Grid>
        </Grid>
    )
}