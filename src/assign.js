import React, { useState } from 'react';

import './assign.css';

function Assign() {
    let [islight,setlight]= useState(true);
    let [marks,setmarks]=useState(0);
    
   
    return (
        <div>
        <div className={islight ? "light" : "dark"}>
            thiis room is {islight?  'light and temprature is 100': 'dark and temprature is 0'} <br/>
            total marks is {marks}
            <br/>
            <button onClick={()=> setlight(!islight)}> Flip button</button>
            <br/></div> 
            <div class="sum">
            <button onClick={()=> setmarks(marks + 10)}> add marks</button>
            <br/>
            <button onClick={()=> setmarks(marks - 10)}> decrease  marks</button>
            </div>
            
                    </div>
    )
}

export default Assign;
