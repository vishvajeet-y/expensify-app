import React from 'react'

const ExpenseTotal =(expenses)=>{
    return expenses.map((expense)=>expense.ammount)
        .reduce((sum,val)=>sum+val,0)

}

export default ExpenseTotal