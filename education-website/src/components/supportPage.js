import React from 'react'
import './supportPage.css'
import { useState } from 'react';

function SupportPage() {

    const [mail, setEmail] = useState('');
    const [pass, setpassword] = useState(0);
    const [body, setBody] = useState(0);


        const handleDetails = () =>{
            console.log(mail);
            console.log(pass);
            console.log(body);
        }

    return (
        <div class="supportpage_main_container">
            <div class="card text-center ">
                <div class="card-header ">
                    Support
                </div>
                <div class="card-body supportpage_card ">
                    <div class="container">
                        <div class="row">
                            <div class="row mb-3 supportpage_input_container">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                  <div class="col-sm-10">
                                    <input type="email" placeholder='Enter your Email' class="form-control" id="inputEmail3" onChange={(e)=>setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div class="row mb-3 supportpage_input_container">
                                <label for="inputPassword3" class="col-sm-2 col-form-label"  >Subject</label>
                                <div class="col-sm-10">
                                    <input type="subject" class="form-control" id="inputPassword3" placeholder='Enter your subject'  onChange={(e)=>setpassword(e.target.value)} />
                                </div>
                            </div>
                            <div class="row mb-3 supportpage_input_container">
                                <label for="inputPassword3" class="col-sm-2 col-form-label"  >body</label>
                                <div class="col-sm-10">
                                    <textarea type="password" class="form-control" id="inputPassword3" placeholder='Enter your body' onChange={(e)=>setBody(e.target.value)} />
                                </div>
                            </div>

                        </div>
                    </div>
        
                    <a class="btn btn-primary supportpage_sendmail-btn" onClick={handleDetails}>SEND MAIL</a>
                </div>

            </div>
        </div>
    )
}

export default SupportPage