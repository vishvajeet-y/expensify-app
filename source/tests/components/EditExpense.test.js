import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixture/expenses'

let editExpense,removeExpense,history,wrapper

beforeEach(()=>{
    editExpense=jest.fn()
    removeExpense=jest.fn()
    history={push:jest.fn()}
    wrapper=shallow(<EditExpensePage 
          editExpense={editExpense}
          removeExpense={removeExpense}
          history={history}
          expense={expenses[2]}
        />)
})

test('should render EditExpensePage',()=>{
     
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense',()=>{
    wrapper.find(ExpenseForm).prop('onSubmit1')(expenses[2])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(editExpense).toHaveBeenCalledWith(expenses[2].id,expenses[2])
})

test('should handle removeExpense',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
    expect(removeExpense).toHaveBeenCalledWith(
        expenses[2].id
    )
})