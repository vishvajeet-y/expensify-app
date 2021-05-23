import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import ExpenseTotal from '../selectors/ExpenseTotal'

export const ExpenseSummary =({expensesCount,expensesTotal})=>{
       const expenseWord=expensesCount===1?' expense':' expenses'
      
       const formatedExpenseTotal=numeral(expensesTotal).format('$0,0.00')
        return <div className='page-header'>
        <div className='content-container'>
        <h1 className='page-header__title'>Viewing <span>{expensesCount}</span>
          {expenseWord} totalling <span>{formatedExpenseTotal}</span></h1>
       <div className='page-header__action'>
       <Link className='button' to='/create'>Add Expense</Link>
       </div>  
        </div>
        </div>

}
const mapToProps=(state)=>{
    const visibleExpenses=selectExpenses(state.expenses,state.filters)
    return {
            expensesCount:visibleExpenses.length,
            expensesTotal:ExpenseTotal(visibleExpenses)
    }
}

export default connect(mapToProps,)(ExpenseSummary)