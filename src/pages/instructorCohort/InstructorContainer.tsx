// import React, { useEffect } from 'react'
// import InstructorItem from './InstructorItem'
// import { useDispatch, useSelector } from 'react-redux'
// import { Box, Button, Typography, useTheme } from '@mui/material';
// import Cohorts from '../workspace/Cohorts';



// interface Cohort {
//     id: number;
//     name: string;
//     description: string;
//     program: string;
//     startDate: string;
//     endDate: string;
//     // Add other properties as needed
// }

// const InstructorContainer = () => {
//     const theme = useTheme();
//     const dispatch = useDispatch();
//     const { viewCohorts, value } = useSelector((state: any) => state.view);

//     // useEffect(() => {
//     //     // Fetch and set viewCohorts and value from your API or wherever you're getting data
//     //     // Example:
//     //     // const newViewCohorts: Cohort[] = [viewCohorts]; // Fetch viewCohorts from your API
        
//     //     const newValue = 4; // Fetch value from your API
//     //     dispatch(setViewCohorts(viewCohorts));
//     //     dispatch(setValue(newValue));
//     // }, [dispatch, viewCohorts]);
//     // !viewCohorts || viewCohorts.length < 1
//     if (value < 1) {
//         console.log("View Cohorts Length:", value || 0);
//         return (
//             <Cohorts />
//         );
//     }


//     return (
//         <section className='cart'>
//             <header>
//                 <h2>classes</h2>
//             </header>
//             <div>
//                 {viewCohorts.map((item: Cohort) =>{
//                     return <InstructorItem key={item.id} {...item} />;

//                 })}
//             </div>

//         </section>
//     )
// }

// export default InstructorContainer


import { Container } from '@mui/material'
import React from 'react'

const InstructorContainer = () => {
  return (
    <div>
        <Container>
            here we are
        </Container>
    </div>
  )
}

export default InstructorContainer