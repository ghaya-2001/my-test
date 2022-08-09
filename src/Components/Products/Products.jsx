import React from 'react';
import './Products.css';
import travel from '../../Assets/travel.png';
import house from '../../Assets/house.png';
import dollar from '../../Assets/dollar.png';


const Products =() =>{

   
    
    return(

       
            <div className="products">
                <label>
                <input type="radio" name="test" value="travel"/>
                 <img src={travel} alt='' /> 
                </label>
                <label>
                <input type="radio" name="test" value="house" />
                <img src={house} alt='' /> 
                </label>
                <label>
                <input type="radio" name="test" value="dollar" />
                <img src={dollar} alt='' />
                </label>
            </div>
          
        
       





        
        
    )
}
export default Products