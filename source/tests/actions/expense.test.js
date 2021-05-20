import {removeExpense,addExpense,editExpense, startAddExpense} from '../../actions/expenses'
import expenses from '../fixture/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../Firebase/firebase'

const createMockStore=configureMockStore([thunk])

test('should setup remove expense action object',()=>{
    const result=removeExpense({id:'abc123'})
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:'abc123'
    })
})

test('should setup edit expense action object',()=>{
    const id='abc123'
   const updates={
        desc:'hello',
        ammount:400
    }
    const result=editExpense(id,updates)
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'abc123',
        updates:{
            desc:'hello',
            ammount:400
        }     
    })
})

test('should setup add expense action object with Provided value' ,()=>{


const result=addExpense(expenses[2])
expect(result).toEqual({
    type:'ADD_EXPENSE',
    expense:expenses[2]
  
})

})

test('should add expenses to database and store',(done)=>{
    const store=createMockStore({})
       const expenseData={
           description:'Mouse',
           note:'This one is better',
           createAt:1000,
           ammount:300
       }
       store.dispatch(startAddExpense(expenseData)).then(()=>{
          const actions=store.getActions()
          expect(actions[0]).toEqual({
              type:'ADD_EXPENSE',
              expense:{
                  id:expect.any(String),
                  ...expenseData
              }
          })
       return   database.ref(`expenses/${actions[0].expense.id}`).once('value')
       }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData)
        done()
  })

})

test('should add expenses with default to database and store',(done)=>{
    const store=createMockStore({})
    const expenseDefault={
        description:'',
        note:'',
        createAt:0,
        ammount:0
    }
   
       store.dispatch(startAddExpense({})).then(()=>{
          const actions=store.getActions()
          expect(actions[0]).toEqual({
              type:'ADD_EXPENSE',
              expense:{
                                id:expect.any(String),
                                ...expenseDefault
                     }
          })
       return   database.ref(`expenses/${actions[0].expense.id}`).once('value')
       }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefault)
        done()
  })

})

// test('should setup add expense action object with default value',()=>{

//     const result=addExpense()
//     expect(result).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             description:'',
//             note:'',
//             ammount:0,
//             createAt:0,
//             id:expect.any(String)
//         }   
//     })

// })