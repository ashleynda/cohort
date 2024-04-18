// import React from 'react'
// import logo from '../../assets/logo.png'
// import { Link } from 'react-router-dom'
// import { AppBar, Container, FormControl, InputLabel, MenuItem, Select, Toolbar } from '@mui/material'
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { AppBar, Button, FormControl, InputLabel, MenuItem, Select, Toolbar } from "@mui/material"
import logo from '../../assets/logo.png'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import SplitButton from "../button/SplitButton";
import { useState } from "react";

// const linkStyle = () => "text-black-600 font-2xl text-base "

const Nav = () => {
  const [activeButton, setActiveButton] = useState(0); // Initial active button is 0

  const handleClick = (index: number) => {
    setActiveButton(index);
  };
  return (

    <AppBar position="static" color="default"  >
    <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className='flex flex-row gap-80 ' >
        <div className='flex flex-row justify-center items-center pr-64'>
          <img src={logo} alt="company-logo" />
          <h1 className='text-blue-600 font-8xl font-medium'>enum</h1>
        </div>
        {/* <div className='flex justify-center items-center gap-12'>
          <Button variant="text" color={activeButton === 0 ? 'primary' : '#F6FCFF'} // Set color based on active state
    onClick={() => handleClick(0)}  className="text-base font-bold text-black">Home</Button>
          <Button variant="text" color={activeButton === 0 ? 'primary' : '#F6FCFF'} // Set color based on active state
    onClick={() => handleClick(0)}  className="text-base font-bold">Workspace</Button>
          <Button cvariant="text" color={activeButton === 0 ? 'primary' : '#F6FCFF'} // Set color based on active state
    onClick={() => handleClick(0)}  className="text-base font-bold">Resources Library</Button>
        </div> */}
        <div className='flex justify-center items-center gap-12'>
            <Button 
              variant="text" 
              sx={{ 
                color: activeButton === 0 ? '#008EEF' : 'black', 
                textDecoration: activeButton === 0 ? 'underline' : 'none',
                '&:hover': { 
                  textDecoration: 'underline',
                  color: '#008EEF'
                },
                fontSize: 16,
                fontWeight: 700,
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
                '&:hover': { 
                  textDecoration: 'underline',
                  color: '#008EEF'
                },
                fontSize: 16,
                fontWeight: 700,
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
                '&:hover': { 
                  textDecoration: 'underline',
                  color: '#008EEF'
                },
                fontSize: 16,
                fontWeight: 700,
                lineHeight: '27px'
              }}
              onClick={() => handleClick(2)}  
              className="text-base font-bold"
            >
              Resources Library
            </Button>
          </div>
        <div className="flex flex-row gap-8">
          <NotificationsNoneOutlinedIcon />
          <div className="flex flex-row gap-4">
            <Avatar src="/broken-image.jpg" style={{color: '#008EEF'}} />
            <SplitButton />
            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Ashley</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={ashley}
                  label="Ashley"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl> */}
          </div>
        </div> 
      </div>
    </Toolbar>
  </AppBar>
    );
  }
  
  export default Nav
    // <Container maxWidth="md" >
     
       {/* <div className='flex flex-row gap-12  shadow-sm'>
      <div className='flex flex-row justify-center items-center '>
        <img src={logo} alt="company-logo" />
        <h1 className='text-blue-600 font-8xl font-medium'>enum</h1>
      </div> */}

      {/* <div className='flex justify-center items-center gap-12'>
        <p>
          <Link to={"/home"} className={linkStyle()} underline="hover">Home
          {/* {'underline="hover"'} */}
          {/* </Link>
        </p>
        <p>
          <Link to={"/workspace"} className={linkStyle()}>Workspace</Link>
        </p>
        <p>
          <Link to={"/resourcesLibrary"} className={linkStyle()}>Resources Library</Link>
        </p>
      </div> */} 
      {/* <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Ashley</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={ashley}
              label="Ashley"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
      </div> */}
    {/* </div> */}

    // </Container>

   
   
