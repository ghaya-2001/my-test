import React from 'react';
import './Modal.css';
import Products from '../Products/Products.jsx'
import Counter from '../Counter/Counter';
import { useState ,useEffect} from 'react';
import CurrencyInput from 'react-currency-input-field';
import Pro from './../Products/products.json';



const Modal =() =>{
const monthlyAmount = 100
const [val, setVal] = useState(0);
const [product,setProduct] =useState('Automobile Loan');
const [data,setData]=useState({})

const handleOnValueChange = (newValue) => {
  if (newValue === undefined) {
    setVal(0);
  } else {
    setVal(newValue);
  }
};
const getData=()=>{
   
  for(var i=0;i<=3;i++){
    if((Pro[i].name)=== product) 
    {
       setData(Pro[i])

     
    } 
      
  };
  
 
  
 }

/*useEffect(()=>{
getData()  
logData()  
},[])*/
return(
<div className="modal">
<div className="products">
<Products onChange={product=>{setProduct(product)}} onClick={()=>getData()}/>

</div>
<div>
<table>
<tr>
<td>
<p >Loan amount</p>
</td>
<td>
<p className='diffrence'>Number of Months</p>
</td>
</tr>

<tr>
<td >


<div className='loan'>

<CurrencyInput 

className='loanamount'
id="input-example"
name="Loan amount"

groupSeparator=','
decimalSeparator='.'
prefix='$'
value={val}
onValueChange={handleOnValueChange} 
 
/>
</div>
</td>


<td >
<Counter className='counter'/>
</td>

</tr>
<tr>


</tr>
</table>



</div>
<div className='text'>
<div className='toptext'> <div className='monthly'> <p>Monthly amount</p> </div> <div className='amount'>${monthlyAmount}</div> </div>
<div className='bottomtext'><p></p></div>
</div>
<input type="submit" value="Apply Now" className='button'/>
<button onClick={()=>console.log(data)}>test</button>


</div>








)
}
export default Modal