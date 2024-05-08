import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav'
// import Workspace from '../pages/workspace/Workspace'
import Home from '../pages/home/Home'
import Hero from '../pages/workspace/Hero'
import Footer from './footer/Footer'
import { useMediaQuery, useTheme} from '@mui/material'

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <div className='flex flex-col h-screen '>
        <Nav />
        <Hero/>
        <div className='flex px-5' style={{ position: 'fixed', bottom: 0, width: '100%'}}>
            {isMobile &&
              <Footer />
            }
        </div>
    </div>
  )
}

export default Layout;