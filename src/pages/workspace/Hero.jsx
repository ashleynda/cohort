import React from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'
import unsplash from '../../assets/unsplash.png'
import company from '../../assets/company-logo.png'
import EastIcon from '@mui/icons-material/East';
import Sidebar from '../../components/sidebar/Sidebar'
import Cohorts from './Cohorts'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom';

const Hero = () => {
    const theme = useTheme();

    return (
    <div>
        <Box sx={{ flexGrow: 1}}>

            <img src={unsplash} alt='tree-leaves' className='absolute md:relative md:w-full mt-2 z-0 height h-32 md:h-auto' />

            <div className='md:absolute md:top-32 left-20 gap-10 z-5 p-5 md:p-0'>
                <div className='flex flex-row items-center gap-2 z-5'>
                    <img src={company} alt='s' style={{zIndex: 5}} />
                    <Typography variant='body1' className='text-white'>Semicolon Africa</Typography>
                </div>
                <Button variant='text' sx={{color: '#001343', textTransform: 'none', backgroundColor: 'white', 
                    gap: '2px', fontSize: 12, textAlign: 'center', marginRight: '52px', marginTop: '10px'}}>
                    View Profile <EastIcon />  
                </Button>
            </div>
        </Box>
        
        <Box  
            sx={{
                display: 'flex',
                flexDirection: 'column', // Stack components vertically on small screens
                [theme.breakpoints.up('sm')]: {
                flexDirection: 'row', // Align components horizontally on screens larger than small
                },
            }}
        >
            <Outlet/>

        </Box> 
    </div> 
    )
}

export default Hero