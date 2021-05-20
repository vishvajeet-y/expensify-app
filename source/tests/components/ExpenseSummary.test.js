import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixture/expenses'
import {ExpenseSummary} from '../../components/ExpenseSummary'
test('shouled correctly render ExperimentSummary one expense',()=>{
    const wrapper=shallow(<ExpenseSummary expensesCount={1} expensesTotal={123}/>) 
    expect(wrapper).toMatchSnapshot()
})

test('shouled correctly render ExperimentSummary with multiple expense',()=>{
    const wrapper=shallow(<ExpenseSummary expensesCount={23} expensesTotal={123343}/>) 
    expect(wrapper).toMatchSnapshot()
})