// import React from 'react'
// import Nav from '../../components/nav/Nav'
// import unsplash from '../../assets/unsplash.png'
// import company from '../../assets/company-logo.png'
// import { Button, Container, useMediaQuery, useTheme } from '@mui/material'
// import EastIcon from '@mui/icons-material/East';
// import Sidebar from '../../components/sidebar/Sidebar'
// import Cohorts from '../cohorts/Cohorts'
// import CreateCohort from '../cohorts/CreateCohort'
// import Footer from '../../components/footer/Footer'
// // import { Container } from '@mui/material'

// const Workspace = () => {

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//       <div>
//         <Nav />
//         {/* <div className='max-w-sm:relative'> */}
//           <img src={unsplash} alt='tree leaves' className={isMobile ? 'h-32 w-screen':'flex mt-2 w-full'} style={{ maxWidth: '250%'}}/>
//           <div className='absolute top-32 left-32 flex flex-col gap-2'>
//             <div className='flex flex-row items-center '>
//               <img src={company} alt='company logo' className='w-8 h-8 mr-2'/>
//               <p className={isMobile ?  'text-black' :'text-sm font-bold text-white leading-6'}>Semicolon Africa</p>
//             </div>
//             <Button variant='text' sx={{color: 'black', backgroundColor: 'white', gap: '2px', fontSize: isMobile ? 12 : 12}} 
//             className='w-44:'>
//               View Profile <EastIcon style={{color: 'black'}}/>
//               </Button>
//           </div>
//         {/* </div> */}
//         <div className={isMobile ? 'flex flex-col w-full' : 'flex w-full'}>
//           <Sidebar />
//           <Cohorts />
//           {/* <CreateCohort /> */}
//           <Footer />

//         </div>
//       </div>    
//   )
// }

// export default Workspace

import { Box, Button, Container, Typography} from '@mui/material'
import React from 'react'
import Nav from '../../components/nav/Nav'
import unsplash from '../../assets/unsplash.png'
import company from '../../assets/company-logo.png'
import EastIcon from '@mui/icons-material/East';
import Sidebar from '../../components/sidebar/Sidebar'
import Cohorts from '../cohorts/Cohorts'
import Footer from '../../components/footer/Footer'
import { useTheme } from '@mui/material/styles';

const Workspace = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={false}>
      <Nav />

      <Box  >
        <img src={unsplash} alt='tree-leaves' className='w-full mt-2'/>
        <div className='absolute top-32 left-14 gap-10'>
          <div className='flex flex-row items-center'>
            <img src={company} alt='s' />
            <Typography variant='body1'>Semicolon Africa</Typography>
          </div>
          <Button variant='text' sx={{color: '#001343', textTransform: 'none', backgroundColor: 'white', 
            gap: '2px', fontSize: 12, textAlign: 'center', marginRight: '36px'}}>
            View Profile <EastIcon />  
          </Button> 
        </div>
      </Box>

      <Box  sx={{
        display: 'flex',
        flexDirection: 'column', // Stack components vertically on small screens
        [theme.breakpoints.up('sm')]: {
          flexDirection: 'row', // Align components horizontally on screens larger than small
        },
      }}>
        <Sidebar />
        <Cohorts />
        <Footer />
      </Box>

      
    </Container>
  )
}

export default Workspace
