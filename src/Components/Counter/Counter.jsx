import React from 'react';
import './Counter.css';
import { useState } from 'react';

const Counter =() =>{
   const[count,setcount]=useState(0);
    
    return(

        <div className="counter">
            
            <div>
                <table>
                    <tr>
                        <td>{count}</td>
                        <td>
                        <button onClick={()=>setcount(count+1)}>+</button>
                        <button onClick={()=>setcount(count-1)}>-</button>
                        </td>
                    </tr>
                </table>
            
            </div>
           
        </div>
       





        
        
    )
}
export default Counter