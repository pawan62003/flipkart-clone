import React from 'react'
const initialState={
    isLoading:false,
    isError:false,
    isAuth:false,
    token:""
}
export const reducer = (state=initialState,{type,paylaod}) => {
  return (
    <div>reducer</div>
  )
}
