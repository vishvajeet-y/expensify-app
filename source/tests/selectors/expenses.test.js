import moment from 'moment'
import getVisibleExpenses from  '../../selectors/expenses'
import expenses from '../fixture/expenses'


test('should filter by text value',()=>{
    const filter={
        text:'E',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const result=getVisibleExpenses(expenses,filter)
    expect(result).toEqual([expenses[2],expenses[1]])
})

test('should filter by startDate ',()=>{
    const filter={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }

    const result=getVisibleExpenses(expenses,filter)
    expect(result).toEqual([expenses[2],expenses[0]])
})

test('should filter by endDate ',()=>{
    const filter={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }

    const result=getVisibleExpenses(expenses,filter)
    expect(result).toEqual([expenses[0],expenses[1]])
})

test('should filter by sortBy date ',()=>{
    const filter={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const result=getVisibleExpenses(expenses,filter)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})

test('should filter by sortBy ammount ',()=>{
    const filter={
        text:'',
        sortBy:'ammount',
        startDate:undefined,
        endDate:undefined
    }

    const result=getVisibleExpenses(expenses,filter)
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
})