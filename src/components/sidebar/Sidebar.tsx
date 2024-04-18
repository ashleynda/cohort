import { Button } from '@mui/material'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
const Sidebar = () => {
  return (
    <div className='w-[300px] border-r min-h-screen'>
        Sidebar
        <div className='flex flex-col'>
            <Button><GroupIcon/> Cohorts</Button>
            <Button><ImportContactsTwoToneIcon/> Programs</Button>
            <Button>Instructors</Button>
            <Button>Learners</Button>
        </div>
    </div>
  )
}

export default Sidebar
