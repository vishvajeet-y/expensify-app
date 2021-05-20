import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import './style/style.scss'
import AppRouter from  './router/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'
import './Firebase/firebase'

const store=configureStore()

console.log('test')

// store.dispatch(addExpense({description:'Water bill',ammount:200}))
// store.dispatch(addExpense({description:'Gas bill',createAt:100}))
// store.dispatch(addExpense({description:'Rent',ammount:850}))
// store.dispatch(setTextFilter('water'))

// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'))
// },3000)

// const state=store.getState()
// const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
// console.log(visibleExpenses)

const jsx=(
    <Provider store={store}>
    <AppRouter/>

    </Provider>
)


ReactDOM.render(jsx ,document.getElementById("app"))
