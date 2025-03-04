import { Typography, Grid } from "@mui/material";
import React from "react";
import styles from "./Banner.css";

function Banner() {
  return (
    <Grid container style={styles.bannerContainer}>
      <Grid container style={styles.bannerText}>
        <Typography variant="h1">Watch something incredible.</Typography>
      </Grid>
    </Grid>
  );
}

export default Banner;
