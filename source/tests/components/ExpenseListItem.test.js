import React from 'react'
import ExpenseListItem from '../../components/ExpenseList-item'
import {shallow} from 'enzyme'
import expenses from '../fixture/expenses'

test('should render expenseList Item',()=>{
    const wrapper=shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})
