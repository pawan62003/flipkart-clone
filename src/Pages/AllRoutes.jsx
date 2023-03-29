import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Admin } from './Admin'
export const AllRoutes = () => {
  return (
    <Routes>
<Route path='/admin' element={<Admin/>}/>
    </Routes>
  )
}
