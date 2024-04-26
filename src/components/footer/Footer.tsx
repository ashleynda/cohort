import React, { useState } from 'react';
import { Button } from '@mui/material';
import { FiBriefcase } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';

const Footer: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('');

  const handleClick = (value: string) => {
    setActiveButton(value);
  };

  return (
    <div className="sm:hidden block mt-72">
      <div className="flex flex-row justify-evenly">
        <div>
          <Link to="/homepage">
            <Button
              className="flex flex-col"
              variant="text"
              sx={{
                textTransform: 'none',
                color: activeButton === 'Home' ? '#008EEF' : 'black',
                '&:hover': {
                  backgroundColor: '#F6FCFF',
                  color: '#008EEF',
                },
                fontSize: 16,
                lineHeight: '27px',
              }}
              onClick={() => handleClick('Home')}
              startIcon={<HomeOutlinedIcon />}
            >
              Home
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/organization">
            <Button
              className="flex flex-col"
              variant="text"
              sx={{
                textTransform: 'none',
                color: activeButton === 'Workspace' ? '#008EEF' : 'black',
                '&:hover': {
                  backgroundColor: '#F6FCFF',
                  color: '#008EEF',
                },
                fontSize: 16,
                lineHeight: '27px',
              }}
              onClick={() => handleClick('Workspace')}
              startIcon={<FiBriefcase />}
            >
              Workspace
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/resourceslibrarypage">
            <Button
              className="flex flex-col"
              variant="text"
              sx={{
                textTransform: 'none',
                color: activeButton === 'Resources' ? '#008EEF' : 'black',
                '&:hover': {
                  backgroundColor: '#F6FCFF',
                  color: '#008EEF',
                },
                fontSize: 16,
                lineHeight: '27px',
              }}
              onClick={() => handleClick('Resources')}
              startIcon={<ImportContactsTwoToneIcon />}
            >
              Resources
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/schedule">
            <Button
              className="flex flex-col"
              variant="text"
              sx={{
                textTransform: 'none',
                color: activeButton === 'Schedule' ? '#008EEF' : 'black',
                '&:hover': {
                  backgroundColor: '#F6FCFF',
                  color: '#008EEF',
                },
                fontSize: 16,
                lineHeight: '27px',
              }}
              onClick={() => handleClick('Schedule')}
              startIcon={<CalendarTodayOutlinedIcon />}
            >
              Schedule
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
