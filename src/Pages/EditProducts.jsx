import React ,{useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editData } from '../redux/ProductReducer/action';
import styled from 'styled-components';
import { AdminNavbar } from '../Components/Admin/AdminNavbar';

export const EditProducts = () => {
const {id}=useParams();
const [data,setData]=useState('')
const {AdminProduct}=useSelector((store)=>store.cartReducer)
const dispatch=useDispatch()

const handleChange=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    console.log(name,value)
    setData(prev=>{
        return {...prev,[name]:value}
    })
}

const handleEdit=(e)=>{
    e.preventDefault()
dispatch(editData(data,id))
}

useEffect(()=>{
    const data=AdminProduct.find((el)=>el.id==+id)
    console.log(data);
    setData(data)
},[])

  return (
    <div style={{backgroundColor:"beige",height:"1000px"}}>
    <AdminNavbar/>
     <DIV>

        <h1> Edit Product's Id:{id}</h1>
       <form onSubmit={handleEdit}>
        <input type="text" name={'image'}  onChange={handleChange} value={data.poster}/>
        <input type="text" name={'title'}  onChange={handleChange} value={data.title}/>
        <input type="number" name={'price'}  onChange={handleChange} value={data.price} />
        <select name={"gender"} id=""  onChange={handleChange} value={data.category}>
            <option value="">Select Category</option>
            <option value="t-shirts">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="spice">Spices</option>
            <option value="dairy">Dairy Products</option>
            <option value="grain">Whole Grain</option>
            <option value="vegetable">Vegetables</option>
        </select>
        <button type='submit'>Update</button>
       </form>
    
    
    </DIV>
    </div>
   
  )
}
const DIV=styled.div`
background-color:cyan;
 width: 60%;
 border:1px solid black;
 padding: 20px;
 margin: 20px auto;

input{
    border:1px solid black;
    width:90%;
    height:40px;
    font-size: large;
}
button{
    border:1px solid black;
    width:20%;
    height:35px;
}
form{
    display: flex;
    flex-direction: column;
    gap:15px;
    align-items: center;
}
select{
    border:1px solid black;
    width:50%;
    height:30px;
    font-size: large;
}
`;