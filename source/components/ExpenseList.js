import React from 'react'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import ExpenseListItem from './ExpenseList-item'
export const ExpenseList=(props)=>(
    <div>
    {
           
             props.expenses.length===0 ? <p>No Expenses</p>  : 
              props.expenses.map((expense)=>{
                return  <ExpenseListItem key={expense.id} {...expense}/>
             })
        
    }
   
    </div>
)

const mapStateToProps=(state)=>{
    return {
       expenses:selectExpenses(state.expenses,state.filters)
    }

}

export default connect(mapStateToProps)(ExpenseList)

// const ConnectedExpenseList=connect((state)=>{
//     return {
//        expenses:state.expenses,
//        filters:state.filters
//     }
// })(ExpenseList)

// export default ConnectedExpenseList