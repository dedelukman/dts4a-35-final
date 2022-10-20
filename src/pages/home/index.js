import { Grid, Typography } from "@mui/material";
import CorauselNews from "./CorauselNews";
import { gridSpacing } from "../../store/constants";
import { useState } from "react";
import HeadlineNews from "./HeadlineNews";
import LatestNews from "./LatestNews";
import SimilarNews from "./SimilarNews";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid
          container
          alignContent="center"
          justifyContent="space-between"
          spacing={gridSpacing}
        >
          <Grid item>
            <Typography variant="h2" sx={{ pb: 2, pl: 2 }}>
              Top News
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={9}>
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
            <CorauselNews />
            <Grid
              container
              spacing={gridSpacing}
              sx={{ flexDirection: "row-reverse", mt: 3 }}
            >
              <Grid item xs={12} md={8}>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={gridSpacing}
                >
                  <Grid item>
                    <Typography variant="h2" sx={{ pb: 2, pl: 2 }}>
                      Latest News
                    </Typography>
                  </Grid>
                </Grid>
                <LatestNews />
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  position: "sticky",
                  top: 70,
                  height: 0,
                }}
              >
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={gridSpacing}
                >
                  <Grid item>
                    <Typography variant="h3">Similar News</Typography>
                  </Grid>
                </Grid>
                <SimilarNews isLoading={!isLoading} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={3}
            sx={{
              display: { xs: "none", md: "block" },
              position: "sticky",
              top: 70,
              height: 0,
            }}
          >
            <HeadlineNews isLoading={!isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
