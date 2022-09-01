import React from 'react';
import './Main.css';
import Modal from '../../Components/Modal/Modal.jsx'
import '../../fonts/WorkSans[wght].ttf';


const Main =() =>{
   
    
    return(
       
              
          

        <div className="main">
            <div className="title">
                <p>Let's plan your <b>loan.</b> </p>
            </div>
            <div className="Modal" style={{
        display: 'flex',
        justifyContent: 'center',
        
        height: '100vh',
      }}>
              <Modal/> 
            </div>

            
           
        </div> 
        
       





        
        
    )
}
export default Main