import React from 'react'
import { Link } from 'react-router-dom'
import './sectionA.css'
import { useState } from 'react';

function SectionA() {
    const [showSection, setShowSection] = useState(false);

    const handleArrowClick = () => {
        setShowSection(!showSection);
        if (!showSection) {
          const otherSections = document.querySelectorAll('.card-body.section_a:not(.section_selection_a)');
          otherSections.forEach(section => {
            section.style.transform = 'translateY(6rem)';
          });
        } else {
          const otherSections = document.querySelectorAll('.card-body.section_a:not(.section_selection_a)');
          otherSections.forEach(section => {
            section.style.transform = 'translateY(0)';
          });
        }
    };

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
                                       <Link to = '/cmapart1'> <button type="button" class="btn btn-secondary i_am_button_holding-subjects"><i class="fa fa-home" aria-hidden="true"></i></button></Link>
                                      <Link to='/sectionA'><button type="button" class="btn btn-secondary i_am_button_holding-subjects"> A</button></Link>  
                                      <Link to = '/sectionB'>  <button type="button" class="btn btn-secondary i_am_button_holding-subjects">B</button></Link>
                                        <Link to = '/sectionC'><button type="button" class="btn btn-secondary i_am_button_holding-subjects">C</button></Link>
                                        <Link to = '/sectionD'><button type="button" class="btn btn-secondary i_am_button_holding-subjects">D</button></Link>
                                        <Link to = '/sectionE'><button type="button" class="btn btn-secondary i_am_button_holding-subjects">E</button></Link>
                                        <Link to = '/sectionF'><button type="button" class="btn btn-secondary i_am_button_holding-subjects">F</button></Link>
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
            

            <div className="card-body section_a">
      <a href="/sectionA" style={{ textDecoration: 'none' }}>
        A 1.1
      </a>
      <i
        className="fa fa-arrow-down"
        aria-hidden="true"
        onClick={handleArrowClick}
      ></i>
      {showSection && (
        <div className="card-body section_selection_a">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
      )}
    </div>

<div class="card-body section_a">
<Link to = '/sectionB' style={{textDecoration:'none',}}>A 1.2</Link> 
<i class="fa fa-arrow-down" aria-hidden="true"></i>
</div>
<div class="card-body section_a">
<Link to = '/sectionC' style={{textDecoration:'none',}}>A 1.3</Link>
<i class="fa fa-arrow-down" aria-hidden="true"></i> 
</div>
<div class="card-body section_a">
<Link to = '/sectionD' style={{textDecoration:'none',}}>A 1.4</Link>
<i class="fa fa-arrow-down" aria-hidden="true"></i> 
</div>
<div class="card-body section_a">
<Link to = '/sectionE' style={{textDecoration:'none',}}>A 2.1</Link>
<i class="fa fa-arrow-down" aria-hidden="true"></i> 
</div>
<div class="card-body section_a">
<Link to = '/sectionF' style={{textDecoration:'none',}}>A 2.2</Link>
<i class="fa fa-arrow-down" aria-hidden="true"></i> 
</div>
</div>
        
        
)
  
}

export default SectionA;