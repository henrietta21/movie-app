import {Typography,Grid } from '@mui/material'
import React from 'react'

import banner from '../images/images.jpg'

function Banner() {
    const styles = {
        bannerContainer: {
            height:'550px',
            backgroundImage: `url(${banner})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:'cover',
            backgroundPosition:'center'
        },

        bannerText:{
          width:'490px',
          heigth:'282px',
          fontWeight:'Bold',
          fontSize:'72px',
          lineHeigth:'93.74px',
          paddingTop:'109px',
          paddingLeft:'77px',
          color:'#fff'
        }
    };
    
  return (
    <Grid container style={styles.bannerContainer}>
      <Grid  container style={styles.bannerText} >
      <Typography variant='h1'>Watch something incredible.</Typography>
      </Grid>
    </Grid>
  )
}

export default Banner