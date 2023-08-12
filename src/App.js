import './App.css';
import Cars from './Cars';
import Headers from './Headers';
import Buttons from './Buttons';
import FormSubmit from './FormSubmit';
import Products from './Products';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigationbar from './Navigationbar'
import { Routes, Route } from "react-router-dom"
import Errors from './Errors';
import ContactNumber from './ContactNumber';
import { UserContext } from './TimeInfoContext';
import React from 'react'
import RegistrationForm from './RegistrationForm';
import Login from './Login';
import Movies from './Movies';

function App() {

  const [date, setDate] = React.useState(new Date());
  const[userInfo, setUserInfo] = React.useState('')

  const userData = JSON.parse(sessionStorage.getItem("userName"));

  React.useEffect(() => {
    if(!userData){
      const timerID = setInterval(() => tick(), 1000);    
      return function cleanup() {
      clearInterval(timerID);
      }; 
    }else{
      setUserInfo(userData.name)
    }});

    
    function tick() {
      setDate(new Date());
    }

  const data = [
    {name:"John", age:30, gender:"Male"},
    {name:"Mary", age:20, gender:"Female"},
    {name:"Crystal", age:19, gender:"Female"},
  ]

  return (
    <div>
      {/* <Headers/>
      <Cars/>
      <Buttons/>
      <FormSubmit/> */}
        <UserContext.Provider value={userInfo? "Welcome " + userInfo : "The Time Now Is: " +  date.toLocaleTimeString()}>
        <Navigationbar/>   
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/about/:yourname' element={<About/>}/>
          <Route path='/contact'element={<Contact customer={data}/>} />
          <Route path='/mycontact/contactnumber' element={<ContactNumber/>}/>
          <Route path='/registration' element={<RegistrationForm/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/error' element={<Errors/>}/>
        </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;


