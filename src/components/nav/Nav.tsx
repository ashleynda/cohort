// import React, { useState } from 'react';
// import { AppBar, Button, Toolbar, Typography, Menu, MenuItem, Avatar } from '@mui/material';
// import logo from '../../assets/logo.png';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import ham from '../../assets/hamburger.png';
// import { useMediaQuery, useTheme } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const Nav = () => {
//   const [activeButton, setActiveButton] = useState(0);
//   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

//   const handleClick = (index: number) => {
//     setActiveButton(index);
//   };

//   const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => { // Specify the type of event
//     setAnchorEl(event.currentTarget as HTMLElement); // Cast event.currentTarget to HTMLElement
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleMenuItemClick = (option: string) => {
//     console.log(option + ' clicked');
//     handleMenuClose();
//   };

//   return (
//     <AppBar position="static" color="default">
//       <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <div className=':flex flex-row'>
//           <div className={isMobile ? '' :'flex flex-row justify-center items-center gap-2'}>
//             <img src={logo} alt="company-logo" />
//             {!isMobile && (
//               <Typography variant="h6" className='text-blue-600 font-8xl font-medium'>
//                 enum
//               </Typography>
//             )}
//           </div>
//           <div className='flex justify-center items-center gap-12'>
//             <div className='hidden lg:flex flex-row gap-12'>
//               <Button 
//                 variant="text" 
//                 sx={{ 
//                   color: activeButton === 0 ? '#008EEF' : 'black', 
//                   textDecoration: activeButton === 0 ? 'underline' : 'none',
//                   textTransform: 'none',
//                   '&:hover': { 
//                     textDecoration: 'underline',
//                     color: '#008EEF'
//                   },
//                   fontSize: 16,
//                   fontWeight: 600,
//                   lineHeight: '27px' 
//                 }}
//                 onClick={() => handleClick(0)}  
//                 className="text-base font-bold"
//               >
//                 Home
//               </Button>
//               <Button 
//                 variant="text" 
//                 sx={{ 
//                   color: activeButton === 1 ? '#008EEF' : 'black', 
//                   textDecoration: activeButton === 1 ? 'underline' : 'none',
//                   textTransform: 'none',
//                   '&:hover': { 
//                     textDecoration: 'underline',
//                     color: '#008EEF'
//                   },
//                   fontSize: 16,
//                   fontWeight: 600,
//                   lineHeight: '27px' 
//                 }}
//                 onClick={() => handleClick(1)}  
//                 className="text-base font-bold"
//               >
//                 Workspace
//               </Button>
//               <Button 
//                 variant="text" 
//                 sx={{ 
//                   color: activeButton === 2 ? '#008EEF' : 'black', 
//                   textDecoration: activeButton === 2 ? 'underline' : 'none',
//                   textTransform: 'none',
//                   '&:hover': { 
//                     textDecoration: 'underline',
//                     color: '#008EEF'
//                   },
//                   fontSize: 16,
//                   fontWeight: 600,
//                   lineHeight: '27px'
//                 }}
//                 onClick={() => handleClick(2)}  
//                 className="text-base font-bold"
//               >
//                 Resources Library
//               </Button>
//             </div>
//           </div>
//           <div className="flex flex-row gap-8">
//             <NotificationsNoneOutlinedIcon />
//             <div className={isMobile ? '' :"flex flex-row gap-4"}>
//               <Avatar src="/broken-image.jpg" style={{color: '#008EEF'}} />
//               {!isMobile && (
//                 <Button
//                   variant="text"
//                   onClick={handleMenuClick}
//                   sx={{ 
//                     textTransform: 'none',
//                     color: 'black' // Set the color to black
//                   }}
//                   endIcon={<ExpandMoreIcon/>}
//                 >
//                   Onomowano
//                 </Button>
//               )}
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 <MenuItem onClick={() => handleMenuItemClick('Option 1')}>Option 1</MenuItem>
//                 <MenuItem onClick={() => handleMenuItemClick('Option 2')}>Option 2</MenuItem>
//                 <MenuItem onClick={() => handleMenuItemClick('Option 3')}>Option 3</MenuItem>
//               </Menu>
//             </div>
//             <img src={ham} alt="hamburger" className='hidden lg:flex ' />
//           </div> 
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Nav;



import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ham from "../../assets/hamburger.png"
import MobileNav from './MobileNav';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 'auto', // Override the default minHeight
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [activeButton, setActiveButton] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 



  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => { // Specify the type of event
    setAnchorEl(event.currentTarget as HTMLElement); // Cast event.currentTarget to HTMLElement
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    console.log(option + ' clicked');
    handleMenuClose();
  };

  const handleClick = (index: number) => {
    setActiveButton(index);
  };



  // sx={{display: 'flex', justifyContent: 'space-between'}}
  return (
    <AppBar position='static' color='default'>
      <Container maxWidth={false}>
        <Toolbar disableGutters className={classes.toolbar}>
          <img src={logo} alt='comany-logo' className='hidden md:block'/>
          <Typography variant='h6' sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700, 
              // letterSpacing: '.2rem', 
              color: 'inherit',
              textDecoration: 'none',
            }}>
            enum
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', mr: 2, gap: 8}}> 
           {/* sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mr: 2, gap: 8 }}>  */}
            <Button
              variant="text" 
              sx={{ 
              color: activeButton === 0 ? '#008EEF' : 'black', 
              textDecoration: activeButton === 0 ? 'underline' : 'none',
              textTransform: 'none',
              '&:hover': { 
                textDecoration: 'underline',
                color: '#008EEF'
              },
              fontSize: 16,
              fontWeight: 600,
              lineHeight: '27px' 
              }}
              onClick={() => handleClick(0)}  
              className="text-base font-bold"
            >
              Home
            </Button>

            <Button 
              variant="text" 
              sx={{ 
              color: activeButton === 1 ? '#008EEF' : 'black', 
              textDecoration: activeButton === 1 ? 'underline' : 'none',
              textTransform: 'none',
              '&:hover': { 
                textDecoration: 'underline',
                color: '#008EEF'
              },
              fontSize: 16,
              fontWeight: 600,
              lineHeight: '27px' 
              }}
              onClick={() => handleClick(1)}  
              className="text-base font-bold"
            >
              Workspace
            </Button> 
            
            <Button 
              variant="text" 
              sx={{ 
              color: activeButton === 2 ? '#008EEF' : 'black', 
              textDecoration: activeButton === 2 ? 'underline' : 'none',
              textTransform: 'none',
              '&:hover': { 
                textDecoration: 'underline',
                color: '#008EEF'
              },
              fontSize: 16,
              fontWeight: 600,
              lineHeight: '27px'
              }}
              onClick={() => handleClick(2)}  
              className="text-base font-bold"
            >
              Resources Library
            </Button>
          </Box>

          <div className='hidden md:flex md:flex-row gap-6'>
            <IconButton sx={{ p: 0, ml: 2}}>
              <NotificationsNoneOutlinedIcon />
            </IconButton> 

            <Avatar src="/broken-image.jpg" style={{color: '#008EEF'}} />

            <Button
              variant="text"
              onClick={handleMenuClick}
              sx={{ 
              display: { xs: 'none', md: 'flex' },
              textTransform: 'none',
              color: 'black' // Set the color to black
              }}
              endIcon={<ExpandMoreIcon/>}
            >
              Onomowano
            </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleMenuItemClick('Option 1')}>Option 1</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Option 2')}>Option 2</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Option 3')}>Option 3</MenuItem>
              </Menu>

              <div style={{ display: { xs: 'none', md: 'block' } as any }}  >
                <img src={ham} alt="hamburger" />
              </div>

          </div> 

          {isMobile && (
            <MobileNav />
          )}

          

        </Toolbar>

      </Container>
    </AppBar>
  )
}

export default Nav