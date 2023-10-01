import React from 'react'
import NavbarSidebar from './NavbarSidebar'
import Search from './Search'
import SidebarChats from './SidebarChats'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavbarSidebar />
      <Search />
      <SidebarChats />
    </div>
  )
}

export default Sidebar
