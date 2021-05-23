import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import './style/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import AppRouter,{history} from  './router/AppRouter'
import configureStore from './store/configureStore'
import {startSetExpense} from './actions/expenses'
import {login,logout} from './actions/auth'
import {firebase} from  './Firebase/firebase'
import LoadingPage from './components/LoadingPage'

const store=configureStore()

const jsx=(
    <Provider store={store}>
    <AppRouter/>

    </Provider>
)

let hasRendered=false
const renderApp=()=>{
    if(!hasRendered)
    {
        ReactDOM.render(jsx ,document.getElementById("app"))
        hasRendered=true
    }
}

ReactDOM.render(<LoadingPage /> ,document.getElementById("app"))


firebase.auth().onAuthStateChanged((user)=>{
    if(user)
    {
        store.dispatch(login(user.uid))
       //console.log('Log in')
      // console.log(user.uid)
        store.dispatch(startSetExpense()).then(()=>{
            
           renderApp()
//      console.log(history.location.pathname)
          if(history.location.pathname==='/')
          {
              //console.log('hello')
              history.push('/dashboard')
          }


        })   
    }
    
    else
    {
        console.log('Log Out')
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }

})
