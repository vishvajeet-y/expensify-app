import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixture/expenses'

let editExpense,startRemoveExpense,history,wrapper

beforeEach(()=>{
    editExpense=jest.fn()
    startRemoveExpense=jest.fn()
    history={push:jest.fn()}
    wrapper=shallow(<EditExpensePage 
          editExpense={editExpense}
          startRemoveExpense={startRemoveExpense}
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

test('should handle startRemoveExpense',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startRemoveExpense).toHaveBeenCalledWith(
        expenses[2].id
    )
})