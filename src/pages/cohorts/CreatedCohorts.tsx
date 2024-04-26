// import React from 'react';
// import { Container, TextField, InputAdornment, Button, IconButton, MenuItem, Menu, Paper, Typography, Box } from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Workspace from '../workspace/Workspace';

// const options = [
//   'None',
//   'Atria',
//   'Callisto',
//   'Dione',
//   'Ganymede',
//   'Hangouts Call',
//   'Luna',
//   'Oberon',
//   'Phobos',
//   'Pyxis',
//   'Sedna',
//   'Titania',
//   'Triton',
//   'Umbriel',
// ];

// const ITEM_HEIGHT = 48;

// const CreatedCohorts = () => {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  
//   return (
//     <div>
//       {/* <Workspace/> */}
//       <Container style={{display:'flex', alignItems:'center', justifyContent: 'space-between', padding: '30px'}}>
//             <Autocomplete
//               freeSolo
//               id="free-solo-2-demo"
//               disableClearable
//               options={top100Films.map((option) => option.title)}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   // label="Search input"
//                   InputProps={{
//                     ...params.InputProps,
//                     type: 'search',
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <SearchIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                   placeholder="Search" // Use placeholder prop directly
//                   sx={{ display: 'flex', width: '50vh', flexDirection: { xs: "column", md: 'row' } }}
//                 />
//               )}
//             />
//             <div className='flex gap-2'>
//               <Button variant='contained' disableRipple>Create a cohort</Button>
//               <Button variant='outlined' endIcon={<MoreVertIcon />}
//               onClick={handleClick}
//               >More Actions</Button>
//               <Menu
//                 id="long-menu"
//                 MenuListProps={{
//                   'aria-labelledby': 'long-button',
//                 }}
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 PaperProps={{
//                   style: {
//                     maxHeight: ITEM_HEIGHT * 4.5,
//                     width: '22ch',
//                   },
//                 }}
//               >
//             {top100Films.map((option) => (
//               <MenuItem key={option.title} selected={option.title === 'Pyxis'} onClick={handleClose} sx={{
//                 '&:hover': {
//                   backgroundColor: '#C5E7FF',
//                 },
//               }}>
//                 {option.title}
//               </MenuItem>
//             ))}
//           </Menu>
//         </div>
//       </Container>
//       <div style={{ marginTop: '20px', padding: '0 ', display: 'flex', justifyContent: 'center' }}>
//         <Paper elevation={3} sx={{ maxWidth: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}} > 
//         <div>
//             <Typography variant='body2'>Cohort1</Typography>
//             <Typography >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Hic sapiente distinctio iste nulla veritatis quo soluta voluptatibus placeat,
//               officiis commodi aperiam praesentium sequi pariatur ad aliquam facilis cupiditate incidunt molestiae?
//             </Typography>
//           </div>
//           <IconButton aria-label="more">
//           <MoreVertIcon />
//           </IconButton>
      
//         </Paper>
//       </div>
//     </div>
//   );
// };

// const top100Films = [
//   { title: 'Publish a poll'},
//   { title: 'Schedule an event' },
//   { title: 'Make an announcement' },
// ];

// export default CreatedCohorts;

import React from 'react';
import { Container, TextField, InputAdornment, Button, IconButton, MenuItem, Menu, Paper, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ITEM_HEIGHT = 48;

const CreatedCohorts = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Container style={{ padding: '30px' }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                type: 'search',
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search"
              sx={{ width: '100%' }}
            />
          )}
        />
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <Button variant='contained' disableRipple style={{ marginRight: '10px' }}>Create a cohort</Button>
          <Button variant='outlined' endIcon={<MoreVertIcon />} onClick={handleClick}>More Actions</Button>
          <Menu
            id="long-menu"
            MenuListProps={{ 'aria-labelledby': 'long-button' }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: '22ch' } }}
          >
            {top100Films.map((option) => (
              <MenuItem key={option.title} selected={option.title === 'Pyxis'} onClick={handleClose}>
                {option.title}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Container>
      <Container style={{ padding: '10px' }}>
        {top100Films.map((film, index) => (
          <Paper key={index} elevation={3} style={{ marginBottom: '20px', padding: '10px', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <Typography variant='body2'>{film.title}</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Hic sapiente distinctio iste nulla veritatis quo soluta voluptatibus placeat,
                officiis commodi aperiam praesentium sequi pariatur ad aliquam facilis cupiditate incidunt molestiae?
              </Typography>
            </div>
            <IconButton aria-label="more">
              <MoreVertIcon />
            </IconButton>
          </Paper>
        ))}
      </Container>
    </div>
  );
};

const top100Films = [
  { title: 'Publish a poll' },
  { title: 'Schedule an event' },
  { title: 'Make an announcement' },
];

export default CreatedCohorts;
