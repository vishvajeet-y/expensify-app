import React from 'react'
import {connect} from 'react-redux'
import {editExpense,removeExpense} from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends React.Component {
   onSubmit=(expense)=>{
    this.props.editExpense(this.props.expense.id,expense)
    this.props.history.push('/')
   }

   onRemove=()=>{
      this.props.removeExpense(this.props.expense.id)
      this.props.history.push('/')
       
   }
  render(){

    return  <div>
    <ExpenseForm 
   expense={this.props.expense} onSubmit1={this.onSubmit}   />
    <button onClick={this.onRemove} >Remove</button>    
    </div>
  }
}

const mapStateToProps=(state,props)=>(

    {
      expense:state.expenses.find((expense)=>{
        return expense.id===props.match.params.id
      })
    }
  )

  const mapDispatchToProps =(dispatch)=>({
   editExpense:(id,expense)=>(dispatch(editExpense(id,expense))),
   removeExpense:(id)=>(dispatch(removeExpense({id})))
  })

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)