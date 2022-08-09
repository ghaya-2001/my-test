import React from 'react';
import './Modal.css';
import Products from '../Products/Products.jsx'
import Counter from '../Counter/Counter';

const Modal =() =>{
   
    
    return(

        <div className="modal">
            <div className="products">
              <Products/>
             
            </div>
            <div>
                <table>
                    <tr>
                        <td>
                            <p>Loan amount</p>
                        </td>
                        <td>
                            <p>Number of Months</p>
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        <input type="text" name='loan amount' className='loanamount'/>
                        </td>
                        
                        <td>
                             <Counter/>
                        </td>  
                        
                    </tr>
                    <tr>
                
                     <input type="text" name='Monthly amount' className='monthlyamount'/>    
                    </tr>
                    <tr>
                    <input type="submit" value="Apply Now" className='button'/>
                    </tr>
                </table>
            
            </div>
            <div></div>
            <div></div>
        </div>
       





        
        
    )
}
export default Modal