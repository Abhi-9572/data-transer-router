import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import { useState } from 'react';
import Home from './Components1/Home';
import Profile from './Components1/Profile';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Show from './Components1/Show';

function App() {



  // const[in1,setIn1]=useState(0)
  // const[in2,setIn2]=useState(0)
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/show' element={<Show/>}/>
          
          
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
