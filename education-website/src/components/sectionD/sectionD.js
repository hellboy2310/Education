import React from 'react'
import { Link } from 'react-router-dom'
import Video4 from './video4'
import { videoData, videos } from '../videoData'


import './sectionD.css'
import { useState, useRef } from 'react';

function SectionA() {
    let videosArr = videos.results


    const [isOpen, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [sectionAvideos, setIssectionAvideos] = useState(false);

   



    return (



        <div class="row Cmapart1_main_container" >

            <div class=" col-lg-5 ">
                <div class="card cmacard1 col-sm-12">
                    <div class="card-body">
                        <h2 class="card-title Cma_heading">Cma final planning performance and analytics</h2>
                        <div class="card card_container ">
                            <div class="card-body  box-holding-buttons ">
                                <div class="btn-toolbar content_buttons" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group mr-2 " role="group" aria-label="First group">
                                        <button type="button" class="btn btn-secondary i_am_button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>

                                    </div>
                                    <div class="btn-group mr-2" role="group" aria-label="Second group">
                                        <Link to='/cmapart1'> <button type="button" class="btn btn-secondary i_am_button_holding-subjects"><i class="fa fa-home" aria-hidden="true"></i></button></Link>
                                        <Link to='/sectionA'><button type="button" class="btn btn-secondary i_am_button_holding-subjects"> A</button></Link>
                                        <Link to='/sectionB'>  <button type="button" class="btn btn-secondary i_am_button_holding-subjects">B</button></Link>
                                        <Link to='/sectionC'><button type="button" class="btn btn-secondary i_am_button_holding-subjects">C</button></Link>
                                        <Link to='/sectionD'><button type="button" class="btn btn-secondary i_am_button_holding-subjects">D</button></Link>
                                        <Link to='/sectionE'><button type="button" class="btn btn-secondary i_am_button_holding-subjects">E</button></Link>
                                        <Link to='/sectionF'><button type="button" class="btn btn-secondary i_am_button_holding-subjects">F</button></Link>
                                    </div>
                                    <div class="btn-group" role="group" aria-label="Third group">
                                        <button type="button" class="btn btn-secondary i_am_button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-7 ">
                <div class="card cmacard2">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>


            <div className="dropdown">
                <div className="dropdown__header section_a " onClick={() => setIsOpen1(!isOpen)}>
                    Measurement Concepts
                    <i class="fa fa-arrow-down"></i>
                </div>
                {isOpen && (
                    <ul className="dropdown__list section_a">
                        <button type="button" class="btn btn-outline-primary"> <i class="fa fa-book"></i> E-BOOK</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => setIssectionAvideos(!sectionAvideos)}><i class="fa fa-play" ></i> LAUNCH VIDEO</button>
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-bars" ></i> LAUNCH MCQ</button>
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-file"></i>LAUNCH ESSAY</button>
                    </ul>
                )}
            </div>

            <div className="dropdown">
                <div className="dropdown__header section_a  " onClick={() => setIsOpen2(!isOpen2)}>
                    Costing System
                    <i class="fa fa-arrow-down"></i>
                </div>
                {isOpen2 && (
                    <ul className="dropdown__list  section_a">
                        <button type="button" class="btn btn-outline-primary"> <i class="fa fa-book"></i> E-BOOK</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => setIssectionAvideos(!sectionAvideos)}><i class="fa fa-play" ></i> LAUNCH VIDEO</button>
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-bars"></i> LAUNCH MCQ</button>
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-file"></i>LAUNCH ESSAY</button>
                    </ul>
                )}
            </div>

            <div className="dropdown">
                <div className="dropdown__header section_a  " onClick={() => setIsOpen3(!isOpen3)}>
                    Overhead Cost
                    <i class="fa fa-arrow-down"></i>
                </div>
                {isOpen3 && (
                    <ul className="dropdown__list  section_a">
                        <button type="button" class="btn btn-outline-primary"> <i class="fa fa-book"></i> E-BOOK</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => setIssectionAvideos(!sectionAvideos)}><i class="fa fa-play" ></i> LAUNCH VIDEO</button>
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-bars"></i> LAUNCH MCQ</button>
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-file"></i>LAUNCH ESSAY</button>
                    </ul>
                )}
            </div>

            <div className="dropdown">
                <div className="dropdown__header section_a  " onClick={() => setIsOpen4(!isOpen4)}>
                    Business Process Improvement
                    <i class="fa fa-arrow-down"></i>
                </div>
                {isOpen4 && (
                    <ul className="dropdown__list  section_a">
                        <button type="button" class="btn btn-outline-primary"> <i class="fa fa-book"></i> E-BOOK</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => setIssectionAvideos(!sectionAvideos)}><i class="fa fa-play" ></i> LAUNCH VIDEO</button>
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-bars"></i> LAUNCH MCQ</button>
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-file"></i>LAUNCH ESSAY</button>
                    </ul>
                )}
            </div>

            <div className="dropdown">
                <div className="dropdown__header section_a  " onClick={() => setIsOpen5(!isOpen5)}>
                    Annual Profit Plan
                    <i class="fa fa-arrow-down"></i>
                </div>
                {isOpen5 && (
                    <ul className="dropdown__list  section_a">
                        <button type="button" class="btn btn-outline-primary"> <i class="fa fa-book"></i> E-BOOK</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => setIssectionAvideos(!sectionAvideos)}><i class="fa fa-play" ></i> LAUNCH VIDEO</button>
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-bars"></i> LAUNCH MCQ</button>
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-file"></i>LAUNCH ESSAY</button>
                    </ul>
                )}
            </div>

            {sectionAvideos && (<div class="videos-list ">

                <i class="fa fa-times cross-button" onClick={() => setIssectionAvideos(!sectionAvideos)} aria-hidden="true"></i>
                {videosArr.map((movieEle) => (
                    <div class="card ">
                        <div class="card-body video-card">

                            <button>


                                <Link to='/video3'> <h5 class="card-title">{movieEle.popularity}</h5></Link>
                            </button>
                        </div>
                    </div>
                ))}

            </div>)
            }

        </div>





    )

}

export default SectionA;










