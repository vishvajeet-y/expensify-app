import expenses from '../fixture/expenses'
import expenseReducer from '../../reducers/expenses'
import moment from 'moment'

test('should set default state',()=>{
   const state=expenseReducer(undefined,{type:'@@INIT'})
   expect(state).toEqual([])
})

test('should remove expenses by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
 })

 test('should not remove expenses if id is not found',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:-1
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual(expenses)
 })

 test('should edit expenses by given id',()=>{
     const updates={
         description:'hello'
     }
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates
    }
    const state=expenseReducer(expenses,action)
    expect(state[1].description).toEqual('hello')
 })

 test('should not edit expenses if id is not found',()=>{
    const updates={
        description:'hello'
    }
    const action={
        type:'EDIT_EXPENSE',
        id:-1,
        updates
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual(expenses)
 })

 test('should add new expense value',()=>{
     const expense={
         id:109,
        description:'Laptop',
        note:'',
        ammount:60000,
        createAt:moment()
     }
  
    const action={
        type:'ADD_EXPENSE',
        expense
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
 })