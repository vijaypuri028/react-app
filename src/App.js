import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Component/Home"
import Navbar from './Component/navbar/Navbar';
import Register from './Component/Register';
import Login from './Component/Login';
import About from './Component/About';
import Admin from './Component/admin/Admin';

import { Logincontext } from './Logincontext';
import { useState } from 'react';
// import { useState } from 'react';



function App() {

  const [loginStatus,setLoginStatus]=useState(localStorage.getItem('loginStatus'))
  const [name,setName]=useState(localStorage.getItem('userName'))



  
  return (
    <>
    <Logincontext.Provider value={{loginStatus,setLoginStatus,name,setName}}>
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>



        {/* admin */}
        <Route path='/adminpage' element={<Admin/>}></Route>


      </Routes>
      {/* <Futter/> */}

    </Router>
    </Logincontext.Provider>
    
    </>
  );
}

export default App;
