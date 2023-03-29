import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { AdminNavbar } from '../Components/AdminNavbar'

const initialState={
    image:"",
    title:"",
    price:0,

}

export const Admin = () => {
const [product,setProduct]=useState(initialState)
const dispatch=useDispatch()

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Got submit")
}
  return (
    <div>
        <h3>Welcome Admin</h3>
        <AdminNavbar/>
        <form onSubmit={handleSubmit}>
            <input type="url" placeholder='Image URL' />
          <input type="text" placeholder='Title'/>
          <input type="text" placeholder='Price'/>
          <input type="text" placeholder='Brand'/>
          <input type="submit" />
        </form>
          
    </div>
  )
}
