import { Grid } from "@mui/material"
import { BannerPage } from "./BannerPage"
import { JobByTypePage } from "./JobByTypePage"
import { JobOfTheDay } from "./JobOfTheDay"


export const HomePage = () => {
    return (
        <Grid container>
            <BannerPage/>
            <JobByTypePage/>
            <JobOfTheDay/>
        </Grid>
    )
}