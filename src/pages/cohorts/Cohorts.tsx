// import { Group } from '@mui/icons-material'
// import React from 'react'
// import CloudSleep from '../../assets/CloudSleep.png'
// import { Button, Typography } from '@mui/material'
// import Modal from '@mui/material/Modal';
// import CreateCohort from './CreateCohort';


// const Cohorts = () => {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//   return (
//     <div className='w-full h-4/5 relative  '>
//         <p className='text-2xl flex font-semibold font-serif pt-8'>Cohorts</p>        

//         <div className='flex flex-col justify-center items-center p-40'>
//             <img src={CloudSleep} />
//             <Typography variant='h6'>
//                 Empty Space
//             </Typography>
//             <Typography gutterBottom>
//                 No cohort has been created yet, let’s get you started by<br/>
//                 clicking the button below

//             </Typography>
//             <Button  variant="contained" 
//                 color="primary" 
//                 sx={{ textTransform: 'none' }} // Apply textTransform through the sx prop
//                 className='text-base font-bold'
//                 onClick={handleOpen}
//             >
//             Create a Cohort
//             </Button>
//             <Modal
//                     open={open}
//                     onClose={handleClose}
//                     aria-labelledby="modal-modal-title"
//                     aria-describedby="modal-modal-description"
//                 >
//                     <div className="modal-content">
//                         {/* Include the CreateCohort component here */}
//                         <CreateCohort />
//                     </div>
//                 </Modal>
            

//         </div>

//     </div>
//   )
// }

// export default Cohorts
import React, { useState } from 'react'
import { Button, Typography, Modal } from '@mui/material';
import { useMediaQuery, useTheme } from "@mui/material";
import CreateCohort from './CreateCohort';
import CloudSleep from '../../assets/CloudSleep.png'
import CreateCohortMobile from './CreateCohortMobile';
// import Button from '@mui/joy/Button'

const Cohorts = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isModalOpen, setIsModalOpen] = useState('');

    const [isCreateCohortMobile, setIsCreateCohortMobile] = useState(false);
    const [layout, setLayout] = React.useState<"center" | "fullscreen" | undefined>(undefined);


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
        <div className={isMobile ? '':'w-full h-4/5 relative'}>
            {!isMobile && ( // Render only if not on mobile
                <p className='text-2xl flex font-semibold font-serif pt-8'>Cohorts</p>
            )}
            
            <div className={isMobile ? 'flex flex-col justify-center items-center pl-20 pr-20 mt-20 ' : 'flex flex-col justify-center items-center p-40'}>
                <img src={CloudSleep} />
                <Typography variant='h6' className={isMobile ? 'text-lg text-gray-900 font-bold': 'text-xl'}>
                    Empty Space
                </Typography>
                <Typography gutterBottom>
                    No cohort has been created yet, let’s get you started by<br/>
                    clicking the button below
                </Typography>
                <Button  
                    variant="contained" 
                    color="primary" 
                    sx={{ textTransform: 'none' }} 
                    className='text-base font-bold'
                    onClick={handleCreateCohort}
                    
                >
                    Create a Cohort
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="modal-content">
                        Include the CreateCohort component here
                        <CreateCohort />
                    </div>
                </Modal>  
                
            </div>
        </div>
    );
};

export default Cohorts;
