import { Grid, Typography } from '@mui/material'
import React from 'react'

function MovieList(props) {
  const styles={
    movieListContainer:{
      width:'300px',
      heigth:'300px',
      marginRight:'13px',
      position: 'relative',
      marginTop: '28px'
    },

    text:{
      position: 'absolute',
      top:'50%',
      color:'#fff',
      fontSize:'24px',
    }
  }
  return (
    <Grid container className='row' spacing={2} >
    {
        props.Movies.map((movie, key)=>
           <Grid container key={key} style={styles.movieListContainer}>
           <Grid container justifyContent='center' style={styles.text}><Typography>{movie.Title}</Typography></Grid>
           <img src={movie.Poster} alt='movie' />
           </Grid> 
        )
    }
    </Grid>
  )
}

export default MovieList