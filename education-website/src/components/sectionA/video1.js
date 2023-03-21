import React, { useState } from 'react';

import ReactPlayer from 'react-player';


function Video1() {
const[count,setCount]  = useState(0);
console.log(count); 
return (
    
    <div class="card-body pid">
      
      <ReactPlayer width='100%' height='600px' controls url='https://youtu.be/6zbIpE3Rqqc' onPlay={()=>setCount(count+1)} onEnded = {()=>setCount(100)}/>
          
      </div>
  
  );
};

export default Video1;


