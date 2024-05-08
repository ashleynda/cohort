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
                <div className=' md:w-full h-4/5 relative'>
            {!isMobile && ( // Render only if not on mobile
                <p className='text-2xl flex font-semibold font-serif pt-8'>Cohorts</p>
            )}
            
            <div className={isMobile ? 'flex flex-col justify-center items-center md':'flex flex-col justify-center items-center py-28 pr-32'}>
                <img src={CloudSleep} alt=''/>
                <Typography variant='h6' className={isMobile ? 'text-lg text-gray-900 font-bold': 'text-xl'}>
                    Empty Space
                </Typography>
                <Typography gutterBottom className='md:mr-2'>
                    No cohort has been created yet, let’s get you started by<br/>
                </Typography>
                <Typography >
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
                {isMobile &&
                <Footer/>
                }
                
            </div>
        </div>
        )
    // );
};

export default Cohorts;
