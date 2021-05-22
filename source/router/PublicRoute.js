import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'

export const PublicRoute=({
    isAuthenticated,
    component:Component,
    ...rest
})=>(
    //console.log(props)
     <Route {...rest} component={(props)=>(
    isAuthenticated ? 
     ( <Redirect to='/dashboard' />   )
    :   ( <Component {...props} /> )

   )
       
   }/>
)

const mapStateToProps=(state)=>({
    isAuthenticated:!!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)