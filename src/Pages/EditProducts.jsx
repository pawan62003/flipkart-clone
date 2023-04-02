import React ,{useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editData } from '../redux/ProductReducer/action';

export const EditProducts = () => {
const {id}=useParams();
const [data,setData]=useState('')
const product=useSelector((store)=>store.productReducer.products)
const dispatch=useDispatch()

const handleChange=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setData(prev=>{
        return {...prev,[name]:value}
    })
}

const handleEdit=(e)=>{
    e.preventDefault()
dispatch(editData(data,id))
}

useEffect(()=>{
    const data=product.find((el)=>el.id==+id)
    console.log(data);
    setData(data)
},[])

  return (
    <div>
        <h1> EditProduct Details :{id}</h1>
       <form onSubmit={handleEdit}>
        <input type="text" name={'image'}  onChange={handleChange} value={data.image}/>
        <input type="text" name={'title'}  onChange={handleChange} value={data.title}/>
        <input type="number" name={'price'}  onChange={handleChange} value={data.price} />
        <select name={"gender"} id=""  onChange={handleChange} value={data.gender}>
            <option value="">Select Gender</option>
            <option value="t-shirts">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="spice">Spices</option>
            <option value="dairy">Dairy Products</option>
            <option value="grain">Whole Grain</option>
            <option value="vegetable">Vegetables</option>
        </select>
        <button type='submit'>Edit Product</button>
       </form>
    
    
    </div>
  )
}