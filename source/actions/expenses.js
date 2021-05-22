import { v4 as uuidv4 } from 'uuid'
import database from '../Firebase/firebase'

// export const addExpense=({  //destructurng payload and asssigning default value
//     description='',
//     note='',
//     ammount=0,
//     createAt=0
// }={})=>({
//     type:'ADD_EXPENSE',
//     expense:{
//     id:uuidv4(),
//     description,
//     note,
//     ammount,
//     createAt
//     }
// })

export const addExpense=(expense)=>{
    return {
        type:'ADD_EXPENSE',
        expense
    }
}

export const startAddExpense=(expenseData={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid
        const {
            description='',
            note='',
            createAt=0,
            ammount=0
        }=expenseData

        const expense={description,note,ammount,createAt}

      return  database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        })
    }
}

//Remove Expense
export const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})

////startRemoveExpense

export const startRemoveExpense=({id}={})=>{

    return (dispatch,getState)=>{
        const uid=getState().auth.uid
        return   database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
              dispatch(removeExpense({id}))
          })
}
}

//Edit Expense
export const editExpense=(id,updates)=>({
   type:'EDIT_EXPENSE',
   id,updates
})

//startEditExpense

export const startEditExpense=(id,updates)=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id,updates))
        })
    }
}


//Set Expenses

export const setExpense=(expenses)=>({
         type:'SET_EXPENSE',
         expenses
})

export const startSetExpense=()=>{
    return (dispatch,getState)=>{
       // console.log(getState())
       const uid=getState().auth.uid
     return    database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
           // console.log(snapshot.val())
           const expenses=[]
            snapshot.forEach((childSnapshot)=>{
              //  console.log(childSnapshot.val())
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpense(expenses))

        })
           
       
    }
}