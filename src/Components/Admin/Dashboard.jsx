
import "./dashboard.css"

import React from 'react'

export const Dashboard = () => {


  return (
   
    <div className='container'>

       
      <div className='navigation' >
<ul>
  <li>
    <a href="#">
      <span className='icon'></span>
       <span className='title'>BUY-KART</span>
    </a>
  </li>
    <li>
    <a href="/dashboard/admin">
      <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
       <span className='title'>Dashboard</span>
    </a>
  </li>
    <li>
    <a href="/customers">
      <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
       <span className='title'>Customers</span>
    </a>
  </li>
    <li>
    <a href="/messages">
      <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
       <span className='title'>Messages</span>
    </a>
  </li>
    <li>
    <a href="/help">
      <span className='icon'><ion-icon name="help-circle-outline"></ion-icon></span>
       <span className='title'>Help</span>
    </a>
  </li>
    <li>
    <a href="/settings">
      <span className='icon'><ion-icon name="settings-outline"></ion-icon></span>
       <span className='title'>Settings</span>
    </a>
  </li>
  <li>
    <a href="/password">
      <span className='icon'><ion-icon name="lock-closed-outline"></ion-icon></span>
       <span className='title'>Password</span>
    </a>
  </li>
  <li>
    <a href="/signout">
      <span className='icon'><ion-icon name="log-out-outline"></ion-icon></span>
       <span className='title'>Sign Out</span>
    </a>
  </li>
</ul>
      </div>
<div className='main'>
  <div className='topbar'>
    <div className='toggle'>
    <ion-icon name="menu-outline"></ion-icon>
    </div>
    <div className='search'>
      <label htmlFor="">
        <input type="text" name="" id="" placeholder='Search here' />
        <ion-icon name="search-outline"></ion-icon>
      </label>
    </div>
    <div className='user'>
      <img src="" alt="" />
      <ion-icon name="person-outline"></ion-icon>
  </div>
  </div>
</div>
    </div>

  
  )
}
