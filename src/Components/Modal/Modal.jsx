import React, { useEffect } from 'react';
import './Modal.css';
import Products from '../Products/Products.jsx'

import { useState ,} from 'react';
import CurrencyInput from 'react-currency-input-field';
import Pro from './../Products/products.json';


const Modal =() =>{

  /*INITIALSTATE*/

const [val, setVal] = useState(0);
const [product,setProduct] =useState('Automobile Loan');
const [data,setData]=useState({ "id": "21",
"interest": "4.500",
"name": "Automobile Loan",
"min_amount": "1000.000",
"max_amount": "25000.000",
"min_tenure": "12",
"max_tenure": "60",
"image": "https://cdn.pixabay.com/photo/2017/01/08/07/49/travel-1962321_1280.png"});
const[count,setCount]=useState(12);
const[months,setMonths]=useState(12)
const [loan,setLoan]=useState(0)
const [error1,setError1]=useState("")
const [error2,setError2]=useState("")
const[totalamount,setTotalamount]=useState(0)
const[monthlyinstallment,setMonthlyinstallment]=useState(0)
const[targetmonth,setTargetmonth]=useState("")
const[targetyear,setTargetyear]=useState("")



/*FUNCTIONS*/
const handleOnValueChange = (newValue) => {
  if (newValue === undefined ) {
    setVal(0);
  } else {
    setVal(parseInt(newValue));
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
const checkMonths=()=>{
  if((12<=count && count<=data.max_tenure)) {
    setMonths(parseInt(count))
    setError2("")
  }
  else{
    setError2('Must be between 12 &'+data.max_tenure)
    
  }
}

const checkLoan=()=>{
  if(val>=data.min_amount && val<=data.max_amount){
    setLoan(val)
    setError1("")
  }
  else{
    setError1("Must be between "+data.min_amount+" & "+data.max_amount)
  }
}



const calculTotal=()=>{
  
  setTotalamount(loan+(loan * data.interest))
  
} 

const calculMonthlyInstallment=()=>{
 
  setMonthlyinstallment(totalamount / months)
} 

const targetDate=()=>{
  
  setTargetyear(yyyy+ parseInt((mm+months)/12));
  setTargetmonth(monthNames[mm+months-(parseInt((mm+months)/12)*12)])
}

/**DATE */
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var today = new Date();
var mm =today.getMonth(); 
var yyyy = today.getFullYear();


 useEffect(()=>{
  calculTotal()
  calculMonthlyInstallment()
  targetDate()


});


return(
<div className="modal">
<div className="products">
<Products onChange={product=>{setProduct(product)}} onClick={()=>getData()} product={product}/>
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
onBlur={()=>checkLoan()}

/>
</div>
</td>


<table className='counter'>
<td >
<input type='submit' value="<" className='buttons' onClick={()=> { if (count>12) {setCount(count-1); setMonths(count-1)}}}/>
</td>
<td ><input  type='number' min="12" max={data.max_tenure} onBlur={()=>checkMonths()} className='count' value={count} onChange={e => setCount(parseInt(e.target.value))}/></td>
<td>
<input type='submit' value=">" className='buttons' onClick={()=>{ if (count<data.max_tenure) {setCount(count+1); setMonths(count+1)}}}/>
</td>
</table>


</tr>
<tr>
  <td>
    <p className='error1'>{error1}</p>
  </td>

  <td>
    <p className='error2'>{error2}</p>
  </td>


</tr>
</table>



</div>
<div className='text'>
<div className='toptext'> <div className='monthly'> <p>Monthly amount</p> </div> <div className='amount'>${monthlyinstallment.toFixed(2)}</div> </div>
<div className='bottomtext'><p>You’re planning {months} <b>monthly deposits</b> to reach your <b>${loan}</b> goal by <b>{targetmonth} {targetyear}</b>. The total amount loaned will be <b>${totalamount}</b></p></div>
</div>
<input type="submit" value="Apply Now" className='button'/>



</div>








)
}
export default Modal