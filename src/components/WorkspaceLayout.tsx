// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Sidebar from './sidebar/Sidebar'
// import Nav from './nav/Nav'
// import Hero from '../pages/workspace/Hero'
// import InstructorCohort from '../pages/instructorCohort/InstructorCohort'
// import Cohorts from '../pages/workspace/Cohorts'
// import { IconButton, Paper } from '@mui/material'
// import InstructorItem from '../pages/instructorCohort/InstructorItem'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { getViewCohorts } from '../features/cohort/viewSlice'

// const Layout = () => {
//   const value = 1;
//   return (
//     <div className='flex flex-col gap-24 md:flex-row w-full items-start'>
//         <Sidebar/>
//         {value >= 1 && (
//           <section className='cart'>
//             <div className='flex flex-col justify-start'>
//               {getViewCohorts && getViewCohorts.map((item: Cohort, index: number) => (
//                 <Paper key={item.id} elevation={3} style={{ marginBottom: '20px', padding: '10px', display: 'flex', alignItems: 'center'}}>
//                   <div style={{ flex: 1 }}>
//                     <InstructorItem {...item} />
//                   </div>
//                   <IconButton aria-label="more">
//                     <MoreVertIcon />
//                     </IconButton>
//                 </Paper>
//               ))}
//             </div>
//           </section>
//         )}
//         <Cohorts/>
//         {/* <InstructorCohort/> */}

//     </div>
//   )
// }

// export default Layout;

import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Nav from './nav/Nav';
import Hero from '../pages/workspace/Hero';
import InstructorCohort from '../pages/instructorCohort/InstructorCohort';
import Cohorts from '../pages/workspace/Cohorts';
import { IconButton, Paper } from '@mui/material';
import InstructorItem from '../pages/instructorCohort/InstructorItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux'; // Import useSelector hook to access Redux state
import { getViewCohorts } from '../features/cohort/viewSlice';
import viewCohorts from '../viewCohorts';
import { truncate } from 'fs/promises';


export let showCohort: boolean, setShowCohort: (value: boolean) => void;

const Layout = () => {
  [showCohort, setShowCohort] = useState(true);

  useEffect(() => {
    console.log('showCohort', showCohort);
  }, [showCohort]); // Include showCohort in the dependency array

  const cohortCount = useSelector((state) => state.cohort.cohortCount);

  return (
    <div className='flex flex-col gap-24 md:flex-row w-full items-start'>
      <Sidebar />
      {showCohort ? (cohortCount === 0 ? <Cohorts /> : <InstructorCohort />) : null}
    </div>
  );
};

export default Layout; // Export the component as default
