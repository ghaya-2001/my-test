import React from 'react';
import './Products.css';
import travel from '../../Assets/travel.png';
import house from '../../Assets/house.png';
import dollar from '../../Assets/dollar.png';


const Products =(props) =>{

console.log(props)


   const logData=()=>{
    console.log()
   }


return(


<div className="products">

<label>
<input type="radio" value="Automobile Loan" onChange={(e)=>props.onChange(e.target.value) } onClick={()=>props.onClick()} />
<img src={travel} className='travel' alt='' />


</label>

<label>
<input type="radio"  value="Housing Loan" onChange={(e)=>props.onChange(e.target.value) } onClick={()=>props.onClick()}/>
<img src={house} className="house" alt='' />

</label>
<label>
<input type="radio"  value="Cash Loan" onChange={(e)=>props.onChange(e.target.value) } onClick={()=>props.onClick()}/>
<img src={dollar} className="dollar" alt='' />

</label>
<button onClick={()=>logData()}>Test</button>

</div>

)
}
export default Products