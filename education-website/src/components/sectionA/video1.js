import React, { useState } from 'react';

import ReactPlayer from 'react-player';
let value = 0;



function Video1() {
const[count,setCount]  = useState(0);
const[percentage,setPerecentage] = useState(0);

console.log(count); 
console.log(value);
return (
    
    <div class="card-body pid">
      
      <ReactPlayer width='100%' height='600px' controls url='https://youtu.be/6zbIpE3Rqqc' onPlay={()=>setCount(count+1)} onEnded = {()=>setCount(100)}/>
          {count > 90?value=100/35:console.log("yet to watch")}
    
      </div>
  
  );
};

export default Video1;


