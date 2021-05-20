import {removeExpense,addExpense,editExpense, startAddExpense,setExpense
    ,startSetExpense,startRemoveExpense,startEditExpense} from '../../actions/expenses'
import expenses from '../fixture/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../Firebase/firebase'

const createMockStore=configureMockStore([thunk])

beforeEach((done)=>{
   const expenseData={}
   expenses.forEach(({id,description,note,ammount,createAt})=>{
          expenseData[id]={description,note,ammount,createAt}
   })
   database.ref('expenses').set(expenseData).then(()=>{done()})
})

test('should setup remove expense action object',()=>{
    const result=removeExpense({id:'abc123'})
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:'abc123'
    })
})

test('should remove action from firebase',(done)=>{
 
    const store=createMockStore({})
    const id=expenses[2].id
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        })
        return database.ref(`expenses/${id}`).once('value')//Promise Chaining
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy()
        done()
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

test('should edit expenses in firebase',(done)=>{
    const store=createMockStore({})
    const id=expenses[0].id
    const updates={ammount:210.03}
    store.dispatch(startEditExpense(id,updates)).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,updates
        })
        return database.ref(`expenses/${id}`).once('value') //Promise Chaining
    }).then((snapshot)=>{
           expect(snapshot.val().ammount).toBe(updates.ammount)
           done()
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
       return   database.ref(`expenses/${actions[0].expense.id}`).once('value') //Promise Chanining
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

test('should setup set expense action object with data',()=>{
    const action=setExpense(expenses)
    expect(action).toEqual({
        type:'SET_EXPENSE',
        expenses
    })
})

test('should fetch the expenses from firebase',(done)=>{
    const store=createMockStore({})
    store.dispatch(startSetExpense()).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'SET_EXPENSE',
            expenses
        })
        done()
    })
})
