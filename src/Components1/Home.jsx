import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <br />
    <Link to="/profile">Profile</Link>
        <br />
    
     <h1>This is Home</h1>
    </>
   
  )
}

export default Home