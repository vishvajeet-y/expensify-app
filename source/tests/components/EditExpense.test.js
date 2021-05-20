import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixture/expenses'

let startEditExpense,startRemoveExpense,history,wrapper

beforeEach(()=>{
    startEditExpense=jest.fn()
    startRemoveExpense=jest.fn()
    history={push:jest.fn()}
    wrapper=shallow(<EditExpensePage 
        startEditExpense={startEditExpense}
          startRemoveExpense={startRemoveExpense}
          history={history}
          expense={expenses[2]}
        />)
})

test('should render EditExpensePage',()=>{
     
    expect(wrapper).toMatchSnapshot()
})

test('should handle startEditExpense',()=>{
    wrapper.find(ExpenseForm).prop('onSubmit1')(expenses[2])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startEditExpense).toHaveBeenCalledWith(expenses[2].id,expenses[2])
})

test('should handle startRemoveExpense',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startRemoveExpense).toHaveBeenCalledWith(
        expenses[2].id
    )
})