import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import {AddExpensePage} from '../../components/AddExpensePage'
import expenses from '../fixture/expenses'

let startAddExpense,history,wrapper
beforeEach(()=>{
   startAddExpense=jest.fn()
     history={push:jest.fn()}
     wrapper=shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})

test('should render addExpensePage correctly',()=>{
//    const onSubmit=jest.fn()
//    const history={push:jest.fn()}
//    const wrapper=shallow(<AddExpensePage onSubmit={onSubmit} history={history} />)
   expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit',()=>{
//     const onSubmit=jest.fn()
//    const history={push:jest.fn()}
//    const wrapper=shallow(<AddExpensePage onSubmit={onSubmit} history={history} />)
   wrapper.find(ExpenseForm).prop('onSubmit1')(expenses[1])
   expect(history.push).toHaveBeenCalledWith('/')
   expect(startAddExpense).toHaveBeenCalledWith(expenses[1])

})