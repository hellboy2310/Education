import React from 'react';

import ReactPlayer from 'react-player';


function Video1() {


  return (
    <div className='pid'>

<ReactPlayer controls url='https://youtu.be/6zbIpE3Rqqc'  />


    </div>
  );
};

export default Video1;



{/* <video controls >
        <source src='./sectionA_video1.mp4' type='video/mp4' />
      </video> */}
{/* {videosArr.map((ele)=>(
     
        <div class="card-body video-card">

          <button>
            
          
           <p>{ele.release_date}</p>
          </button>
        </div>
     
      ))} */}
