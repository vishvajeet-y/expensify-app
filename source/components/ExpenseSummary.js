import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import ExpenseTotal from '../selectors/ExpenseTotal'

export const ExpenseSummary =({expensesCount,expensesTotal})=>{
       const expenseWord=expensesCount===1?'expense':'expenses'
      
       const formatedExpenseTotal=numeral(expensesTotal).format('$0,0.00')
        return <div>
       <h1>viewing {expensesCount} {expenseWord} totaling {formatedExpenseTotal}</h1>
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