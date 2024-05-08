import React, { useState } from 'react'
import { Button, Typography, Modal } from '@mui/material';
import { useMediaQuery, useTheme } from "@mui/material";
import CreateCohort from '../cohorts/CreateCohort';
import CloudSleep from '../../assets/CloudSleep.png'
import Footer from '../../components/footer/Footer';


const Cohorts = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isModalOpen, setIsModalOpen] = useState('');

    const [isCreateCohortMobile, setIsCreateCohortMobile] = useState(false);
    const [layout, setLayout] = React.useState<"center" | "fullscreen" | undefined>(undefined);

    const cohorts = [];


    const handleCreateCohort = () => {
        if (isMobile) {
            setIsCreateCohortMobile(true); // Render CreateCohortMobile if mobile
            handleOpen(); // Open the modal
        } else {
            setIsCreateCohortMobile(false); // Render CreateCohort if web
            handleOpen(); // Open the modal
        }
    };

    

    return (
        // pageLength > 0 ? (
            //     <InstructorCohort />
            // ) : (
        <div className=' flex flex-col p-5 justify-center md:w-full h-fit relative md:justify-between'>
            {!isMobile && ( 
                <p className='text-2xl flex font-semibold font-serif pt-8'>Cohorts</p>
            )}
            
            <div className={isMobile ? 'flex flex-col justify-center items-center p-6':'flex flex-col justify-center items-center py-28'}>
                <img src={CloudSleep} alt=''/>
                <Typography variant='h6' className={isMobile ? 'text-lg text-gray-900 font-bold': 'text-xl'}>
                    Empty Space
                </Typography>
                <Typography gutterBottom
                    style={{display:'flex', justifyContent: 'center', paddingLeft: 5, paddingRight:5, textAlign: 'center', maxWidth: 450}}>
                    No cohort has been created yet, let’s get you started by
                    clicking the button below.
                </Typography>
                <CreateCohort />
                {/* <Button  
                    variant="contained" 
                    color="primary" 
                    sx={{ textTransform: 'none' }} 
                    className='text-base font-bold'
                    onClick={handleCreateCohort}
                    
                >
                    Create a Cohort
                </Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="modal-content">
                        <CreateCohort />
                    </div>
                </Modal> 
                 
                              
            </div>
            
        </div>
        )
    // );
};

export default Cohorts;
