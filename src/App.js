// import logo from './logo.svg';
import './App.css'; 
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
// import About from './components/About.js';
import React, { useState } from 'react'
import Alert from './components/Alert.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(" ")
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type

      })
      setTimeout(() => {
          setAlert(" ");
      }, 3000);
  }
  const toggleMode = () =>{
    if(mode === 'light' ){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled","success")
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'install TextUtils now ';
      }, 1500);
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success")
      document.title = 'TextUtils - Light Mode';
    }
    
  }
  return (
  // <>
  <>
    {/* <Router> */}
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert}/>
    <div className= "container my-3">
    <TextForm  showAlert={showAlert}heading= "Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" 
          mode={mode}/>
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode = {mode}/>}/> */}
          {/* <Route exact path="/" element={}
          <TextForm  showAlert={showAlert}heading= "Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" 
          mode={mode}/>
        {/* </Routes> */}
    </div>
    {/* </Router> */}
    
  </>
  );
}


export default App;
