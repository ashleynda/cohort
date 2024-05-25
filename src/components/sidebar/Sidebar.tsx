import { setShowCohort } from '../WorkspaceLayout';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import { FiBriefcase } from "react-icons/fi";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from "@mui/material";
import Mobileoption from '../mobile/MobileOption';

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

const Sidebar = () => {
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
        <div className='w-[300px] h-4/5 relative'>
            {!isMobile && (
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
            )}
            <Mobileoption />
        </div>
    );
};

export default Sidebar;








