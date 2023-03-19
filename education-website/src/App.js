
import './App.css';
import NavBar from './NavBar';
import LaunchPad from './components/launchPad';
import SideBar from './components/sideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SupportPage from './components/supportPage';
import Cmapart1 from './components/cmapart1';
import SectionA from './components/sectionA/sectionA';
import SectionB from './components/sectionB/sectionB';
import SectionC from './components/sectionC/sectionC';
import SectionD from './components/sectionD/sectionD';
import SectionE from './components/sectionE/sectionE';
import SectionF from './components/sectionF/sectionF';
import Video1 from './components/sectionA/video1';


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
        <Route path = "/sectionB" element = {<SectionB/>}/>
        <Route path = "/sectionC" element = {<SectionC/>}/>
        <Route path = "/sectionD" element = {<SectionD/>}/>
        <Route path = "/sectionE" element = {<SectionE/>}/>
        <Route path = "/sectionF" element = {<SectionF/>}/>
        <Route path = "/video1" element = {<Video1/>}/>

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
