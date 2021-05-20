import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('should test for Dashboard Page',()=>{
    const wrapper=shallow(<ExpenseDashboardPage/>)
    expect(wrapper).toMatchSnapshot()
})