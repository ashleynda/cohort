import React from 'react'
import logo from "../../assets/logo.png"
import { Avatar, AvatarGroup } from '@mui/material'
import NotificationsNoneOutlined from '@mui/icons-material/NotificationsNoneOutlined'

const MobileNav = () => {
  return (
    <div className='md grid grid-cols-3 gap-44 items-center'>
    <img src={logo} alt='company-logo' className='col-span-1' />
    <div className='col-span-2 flex flex-row items-center justify-end md:justify-start'>
      <NotificationsNoneOutlined />
      <Avatar src="/broken-image.jpg" style={{color: '#008EEF'}} />
    </div>
  </div>
  
  )
}

export default MobileNav