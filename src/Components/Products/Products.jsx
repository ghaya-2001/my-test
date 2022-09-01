import React from 'react';
import './Products.css';
import travel from '../../Assets/travel.png';
import house from '../../Assets/house.png';
import dollar from '../../Assets/dollar.png';


const Products =(props) =>{




   


return(


<div className="products">

<label>
<input  checked={props.product ==="Automobile Loan"} type="radio" value="Automobile Loan" onChange={(e)=>props.onChange(e.target.value) } onClick={()=>props.onClick()} />
<img src={travel} className='travel' alt='' />


</label>

<label>
<input   checked={props.product ==="Housing Loan"} type="radio"  value="Housing Loan" onChange={(e)=>props.onChange(e.target.value) } onClick={()=>props.onClick()}/>
<img src={house} className="house" alt='' />

</label>
<label>
<input  checked={props.product ==="Cash Loan"} type="radio"  value="Cash Loan" onChange={(e)=>props.onChange(e.target.value) } onClick={()=>props.onClick()}/>
<img src={dollar} className="dollar" alt='' />

</label>


</div>

)
}
export default Products