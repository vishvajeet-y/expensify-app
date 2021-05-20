import React from 'react'
import moment from 'moment'
import numeral from 'numeral'

import {Link} from 'react-router-dom'
numeral.register('locale', 'in', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  currency: {
    symbol: '₹'
  }
});
{numeral.locale('in')}
const ExpenseListItem= ({id,description,ammount,createAt})=>{

  return  <div>
    <Link to={`./edit/${id}`}> <h3>{description}</h3></Link>
    
    <p>
    
    Ammount: {numeral(ammount).format('$0,0.00')} </p>
      
   <p> Date :{moment(createAt).format('Do MMMM,YYYY')}</p>  
    
   
    </div>
    }

export default ExpenseListItem