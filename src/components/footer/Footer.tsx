import React, { useState } from 'react';
import { BottomNavigation, Button } from '@mui/material';
import { FiBriefcase } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';

const Footer: React.FC = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<string>(location.pathname);

  const handleClick = (value: string) => {
    setActiveButton(value);
  };

  return (
    <div className="sm:hidden block">
      <div className="flex flex-row justify-evenly gap-4" style={{ boxShadow: '-1px -4px 8px 0px #008EEF14', width: 'fit-content' }}>
        <div>
          <Link to="/home">
            <Button
              className="flex flex-col"
              variant="text"
              sx={{
                textTransform: 'none',
                color: activeButton === '/home' ? '#008EEF' : '#9CABB5',
                '&:hover': {
                  backgroundColor: '#F6FCFF',
                  color: '#008EEF',
                },
                fontSize: 16,
                lineHeight: '27px',
              }}
              onClick={() => handleClick('/home')}
              startIcon={<HomeOutlinedIcon />}
            >
              Home
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/workspace">
            <Button
              className="flex flex-col"
              variant="text"
              sx={{
                textTransform: 'none',
                color: activeButton === '/workspace' ? '#008EEF' : '#9CABB5',
                '&:hover': {
                  backgroundColor: '#F6FCFF',
                  color: '#008EEF',
                },
                fontSize: 16,
                lineHeight: '27px',
              }}
              onClick={() => handleClick('/workspace')}
              startIcon={<FiBriefcase />}
            >
              Workspace
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/resources">
            <Button
              className="flex flex-col"
              variant="text"
              sx={{
                textTransform: 'none',
                color: activeButton === '/resources' ? '#008EEF' : '#9CABB5',
                '&:hover': {
                  backgroundColor: '#F6FCFF',
                  color: '#008EEF',
                },
                fontSize: 16,
                lineHeight: '27px',
              }}
              onClick={() => handleClick('/resources')}
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
                color: activeButton === '/schedule' ? '#008EEF' : '#9CABB5',
                '&:hover': {
                  backgroundColor: '#F6FCFF',
                  color: '#008EEF',
                },
                fontSize: 16,
                lineHeight: '27px',
              }}
              onClick={() => handleClick('/schedule')}
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
