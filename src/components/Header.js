import { Box} from '@mui/material'
import React from 'react'
import Logo from '../images/MyTestApp.png'

function Header() {
  return (
    <div>
        <Box sx={{border:'1px solid #fff', textAlign:'center', padding:'.8rem 1.2rem'}}> 
            <img src={Logo} alt='logo'  />
        </Box>
    </div>
  )
}

export default Header 