import './App.css';
import React, {useState, useEffect} from 'react'
import MovieList from './components/MovieList';
import Header from './components/Header';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import { Grid, Typography } from '@mui/material';


function App() {
  const [movies, setMovies] = useState([])
  const [searchInput, setSearchInput] = useState('')

const getMovieRequest = async (searchInput) => {
  const url=`http://www.omdbapi.com/?s=${searchInput}&apikey=da88be3`
  const response = await fetch(url)
  const responseJson = await response.json()

 if(responseJson.Search){
  setMovies(responseJson.Search)
 }
}

useEffect(() =>{
  getMovieRequest(searchInput)
},[searchInput])

const styles={
  searchContainer:{
    padding:'63px 57px 48px 77px',
    display:'block'
  },

  movieContainer:{
    paddingLeft:'67px'
  }
}

  return (
    <div className="App">
      <Grid container sx={{bgcolor:'#292929', padding:'40px 77px'}}>
      <Header />
      </Grid>

      <Grid container >
      <Banner />
      </Grid>

      <Grid container style={styles.searchContainer}>
      <SearchBar value={searchInput}  setValue={setSearchInput}/>
      </Grid>

      <Grid container className='movie-list' style={styles.movieContainer}>
      <Typography sx={{fontSize:'24px', textTransform:'capitalize'}}>{searchInput}</Typography>
      <MovieList Movies={movies} Category='Movies'/>
      </Grid>  

    </div>
  );
}

export default App;
