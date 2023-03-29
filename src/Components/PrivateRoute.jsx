import React from 'react'
import {useSelector} from 'react-redux'
import {useLocation,Navigate} from 'react-router-dom'

export const PrivateRoute = ({children}) => {
  const {isAuth}=useSelector((store)=>store.authReducer)
  const location=useLocation()
  console.log(location)
return isAuth ? children :<Navigate to={'/login'} state={location.pathname}/>
}
