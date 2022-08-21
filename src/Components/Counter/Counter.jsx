import React from 'react';
import './Counter.css';
import { useState } from 'react';

const Counter =() =>{
const[count,setcount]=useState(1);

return(

<div className="counter">

<div>
<table>
<tr>

<td>
<input type='submit' value="<" className='buttons' onClick={()=> { if (count>1) {setcount(count-1)}}}/>
</td>
<td ><div className='count'>{count}</div></td>
<td>
<input type='submit' value=">" className='buttons' onClick={()=>{ if (count<12) {setcount(count+1)}}}/>
</td>
</tr>
</table>

</div>

</div>  
)
}
export default Counter