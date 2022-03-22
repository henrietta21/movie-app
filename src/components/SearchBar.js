import {TextField, Typography } from '@mui/material'
import React from 'react'

function SearchBar(props) {
  return (
    <div>
    <Typography sx={{fontSize:'24px'}}>Search</Typography>
    <TextField type='search' placeholder='Search...' fullWidth value={props.value} onChange={(e)=> props.setValue(e.target.value)}/>
    </div>
  )
}


export default SearchBar