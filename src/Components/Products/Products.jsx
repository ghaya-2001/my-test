import React from 'react';
import './Products.css';
import travel from '../../Assets/travel.png';
import house from '../../Assets/house.png';
import dollar from '../../Assets/dollar.png';
import travelC from '../../Assets/travel checked.png';
import houseC from '../../Assets/house checked.png';
import dollarC from '../../Assets/dollar checked.png';
import { useState } from 'react';


const Products =() =>{
const [product,setProduct] =useState('Automobile Loan')
   
    
    return(

       
            <div className="products">
                
                <label>
                <input type="radio" checked={product == "Automobile Loan"} value="Automobile Loan" onChange={(e)=>{setProduct(e.target.value)}}/>
                 <img src={travel} className='travel' alt='' /> 
                 <img src={travelC} className='travelC' alt='' />
                </label>
                <label>
                <input type="radio" checked={product == "Housing Loan"} value="Housing Loan" onChange={(e)=>{setProduct(e.target.value)}}/> 
                <img src={house} className="house" alt=''  />
                <img src={houseC} class="houseC"  alt=''/>  
                </label>
                <label>
                <input type="radio" checked={product == "Cash Loan"} value="Cash Loan"  onChange={(e)=>{setProduct(e.target.value)}}/>
                <img src={dollar} className="dollar" alt='' />
                <img src={dollarC} className="dollarC" alt='' />
                </label>
                
            </div>
          
        
       





        
        
    )
}
export default Products