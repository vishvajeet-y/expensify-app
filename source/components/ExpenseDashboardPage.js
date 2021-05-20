import React from 'react'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseList from './ExpenseList'
import ExpenseSummary from './ExpenseSummary'
const ExpenseDashboardPage=()=>(
    <div>
    <ExpenseSummary />
    <ExpenseListFilters/>
    <ExpenseList/>
    </div>
)
export default ExpenseDashboardPage