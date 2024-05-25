import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import InstructorCohort from '../pages/instructorCohort/InstructorCohort';
import Cohorts from '../pages/workspace/Cohorts';
import { useSelector } from 'react-redux'; 



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

export default Layout; 
