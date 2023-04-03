import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import {ChevronDownIcon} from "@chakra-ui/icons"

const SideBarProduct = () => {
  return (
    <div style={{padding:"15px"}}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h2 style={{fontSize:"25px"}}>Filter</h2>
        <button style={{color:"blue"}}>Clear All</button>
      </div>
    <div style={{display:"flex",marginTop:"25px"}}>
     <Menu>
      <MenuButton
        px={4}
        py={2}
        transition='all 0.2s'
        borderRadius='md'
        
      >
        By Categories<ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>Spice</MenuItem>
        <MenuItem>dairyBekary</MenuItem>
        <MenuItem>foodGrain</MenuItem>
        <MenuItem>vegetable</MenuItem>
        <MenuItem>fruits</MenuItem>
        <MenuItem>tshirt</MenuItem>
        <MenuItem>Lounge tshirt</MenuItem>
      </MenuList>
    </Menu>
    </div>
  <div style={{display:"flex",marginTop:"25px"}}>
    <Menu bgColor="white">
      <MenuButton
        px={4}
        py={2}
        transition='all 0.2s'
        borderRadius='md'
      >
        By Gender<ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>Men</MenuItem>
        <MenuItem>Women</MenuItem>
        <MenuItem>Kids</MenuItem>
      </MenuList>
    </Menu>
    </div>
    <div style={{display:"flex",marginTop:"20px"}}>
        <Menu>
        <MenuButton
        px={4}
        py={2}
        transition='all 0.2s'
        borderRadius='md'
        
      >
        By Discount<ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>Spice</MenuItem>
        <MenuItem>dairyBekary</MenuItem>
        <MenuItem>foodGrain</MenuItem>
        <MenuItem>vegetable</MenuItem>
        <MenuItem>fruits</MenuItem>
        <MenuItem>tshirt</MenuItem>
        <MenuItem>Lounge tshirt</MenuItem>
      </MenuList>
    </Menu>
    </div>
    </div>
  )
}

export default SideBarProduct


// const DIV =styled.div`
// border-right: 1px solid grey;
// height:1000px;
// `