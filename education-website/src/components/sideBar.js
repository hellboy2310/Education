import React from 'react'
import './sideBar.css';
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className='sidebar_maincontainer'>
        <div className='logo_container'>
            <h1>Miles Education</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        </div>
        <div className='button_container'>
          <Link to ='/'><button type="button" class="btn btn-outline-secondary sidebar_button">Launchpad</button></Link>
        
        <button type="button" class="btn btn-outline-secondary sidebar_button">CMA Part-1</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">CMA Part-2</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">Study Planner</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">Webinar</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">Certifications</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">Accounting.101</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">Forum</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">Offline Class</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">Study Launge</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">Mentoring</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">Practice Exam</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">MAC</button>
        <button type="button" class="btn btn-outline-secondary sidebar_button">Assesments</button>
        </div>

    </div>
  )
}

export default SideBar