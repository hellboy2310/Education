import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from './components/sideBar';

function App() {
  return (
   <div className='App_Container'>
    
    
    
    <NavBar></NavBar>  
    <SideBar></SideBar>
    
    
    
   </div>
  );
}

export default App;
