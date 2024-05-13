import React, { useEffect, useState } from 'react';
import { Container, TextField, InputAdornment, Button, IconButton, MenuItem, Menu, Paper, useTheme, Typography, useMediaQuery, Card, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import simonLeeImage from '../../assets/simon-lee-J-Fr6LalosU-unsplash.jpg';
import CreateCohort from '../cohorts/CreateCohort';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Stack from '@mui/joy/Stack';
import { createCohort } from '../../features/cohort/CohortSlice';
// import Autocomplete from '@mui/joy/Autocomplete';


const ITEM_HEIGHT = 48;

const action = [
  {title: 'Delete'},
  { title: 'Schedule an event' },
  { title: 'Make an announcement' },

]

const moreActions = [
  { title: 'Publish a poll' },
  { title: 'Schedule an event' },
  { title: 'Make an announcement' },
];

interface Program {
  id: number;
  programName: string;
}

interface Cohort {
  id: number;
  avatarImageUrl: string;
  cohortName: string;
  description: string;
  program: Program[];
  startDate: string;
  endDate: string;
  // Add other properties as needed
}
interface CreateCohortProps {
  onFileUpload: (file: File) => void;
  onFileClear: () => void;
  onCreateCohort: () => void;
}

const InstructorCohort: React.FC<CreateCohortProps> = ({ onFileUpload, onFileClear }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const { viewCohorts, value, isLoading } = useSelector((store: any) => store.view);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [inputValue, setInputValue] = useState('');
  const formData = useSelector((state: any) => state.cohort.cohortData || { 
    cohortName: '', 
    description: '',
    program: '',
    startDate: null,
    endDate: null,
    files: [],
  });

  // const handleChange = (event) => {
  //   console.log('event------->',event.target.value); // Log the value to the console
  // };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
 
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  
  function getMonthAbbreviation(month: number): string {
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return monthNames[month];
  };

   const handleCreateCohort = () => {
    // Dispatch the create cohort action with form data
    dispatch(createCohort(formData));
  };
  
  

  
    return (
      <div className='flex flex-col w-[80%] items-stretch '>
        {/* {value < 1 && (
          <>
            {console.log("View Cohorts Length:", value || 0)}
            <Cohorts />
          </>
        )} */}
        <Container maxWidth={false} style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
            <p className=' hidden:md md:text-2xl flex font-semibold font-serif '>
              Cohorts
            </p>
            <div className='flex flex-row w-full justify-between items-center mt-2'> 
              <Stack spacing={1} sx={{ width: 438, height: '44px' }}>            
               <FormControl id="free-solo-demo" >
                <Autocomplete
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                )}
                  placeholder="search"
                  freeSolo
                  disableClearable
                  options={cohort.map((option) => option.title)}
                />  
                  </FormControl>
              </Stack>  

              <div className='flex justify-between gap-2 items-center'>
                <CreateCohort onFileUpload={onFileUpload} onFileClear={onFileClear} onCreateCohort={handleCreateCohort} />               
                <Button 
                  variant='outlined' 
                  disableRipple 
                  endIcon={<MoreVertIcon onClick={handleClick}/>} 
                  sx={{ color: '#142E70'}} 
                  style={{display: 'flex', padding:'5px', alignSelf: 'center', fontFamily: 'DM Sans', textTransform: 'none', color: '#142E70', fontSize: '14px', fontWeight: '700',
                    border: '1.5px solid #AAB7DB', borderRadius: '8px',
                  }} 
                >More Actions</Button>
                <Menu
                  id="long-menu"
                  MenuListProps={{ 'aria-labelledby': 'long-button' }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  // PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: '22ch' }}}
                >
                  {moreActions.map((option) => (
                    <MenuItem key={option.title} selected={option.title === 'Pyxis'} onClick={handleClose}>
                      {option.title}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
        </Container>

        {/* {!isMobile && ( */}
          <Container maxWidth={false} style={{ padding: '20px' }}>
            <div className='flex flex-col justify-start'>
          

              {viewCohorts?.filter((item:Cohort ) => inputValue === '' ? item : item.cohortName.toLowerCase().includes(inputValue.toLowerCase())).map((item: Cohort, index: number) => {
                let startDate: Date | null = null;
                let formattedStartDateString: string = "";
              
                if (typeof item.startDate === 'string' && item.startDate.includes('-')) {
                  // If startDate is a string and in the format "YYYY-MM-DD"
                  startDate = new Date(item.startDate);
                  formattedStartDateString = `${startDate.getDate()}${getDaySuffix(startDate.getDate())} ${getMonthAbbreviation(startDate.getMonth())} ${startDate.getFullYear()}`;
                } else {
                  console.error("Invalid startDate:", item.startDate);
                }
              
                if (!startDate) {
                  console.error("Invalid startDate:", item.startDate);
                }
              
                console.log("Parsed start date:", startDate);
                console.log("Formatted start date:", formattedStartDateString);
                
                return (
                  <Card key={item.id} style={{ marginBottom: '20px', padding: '10px', display: 'flex', alignItems: 'center', border: '1px #F6FCFF', boxShadow: '0px 8px 16px 0px rgba(240, 249, 255, 0.5)', borderRadius: '8px' }}>
                    {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
                      <img src={simonLeeImage} alt="Simon Lee" className='w-12 h-12 rounded-lg'/>
                      <div className='flex flex-col justify-center items-start px-4'>
                        <Typography className='flex text-base font-sans font-bold' style={{color: '#1E323F', fontFamily: 'DM Sans', fontWeight: '700'}}>{item.cohortName}</Typography>
                        <div className='flex gap-6 text-center justify-between '>
                          <Typography className='flex' style={{fontFamily: 'DM Sans', color: '#1E323F', fontSize: '12px', fontWeight: '500', width: '150px'}}>{item.program}</Typography>  
                          <div className='flex text-center items-center gap-2 w-fit '>
                            <PersonOutlineOutlinedIcon style={{color: '#9CABB5', width: '12px' }}/> 
                            <p className='text-gray-600 text-xs'>25 Learners</p>  
                          </div>
                        </div>
                      </div>
                      <div style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                        <Typography style={{ textAlign: 'center', fontSize: 14, color: '#4F4F4F' }}>Created {formattedStartDateString}</Typography>
                      </div> 
                      <IconButton aria-label="more" className='flex gap-2'>
                       <MoreVertIcon />
                       {/* <Menu
                        id="long-menu"
                        MenuListProps={{ 'aria-labelledby': 'long-button' }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: '22ch' } }}
                      >
                        {moreActions.map((option) => (
                          <MenuItem key={option.title} selected={option.title === 'Pyxis'} onClick={handleClose}>
                            {option.title}
                          </MenuItem>
                        ))}
                      </Menu> */}
                      </IconButton>

                    {/* </Box> */}
                    </Card>
                  // <Paper key={item.id} elevation={1} style={{ marginBottom: '20px', padding: '10px', display: 'flex', alignItems: 'center', boxShadow: '1px'}}>
                  //   <div style={{ flex: 1 }} className='flex'>
                  //     <div>
                  //       <img src={simonLeeImage} alt="Simon Lee" className='w-12'/>
                  //     </div>
                  //     <div className='flex flex-col justify-center items-start px-4'>
                  //       <Typography className='flex text-base text-gray-900'>{item.cohortName}</Typography>
                  //       <div className='flex gap-6 '>
                  //         <Typography className='flex text-xs'>{item.program}</Typography>  
                  //         <div className='flex text-center items-center gap-2'>
                  //           <PersonOutlineOutlinedIcon style={{color: '#9CABB5', width: '12px' }}/> 
                  //           <p className='text-gray-600 text-xs'>25 Learners</p>  
                  //         </div>
                  //       </div>
                  //     </div>
                  //     <div style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Adjusted here */}
                  //       <Typography style={{ textAlign: 'center', fontSize: 14, color: '#4F4F4F' }}>Created {formattedStartDateString}</Typography>
                  //     </div>
                  //   </div>
                  //   <IconButton aria-label="more">
                  //     <MoreVertIcon />
                  //   </IconButton>
                  // </Paper>
                );
              })}
            </div> 
          </Container>
        {/* )}      */}
      </div>
    );
  }; 
  const cohort = [
    { title: 'Cohort 1' },
    { title: 'Cohort 2' },
    { title: 'Cohort 3' },
    { title: 'Cohort 4' },
    { title: 'Cohort 5' },
    { title: 'Cohort 6' },
    { title: 'Cohort 7' },
    { title: 'Cohort 8' },
    { title: 'Cohort 9' },
    { title: 'Cohort 10' },

  ]
  
export default InstructorCohort;



  {/* {viewCohorts.map((item: Cohort, index: number) => {
              let startDate: Date | null = null;
              let formattedStartDateString: string = "";
            
              if (typeof item.startDate === 'string' && item.startDate.includes('-')) {
                // If startDate is a string and in the format "YYYY-MM-DD"
                startDate = new Date(item.startDate);
                formattedStartDateString = `${startDate.getDate()}${getDaySuffix(startDate.getDate())} ${getMonthAbbreviation(startDate.getMonth())} ${startDate.getFullYear()}`;
              } else if (item.startDate instanceof Date) {
                startDate = item.startDate;
                formattedStartDateString = `${startDate.getDate()}${getDaySuffix(startDate.getDate())} ${getMonthAbbreviation(startDate.getMonth())} ${startDate.getFullYear()}`;
              } else {
                console.error("Invalid startDate:", item.startDate);
              }
            
              if (!startDate) {
                console.error("Invalid startDate:", item.startDate);
              }
            
              console.log("Parsed start date:", startDate);
              console.log("Formatted start date:", formattedStartDateString);     */}

            {/* {viewCohorts.map((item: Cohort, index: number) => {
              let startDate: Date | null = null;
              let formattedStartDateString: string = "";

              if (typeof item.startDate === 'string' && item.startDate.includes('-')) {
                // If startDate is a string and in the format "YYYY-MM-DD"
                startDate = new Date(item.startDate);
                formattedStartDateString = `${startDate.getDate()}${getDaySuffix(startDate.getDate())} ${getMonthAbbreviation(startDate.getMonth())} ${startDate.getFullYear()}`;
              } else if (item.startDate instanceof Date) {
                startDate = item.startDate;
                formattedStartDateString = `${startDate.getDate()}${getDaySuffix(startDate.getDate())} ${getMonthAbbreviation(startDate.getMonth())} ${startDate.getFullYear()}`;
              } else {
                console.error("Invalid startDate:", item.startDate);
              }

              if (!startDate) {
                console.error("Invalid startDate:", item.startDate);
              }

              console.log("Parsed start date:", startDate);
              console.log("Formatted start date:", formattedStartDateString); */}















  // useEffect(() => {
    // dispatch(getViewCohorts() as any);
  // },[]);

  // if (isLoading) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }


   {/* {value >= 1 && (
          <section className='cart'>
            <header>
              <h2>Classes</h2>
            </header>
            <div className='flex flex-col justify-start'>
              {viewCohorts && viewCohorts.map((item: Cohort, index: number) => (
                <Paper key={item.id} elevation={3} style={{ marginBottom: '20px', padding: '10px', display: 'flex', alignItems: 'center'}}>
                  <div style={{ flex: 1 }}> */}
                    {/* <InstructorItem {...item} /> */}
                  {/* </div>
                  <IconButton aria-label="more">
                    <MoreVertIcon />
                    </IconButton>
                // </Paper>
              ))}
            </div>
          </section>
        )} */}
        

        {/* <div className='flex flex-col justify-start'>
          {viewCohorts.map((item: Cohort, index: number) => (
            
            <Paper key={item.id} elevation={3} style={{ marginBottom: '20px', padding: '10px', display: 'flex', alignItems: 'center'}}>
              <div style={{ flex: 1 }} className='flex'>
                <div>
                  <img src={simonLeeImage} alt="Simon Lee" className='w-20'/>
                </div>
                <div>
                <Typography variant="h6">{item.cohortName}</Typography>
                <Typography>{item.description}</Typography>
                <Typography>Program: {item.program.programName}</Typography>
                </div>
                <div>
                  <Typography>Created {item.startDate.toString()}</Typography>
                
                </div>

                {/* Render additional information here */}
                {/* Render content here */}
              {/* </div>
               <IconButton aria-label="more">
                <MoreVertIcon />
              </IconButton>
            </Paper>  */}
          {/* ))} */}
        {/* </div>  */}




          {/* <Autocomplete
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search"
                    variant="outlined"
                    InputProps={{
                      // ...params.InputProps,
                      // startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              /> */}
