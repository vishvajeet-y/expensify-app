import React, { Component } from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'

export const PrivateRoute=({
    isAuthenticated,
    component:Component,
    ...rest
})=>(
    //console.log(props)
     <Route {...rest} component={(props)=>(
    isAuthenticated ? 
     (  <div> 
          <Header />
          <Component {...props} />   
          </div>  )
    :   ( <Redirect to='/' />)

   )
       
   }/>
)

const mapStateToProps=(state)=>({
    isAuthenticated:!!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)