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

import React from 'react';
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

const Layout = () => {
  const cohortCount = useSelector((state) => state.cohort.cohortCount);

  return (
    <div className='flex flex-col gap-24 md:flex-row w-full items-start'>
      <Sidebar />
      {cohortCount === 0? <Cohorts /> : <InstructorCohort />} {/* Conditional rendering of InstructorCohort */}
    </div>
  );
};

export default Layout;
