import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav'
// import Workspace from '../pages/workspace/Workspace'
import Home from '../pages/home/Home'
import Hero from '../pages/workspace/Hero'

const Layout = () => {
  return (
    <>
        <Nav />
        <Hero/>
    </>
  )
}

export default Layout;