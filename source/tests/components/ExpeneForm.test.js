import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixture/expenses'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

test('should render ExpenseForm correctly',()=>{
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm correctly after passing data',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission',()=>{
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change',()=>{
    const value='New Description'
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should set note  on textArea change',()=>{
    const value='New note'
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should set ammount  if valid input',()=>{
    const value='12.25'
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('ammount')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should not set ammount if invalid input',()=>{
    const value='12.122'
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe('')
    expect(wrapper).toMatchSnapshot()
})

test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy=jest.fn()
    // onSubmitSpy('andrew','Delhi')
    // expect(onSubmitSpy).toHaveBeenCalledWith('andrew','Delhi')
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit1={onSubmitSpy} />)

    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        ammount:expenses[0].ammount,
        note:expenses[0].note,
        createAt:expenses[0].createAt
    })
})


test('should set new date on date change',()=>{
    const now=moment()
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find(SingleDatePicker).prop('onDateChange')(now)
    expect(wrapper.state('createAt')).toEqual(now)
})


test('should not calender focus on change',()=>{
    const focused=true
    const wrapper=shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused})
    expect(wrapper.state('calenderFocused')).toBe(focused)
})