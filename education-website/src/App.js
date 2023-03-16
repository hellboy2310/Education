
import './App.css';
import NavBar from './NavBar';
import LaunchPad from './components/launchPad';
import SideBar from './components/sideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SupportPage from './components/supportPage';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <SideBar/> 
      <Routes>
        <Route path="/" element={<LaunchPad />} />
        <Route path = "/support" element = {<SupportPage/>}/>
      </Routes>
    </BrowserRouter>
//     <div>
//       <NavBar></NavBar>
// <SideBar></SideBar>
// <SupportPage></SupportPage>
//     </div>
    
  );
}

export default App;
