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

  return <Link className="list-item" to={`/edit/${id}`}> 
    <div>
    <h3 className="list-item__title">{description}</h3>
    <span className="list-item__subtitle">{moment(createAt).format('Do MMMM,YYYY')} </span>
    </div>
    <h3 className="list-item__data">{numeral(ammount).format('$0,0.00')}</h3>
   </Link>
   
    }

export default ExpenseListItem