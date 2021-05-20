import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {altFilter,filters} from '../fixture/filters'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
let setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate
let wrapper
beforeEach(()=>{
    setTextFilter=jest.fn()
    sortByDate=jest.fn()
    sortByAmount=jest.fn()
    setStartDate=jest.fn()
    setEndDate=jest.fn()
    wrapper=shallow(<ExpenseListFilters 
        filters={filters}
         setTextFilter={setTextFilter}
         sortByDate={sortByDate}
         sortByAmount={sortByAmount}
         setStartDate={setStartDate}
         setEndDate={setEndDate}
        />)
})

test('should render ExpenseListFilter correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilter with altData correctly',()=>{
    wrapper.setProps({
        filters:altFilter
    })
    expect(wrapper).toMatchSnapshot()
 })

 test('should handle text change',()=>{
    const value='rent'
    wrapper.find('input').simulate('change',{
        target:{value}
    })
   expect(setTextFilter).toHaveBeenLastCalledWith(value)
 })

 test('should sortBy Date',()=>{
    wrapper.setProps({
        filters:altFilter
    })
    const value='date'
    wrapper.find('select').simulate('change',{
        target:{value}
    })
   expect(sortByDate).toHaveBeenCalled()
 })

 test('should sortBy Ammount',()=>{
    const value='ammount'
    wrapper.find('select').simulate('change',{
        target:{value}
    })
   expect(sortByAmount).toHaveBeenCalled()
 })

 test('should handle date change',()=>{
     const startDate=moment(0).add(4,'years')
     const endDate=moment(0).add(8,'years')
     wrapper.find(DateRangePicker).prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

 test('should handle date focus change',()=>{
     const calenderFocused='endDate'
     wrapper.find(DateRangePicker).prop('onFocusChange')(calenderFocused)
     expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
 })