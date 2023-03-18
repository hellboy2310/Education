
import './App.css';
import NavBar from './NavBar';
import LaunchPad from './components/launchPad';
import SideBar from './components/sideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SupportPage from './components/supportPage';
import Cmapart1 from './components/cmapart1';
import SectionA from './components/sectionA/sectionA';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <SideBar/> 
      <Routes>
        <Route path="/" element={<LaunchPad />} />
        <Route path = "/support" element = {<SupportPage/>}/>
        <Route path = "/cmapart1" element = {<Cmapart1/>}/>
        <Route path = "/sectionA" element = {<SectionA/>}/>

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
