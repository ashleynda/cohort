import React from 'react'
import Nav from '../../components/nav/Nav'
import unsplash from '../../assets/unsplash.png'
import company from '../../assets/company-logo.png'
import { Button } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import Sidebar from '../../components/sidebar/Sidebar'
// import { Container } from '@mui/material'

const Workspace = () => {
  return (
    // <Container >
      <div>
        <Nav />
        <div className='relative'>
          <img src={unsplash} alt='tree leaves' className='flex  mt-2 w-full '/>
          <div className='absolute top-6 left-10 flex flex-col gap-2 p-4'>
            <div className='flex flex-row items-center'>
              <img src={company} alt='company logo' className='w-8 h-8 mr-2'/>
              <p className='text-sm font-bold text-white leading-6'>Semicolon Africa</p>
            </div>
            <Button variant='text' style={{color: 'black', backgroundColor: 'white', gap: '2px', fontSize: 12}}>View Profile <EastIcon style={{color: 'black'}}/></Button>
          </div>
        </div>
        <Sidebar />
      </div>

    // </Container>
    
  )
}

export default Workspace