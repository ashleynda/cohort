import React from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'
import unsplash from '../../assets/unsplash.png'
import company from '../../assets/company-logo.png'
import EastIcon from '@mui/icons-material/East';
import { Outlet } from 'react-router-dom';

const Hero = () => {
    const theme = useTheme();

    return (
    <div >
        <Box sx={{ flexGrow: 1}}>

            <img src={unsplash} alt='tree-leaves' className='absolute md:relative md:w-full mt-2 z-0 height h-32 md:h-auto' />

            <div className='md:absolute md:top-32 left-20 gap-10 z-5 p-5 md:p-0'>
                <div className='flex flex-row items-center gap-2 z-5'>
                    <img src={company} alt='s' style={{zIndex: 5}} />
                    <Typography variant='body1' className='text-white text-sm font-bold'>Semicolon Africa</Typography>
                </div>
                <Button variant='contained' sx={{color: '#1E323F', textTransform: 'none', backgroundColor: 'white', 
                    gap: '2px', fontSize: '16px', textAlign: 'center', marginRight: '52px', marginTop: '10px', fontWeight: 700,  '&:hover': {
                        backgroundColor: 'white', 
                      },}}>
                    View Profile <EastIcon />  
                </Button>
            </div>
        </Box>
        
        <Box  
            sx={{
                display: 'flex',
                flexDirection: 'column',
                [theme.breakpoints.up('sm')]: {
                flexDirection: 'row', 
                },
            }}
        >
            <Outlet/>

        </Box> 
    </div> 
    )
}

export default Hero