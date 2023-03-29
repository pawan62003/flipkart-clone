import React from 'react'

const initialState={
    isLoading:false,
    isError:false,
    products:[]
}

export const reducer = (state=initialState,{type,payload}) => {
  return (
    <div>reducer</div>
  )
}
