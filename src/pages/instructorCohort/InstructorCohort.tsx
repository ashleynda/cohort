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

  const mobileStyle = {
    width: '100px', 
  };



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
    dispatch(createCohort(formData));
  };
  
  

  
    return (
      <div className='flex flex-col w-[100%]  '>
        <Container maxWidth={false} style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
            <p className=' hidden md:flex md:text-2xl flex font-semibold font-serif '>
              Cohorts
            </p>
            <div className='flex flex-col gap-6 md:gap-0 md:flex-row w-full justify-between items-center mt-2'> 
              <div className='hidden sm:block'>              
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
              </div>

              <div className='flex justify-between gap-6 w-[350px] md:w-auto items-center'>
                <CreateCohort onFileUpload={onFileUpload} onFileClear={onFileClear} onCreateCohort={handleCreateCohort} />
                <Button 
                  variant='outlined' 
                  disableRipple 
                  endIcon={<MoreVertIcon onClick={handleClick}/>} 
                  sx={{ color: '#142E70'}} 
                  style={{display: 'flex', padding:'12px 12px 12px 19px', alignSelf: 'center', fontFamily: 'DM Sans', textTransform: 'none', color: '#142E70', fontSize: '14px', fontWeight: '700',
                    border: '1.5px solid #AAB7DB', borderRadius: '8px',
                  }} 
                >More Actions</Button>
                <Menu
                  id="long-menu"
                  MenuListProps={{ 'aria-labelledby': 'long-button' }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  {moreActions.map((option) => (
                    <MenuItem key={option.title} selected={option.title === 'Pyxis'} onClick={handleClose}>
                      {option.title}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
              <div className='block md:hidden'>
                <Stack spacing={1} sx={{ width: 350, height: '44px' }}>            
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
            </div>
            </div>
        </Container>

          <Container maxWidth={false} style={{ padding: '20px' }}>
            <div className='flex flex-col justify-start'>
          

              {viewCohorts?.filter((item:Cohort ) => inputValue === '' ? item : item.cohortName.toLowerCase().includes(inputValue.toLowerCase())).map((item: Cohort, index: number) => {
                let startDate: Date | null = null;
                let formattedStartDateString: string = "";
              
                if (item.startDate) {
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
                  <Card key={item.id} style={{ marginBottom: '20px', padding: '10px', display: 'flex', border: '1px #F6FCFF', boxShadow: '0px 8px 16px 0px rgba(240, 249, 255, 0.5)', borderRadius: '8px' }}>
                      <img src={simonLeeImage} alt="Simon Lee" className='w-20 md:w-12 h-20 md:h-12 rounded-lg'/>
                      <div className='flex flex-col md:flex-row w-[100%] justify-between'>
                        <div className='flex flex-col justify-center items-start px-4'>
                          <Typography className='flex text-base font-sans font-bold' style={{color: '#1E323F', fontFamily: 'DM Sans', fontWeight: '700'}}>{item.cohortName}</Typography>
                          <div className='flex flex-col md:flex-row text-center justify-between '>
                            <Typography className='flex' style={{fontFamily: 'DM Sans', color: '#1E323F', fontSize: '12px', fontWeight: '500', width: '150px'}}>{item.program}</Typography>  
                            <div className='flex text-center items-center gap-2 w-fit '>
                              <PersonOutlineOutlinedIcon style={{color: '#9CABB5', width: '12px' }} /> 
                              <p className='text-gray-600 text-xs'>25 Learners</p>  
                            </div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}> 
                          <Typography style={{ textAlign: 'center', fontSize: 14, color: '#4F4F4F' }}>Created {formattedStartDateString}</Typography>
                        </div> 
                      </div>
                      <IconButton aria-label="more" className='flex h-fit md:h-auto '>
                       <MoreVertIcon className= 'h-fit'/>
                       <Menu
                        id="long-menu"
                        MenuListProps={{ 'aria-labelledby': 'long-button' }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: '22ch' } }}
                      >
                        {action.map((option) => (
                          <MenuItem key={option.title} selected={option.title === 'Pyxis'} onClick={handleClose}>
                            {option.title}
                          </MenuItem>
                        ))}
                      </Menu>
                      </IconButton>

                    </Card>
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
    
  ]
  
export default InstructorCohort;



 