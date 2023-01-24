import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router'
import { ListContext } from '../Context/ListContext';

const Show = () => {
  // const{list,setList}=useContext(ListContext)
  // console.log(list)
  const list=JSON.parse(localStorage.getItem("lists"))
  console.log(list);
    // const location = useLocation();
    // console.log(location.state[0].fname);
    
  return (
    <>
    <h2>Details</h2>
    {/* <p>First Name:{location.state[0].fname}</p>
    <p>Last Name:{location.state[0].lname}</p>
    <p>Gender:{location.state[0].gender}</p> */}
    <p>First Name:{list[0].fname}</p>
    <p>Last Name:{list[0].lname}</p>
    <p>Gender:{list[0].gender}</p>
    </>
  )
}

export default Show