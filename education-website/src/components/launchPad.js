import React from 'react'
import './launchPad.css'
import { Link } from "react-router-dom";

function LaunchPad() {
    return (
        <div class="launchPad_container ml-md-3">
            <div class="row launchPad_row">
                <div class="col-lg-6 ">
                    <div class="card welcome_card_launchPad">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to = '/support'><a  class="btn btn-primary">support</a></Link>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <div class="card-body Study_Lounge_card">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a  class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 ">
                    <div class="card">
                        <div class="card-body Book_session">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a  class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row launchPad_row2">
                <div class="col-lg-6 col-md-12 col-sm-12 ">
                    <div class="card welcome_card_launchPad">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a  class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="card">
                        <div class="card-body Study_Lounge_card">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a  class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>



        </div>


    )
}

export default LaunchPad