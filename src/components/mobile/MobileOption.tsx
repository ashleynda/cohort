import React, { useState } from 'react';
import { Button, FormControl, MenuItem, SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import { FiBriefcase } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from "@mui/material";
import { setShowCohort } from '../WorkspaceLayout';

const sideBar = [
  {
      title: 'Cohorts',
      icon: <GroupIcon />,
      path: '/cohorts',
  },
  {
      title: 'Programs',
      icon: <ImportContactsTwoToneIcon />,
      path: '/programs',
  },
  {
      title: 'Instructors',
      icon: <FiBriefcase />,
      path: '/instructors',
  },
  {
      title: 'Learners',
      icon: <PersonIcon />,
      path: '/learners',
  },
];

const Mobileoption: React.FC = () => {
  // const [activeButton, setActiveButton] = useState<number | string>('');
  const [age, setAge] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  const handleButtonClick = (index: number) => {
      setActiveButton(index);
      switch (index) {
          case 0:
              console.log("Navigate to cohorts");
              setShowCohort(true);
              break;
          case 1:
              console.log("Navigate to programs");
              setShowCohort(false);
              break;
          case 2:
              console.log("Navigate to instructors");
              setShowCohort(false);
              break;
          case 3:
              console.log("Navigate to learners");
              setShowCohort(false);
              break;
          default:
              break;
      }
  };

  return (
    <div className="md:hidden px-16 py-6">
      <p className="justify-start flex">Switch between tabs</p>
      <Box sx={{ minWidth: 300 }}>
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label" >
          <GroupIcon style={{ verticalAlign: 'middle', marginRight: '8px', color: 'black' }} />
            Cohorts</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            // label="Age"
            onChange={handleChange}
            sx={{
              '& .MuiMenuItem-root': {
                fontWeight: 'bold',
                color: 'orange',
              },
            }}
          >
          <MenuItem>
            <div className='flex flex-col pt-6 gap-4 items-start p-16'> 
            {sideBar.map((item, index) => (
              <Button
                  key={index}
                  variant='text'
                  sx={{
                      textTransform: 'none',
                      color: activeButton === index ? '#008EEF' : 'black',
                      '&:hover': {
                          backgroundColor: '#F6FCFF',
                          color: '#008EEF',
                      },
                      fontSize: 16,
                      lineHeight: '27px',
                      fontFamily: 'DM Sans',
                      fontWeight: '700',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      width: '100%',
                  }}
                  startIcon={item.icon}
                  onClick={() => handleButtonClick(index)}
              >
                  {item.title}
              </Button>
          ))}
          </div>
          </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Mobileoption;
