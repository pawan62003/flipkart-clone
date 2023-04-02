import React from 'react'
import ProductList from '../Components/ProductList'
import SideBarProduct from '../Components/SideBarProduct'
import styled from 'styled-components'
//import styled from 'styled-components'

const ProductPage = () => {
  return (
   <>
   <div style={{height:"115px"}} >

   </div>
    <div style={{display: "grid",width:"95%",
                  gridTemplateColumns:"15% 85%",
                  margin: "auto"}}>
      <div style={{}}>
        <SideBarProduct/>
      </div>
      <div style={{}}>
        <ProductList/>
      </div>
    </div>
    <footer/>
    </>
  )


}

export default ProductPage

