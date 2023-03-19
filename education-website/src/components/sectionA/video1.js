import React from 'react'
import { videos } from '../videoData';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Video1() {
    
    return (
    
   <div class='pid'>
    <Container>
    <iframe src = 'https://www.youtube.com/watch?v=2F8zBNzmROM&t=6s&ab_channel=BhaveshPurohit' allowFullScreen title = 'youtube video'></iframe>
      </Container>
    
    </div> 
    
    );
};




export default Video1