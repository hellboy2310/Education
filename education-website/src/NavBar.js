import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='NavBar_Container'>
      <ul className="nav justify-content-end">
        <li className="nav-item">

          <a className="nav-link disabled" href="#"><i class="fa fa-suitcase" aria-hidden="true"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"><i class="fa fa-calculator" aria-hidden="true"></i></a>


        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"><i class="fa fa-video-camera" aria-hidden="true"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled"><i class="fa fa-bell" aria-hidden="true"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"><i class="fa fa-book" aria-hidden="true"></i></a>

        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>

        </li>

        <li className="nav-item">
          <a className="nav-link disabled" href="#"><i class="fa fa-address-book-o" aria-hidden="true"></i></a>

        </li>


        <li className="nav-item">
          <a className="nav-link disabled" href="#"><i class="fa fa-phone" aria-hidden="true"></i></a>

        </li>

        <li className="nav-item">
          <a className="nav-link disabled" href="#"><i class="fa fa-user" aria-hidden="true"></i></a>

        </li>





      </ul>
    </div>
  )
}

export default NavBar