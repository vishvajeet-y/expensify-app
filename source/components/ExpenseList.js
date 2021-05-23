import React from 'react'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import ExpenseListItem from './ExpenseList-item'
export const ExpenseList=(props)=>(
    <div className="content-container">
    <div className='list-header'>
    <div className='show-for-mobile'>Expenses</div>
    <div className='show-for-desktop'>Expense</div>
    <div className='show-for-desktop'>Ammount</div>
    </div>
    <div className='list-body'>
    {
           
             props.expenses.length===0 ?
             <div className="list-item list-item--message" > <span>No Expenses</span></div>  : 
              props.expenses.map((expense)=>{
                return  <ExpenseListItem key={expense.id} {...expense}/>
             })
        
    }
    </div>
    </div>
)

const mapStateToProps=(state)=>{
    return {
       expenses:selectExpenses(state.expenses,state.filters)
    }

}

export default connect(mapStateToProps)(ExpenseList)