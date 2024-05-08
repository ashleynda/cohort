import React from 'react'
import { Paper } from '@mui/material';

interface Program {
  id: number;
  programName: string;
}


interface InstructorItemProps {
  cohortName: string;
  description: string;
  program: Program[];
  startDate: string; // Assuming the dates are in string format for now
  endDate: string;
  avatarImageUrl: string;
}

const InstructorItem: React.FC<InstructorItemProps> = ({cohortName, description, program, startDate, endDate, avatarImageUrl }) => {
  return (
    <Paper className=''>
    <img src={avatarImageUrl} alt={`${cohortName} Avatar`} className='w-20 h-16' />
    <div>
      <h3>{cohortName}</h3>
      <p>{description}</p>
      <div>
        <p>Programs:</p>
        <ul>
          {program?.map((program) => (
            <li key={program.id}>{program.programName}</li>
          ))}
        </ul>
      </div>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
    </div>
  </Paper>

  )
}

export default InstructorItem