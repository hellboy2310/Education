
import './App.css';
import NavBar from './NavBar';
import LaunchPad from './components/launchPad';
import SideBar from './components/sideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <SideBar/> 
      <Routes>
        <Route path="/" element={<LaunchPad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
